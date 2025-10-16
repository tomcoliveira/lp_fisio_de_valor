import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

interface FormPayload {
  name?: string;
  email?: string;
  whatsapp?: string;
}

const DEFAULT_RECIPIENTS = [
  'tom.c@entre.wtf',
  'carlagutschov88@gmail.com',
];

const SHEETS_SCOPE = ['https://www.googleapis.com/auth/spreadsheets'];

function getRecipients(): string[] {
  const configured = process.env.FORM_NOTIFICATION_EMAILS;
  const targets = configured ? configured.split(',') : DEFAULT_RECIPIENTS;
  return targets
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

async function sendEmail(data: Required<FormPayload>) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, FORM_FROM_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error('Missing SMTP configuration (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS).');
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === 'true' || Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const recipients = getRecipients();
  if (recipients.length === 0) {
    throw new Error('No recipients configured for form notifications.');
  }

  const fromAddress = FORM_FROM_EMAIL || SMTP_USER;
  const subject = 'Nova inscrição - Mentoria Fisio de Valor';
  const plainMessage = `Olá!\n\nChegou uma nova inscrição na landing page:\n\nNome: ${data.name}\nE-mail: ${data.email}\nWhatsApp: ${data.whatsapp}\n\nAbraços.`;

  const htmlMessage = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <h2 style="margin-top: 0;">Nova inscrição - Mentoria Fisio de Valor</h2>
      <p>Chegou uma nova inscrição na landing page:</p>
      <ul>
        <li><strong>Nome:</strong> ${data.name}</li>
        <li><strong>E-mail:</strong> <a href="mailto:${data.email}">${data.email}</a></li>
        <li><strong>WhatsApp:</strong> <a href="https://wa.me/${data.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer">${data.whatsapp}</a></li>
      </ul>
      <p>Abraços.</p>
    </div>
  `;

  await transporter.sendMail({
    from: fromAddress,
    to: recipients,
    subject,
    text: plainMessage,
    html: htmlMessage,
  });
}

async function appendToGoogleSheet(data: Required<FormPayload>) {
  const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY, GOOGLE_SHEETS_ID, GOOGLE_SHEETS_RANGE } = process.env;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || !GOOGLE_SHEETS_ID) {
    throw new Error('Missing Google Sheets configuration (service account email/key or sheet ID).');
  }

  const privateKey = GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: SHEETS_SCOPE,
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const range = GOOGLE_SHEETS_RANGE || 'Sheet1!A:D';

  await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEETS_ID,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          data.name,
          data.email,
          data.whatsapp,
          new Date().toISOString(),
        ],
      ],
    },
  });
}

function validatePayload(body: FormPayload): body is Required<FormPayload> {
  return Boolean(
    body &&
      typeof body.name === 'string' &&
      body.name.trim() &&
      typeof body.email === 'string' &&
      body.email.trim() &&
      typeof body.whatsapp === 'string' &&
      body.whatsapp.trim(),
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const payload = req.body as FormPayload;

  if (!validatePayload(payload)) {
    return res.status(400).json({ message: 'Campos obrigatórios não informados.' });
  }

  const normalized: Required<FormPayload> = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    whatsapp: payload.whatsapp.trim(),
  };

  try {
    await Promise.all([
      sendEmail(normalized),
      appendToGoogleSheet(normalized),
    ]);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('submit-form error', error);
    const message = error instanceof Error ? error.message : 'Erro ao processar a inscrição.';
    return res.status(500).json({ message });
  }
}
