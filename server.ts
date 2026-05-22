import express from "express";
import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import fs from "fs";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

function formatPrice(val: number): string {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to support JSON parsing
  app.use(express.json());

  // API Route: Send configured smart home package email
  app.post("/api/send-email", async (req, res) => {
    try {
      const { name, phone, email, items, total, trackingId } = req.body;

      // Server-side validation
      if (!name || !email) {
        return res.status(400).json({
          success: false,
          error: "A név és az e-mail mezők kötelezőek!"
        });
      }

      console.log(`[Email API] Új ajánlatkérés érkezett: ${trackingId} - ${name} (${email})`);

      // Build HTML table of items
      let itemsHtml = `
        <tr style="border-bottom: 1px solid #30363d !important; background-color: #161b22 !important;">
          <td style="padding: 12px; font-weight: bold; color: #f0f6fc !important; text-align: left; background-color: #161b22 !important;">Okosotthon Rendszer Alapcsomag (A rendszer agya)</td>
          <td style="padding: 12px; text-align: center; color: #8b949e !important; background-color: #161b22 !important;">1 db</td>
          <td style="padding: 12px; text-align: right; color: #8b949e !important; background-color: #161b22 !important;">100 000 Ft</td>
          <td style="padding: 12px; text-align: right; font-weight: bold; color: #38bdf8 !important; background-color: #161b22 !important;">100 000 Ft</td>
        </tr>
      `;

      if (Array.isArray(items)) {
        items.forEach((item: any) => {
          const rowPrice = item.price || 0;
          const rowCount = item.count || 0;
          const rowTotal = rowPrice * rowCount;
          
          itemsHtml += `
            <tr style="border-bottom: 1px solid #30363d !important; background-color: #161b22 !important;">
              <td style="padding: 12px; font-weight: bold; color: #f0f6fc !important; text-align: left; background-color: #161b22 !important;">${item.name || "Ismeretlen eszköz"}</td>
              <td style="padding: 12px; text-align: center; color: #8b949e !important; background-color: #161b22 !important;">${rowCount} db</td>
              <td style="padding: 12px; text-align: right; color: #8b949e !important; background-color: #161b22 !important;">${formatPrice(rowPrice)} Ft</td>
              <td style="padding: 12px; text-align: right; font-weight: bold; color: #38bdf8 !important; background-color: #161b22 !important;">${formatPrice(rowTotal)} Ft</td>
            </tr>
          `;
        });
      }

      // Build the email HTML template aligning with the HelyiOkos arculat (dark blue/navy, white tables, /HelyiOkos.png inline logo)
      const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>HelyiOkos Okosotthon Konfiguráció</title>
  <style type="text/css">
    :root {
      color-scheme: dark;
      supported-color-schemes: dark;
    }
    body, .gmail-bg {
      background-color: #0d1117 !important;
      color: #f0f6fc !important;
    }
    .gmail-card {
      background-color: #161b22 !important;
      border: 1px solid #30363d !important;
    }
    .white-table {
      background-color: #161b22 !important;
      color: #f0f6fc !important;
    }
    .white-table th {
      background-color: #0d1117 !important;
      color: #8b949e !important;
    }
    .white-table td {
      color: #f0f6fc !important;
      border-bottom: 1px solid #30363d !important;
    }
    @media (prefers-color-scheme: dark) {
      body, .gmail-bg {
        background-color: #0d1117 !important;
        color: #f0f6fc !important;
      }
      .gmail-card {
        background-color: #161b22 !important;
        border: 1px solid #30363d !important;
      }
      .white-table {
        background-color: #161b22 !important;
        color: #f0f6fc !important;
      }
      .white-table th {
        background-color: #0d1117 !important;
        color: #8b949e !important;
      }
      .white-table td {
        color: #f0f6fc !important;
        border-bottom: 1px solid #30363d !important;
      }
    }
    @media (prefers-color-scheme: light) {
      body, .gmail-bg {
        background-color: #0d1117 !important;
        color: #f0f6fc !important;
      }
      .gmail-card {
        background-color: #161b22 !important;
        border: 1px solid #30363d !important;
      }
      .white-table {
        background-color: #161b22 !important;
        color: #f0f6fc !important;
      }
      .white-table th {
        background-color: #0d1117 !important;
        color: #8b949e !important;
      }
      .white-table td {
        color: #f0f6fc !important;
        border-bottom: 1px solid #30363d !important;
      }
    }
    [data-ogsc] .gmail-bg { background-color: #0d1117 !important; color: #f0f6fc !important; }
    [data-ogsc] .gmail-card { background-color: #161b22 !important; border: 1px solid #30363d !important; }
    [data-ogsc] .white-table { background-color: #161b22 !important; color: #f0f6fc !important; }
  </style>
</head>
<body class="gmail-bg" style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #0d1117 !important; color: #f0f6fc !important;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" class="gmail-bg" style="background-color: #0d1117 !important; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table width="100%" class="gmail-card" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #161b22 !important; border-radius: 20px; border: 1px solid #30363d !important; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);">
          
          <!-- Header Branded Banner -->
          <tr>
            <td align="center" style="padding: 30px 20px; background-color: #0d1117 !important; border-bottom: 2px solid #0284c7 !important; text-align: center;">
              <!-- Embedded inline logo reference via cid:logo -->
              <img src="cid:logo" alt="HelyiOkos" style="height: 48px; width: auto; margin: 0 auto 12px auto; display: block;" />
              <div style="font-size: 13px; color: #38bdf8 !important; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px; margin-top: 8px;">Okosotthon Ajánlatkérés</div>
              <div style="font-size: 22px; color: #ffffff !important; font-weight: 900; margin-top: 6px; font-family: Arial, sans-serif;">Ajánlatszám: ${trackingId}</div>
            </td>
          </tr>

          <!-- Message Body Content -->
          <tr>
            <td style="padding: 30px 20px; text-align: left;">
              <p style="font-size: 16px; font-weight: bold; color: #38bdf8 !important; margin-top: 0; margin-bottom: 15px;">Kedves Levente!</p>
              <p style="font-size: 14px; line-height: 1.6; color: #cbd5e1 !important; margin-bottom: 25px;">
                Új egyedi csomag-konfiguráció és ajánlatkérés érkezett a <strong>HelyiOkos</strong> weboldal kalkulátorából. Alább találhatók a részletes adatok:
              </p>

              <!-- Ügyfél Kapcsolati Adatok -->
              <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #0284c7 !important; border-bottom: 1px solid #30363d !important; padding-bottom: 8px; margin-top: 0; margin-bottom: 15px; font-weight: bold;">Ügyfél Kapcsolati Adatok</h3>
              
              <table width="100%" border="0" cellspacing="0" cellpadding="10" style="background-color: #0d1117 !important; border-radius: 12px; margin-bottom: 30px; color: #e2e8f0 !important; font-size: 14px; border: 1px solid #30363d !important;">
                <tr>
                  <td width="30%" style="font-weight: bold; color: #8b949e !important; border-bottom: 1px solid #30363d !important; padding: 12px; background-color: #0d1117 !important;">Név:</td>
                  <td style="color: #ffffff !important; font-weight: bold; border-bottom: 1px solid #30363d !important; padding: 12px; background-color: #0d1117 !important;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #8b949e !important; border-bottom: 1px solid #30363d !important; padding: 12px; background-color: #0d1117 !important;">Telefonszám:</td>
                  <td style="border-bottom: 1px solid #30363d !important; padding: 12px; color: #ffffff !important; background-color: #0d1117 !important;">${phone || "Nincs megadva"}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #8b949e !important; padding: 12px; background-color: #0d1117 !important;">E-mail cím:</td>
                  <td style="padding: 12px; background-color: #0d1117 !important;"><a href="mailto:${email}" style="color: #38bdf8 !important; text-decoration: none; font-weight: bold;">${email}</a></td>
                </tr>
              </table>

              <!-- Összeállított Csomag Eszközök -->
              <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #0284c7 !important; border-bottom: 1px solid #30363d !important; padding-bottom: 8px; margin-bottom: 15px; font-weight: bold;">Kalkulált Eszközök és Árak</h3>
              
              <div style="overflow-x: auto; margin-bottom: 25px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="12" class="white-table" style="background-color: #161b22 !important; border-radius: 12px; margin-bottom: 10px; font-size: 13.5px; color: #f0f6fc !important; border-collapse: collapse; overflow: hidden; border: 1px solid #30363d !important;">
                  <thead>
                    <tr style="background-color: #0d1117 !important; text-align: left; font-weight: bold; font-size: 11px; text-transform: uppercase; color: #8b949e !important; border-bottom: 2px solid #30363d !important;">
                      <th style="padding: 12px; text-align: left; background-color: #0d1117 !important; color: #8b949e !important;">Eszköz megnevezése</th>
                      <th style="padding: 12px; text-align: center; width: 80px; background-color: #0d1117 !important; color: #8b949e !important;">Mennyiség</th>
                      <th style="padding: 12px; text-align: right; width: 100px; background-color: #0d1117 !important; color: #8b949e !important;">Egységár</th>
                      <th style="padding: 12px; text-align: right; width: 110px; background-color: #0d1117 !important; color: #8b949e !important;">Összesen</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${itemsHtml}
                  </tbody>
                </table>
              </div>

              <!-- Grand Total visual summary block -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 15px;">
                <tr>
                  <td align="right">
                    <table border="0" cellspacing="0" cellpadding="14" style="background-color: #0d1117 !important; border: 2px solid #0284c7 !important; border-radius: 14px;">
                      <tr>
                        <td style="font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #8b949e !important; font-weight: bold; padding-right: 15px; text-align: right;">Teljes Végösszeg (Beépítéssel):</td>
                        <td style="font-size: 21px; color: #38bdf8 !important; font-weight: 1000; font-family: Arial, sans-serif; text-align: right; white-space: nowrap;">${formatPrice(total)} Ft</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Branded Details -->
          <tr>
            <td align="center" style="padding: 24px; background-color: #0d1117 !important; font-size: 12px; color: #64748b !important; border-top: 1px solid #30363d !important; text-align: center;">
              <p style="margin: 0; line-height: 1.5;">Ez az e-mail automatikusan generálódott a HelyiOkos kalkulátorából.</p>
              <p style="margin: 6px 0 0; color: #38bdf8 !important; font-weight: bold;">HelyiOkos - Prémium Helyi Okosotthon Megoldások</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `;

      // Build customer receipt email HTML template
      const clientEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>Sikeres ajánlatkérés - HelyiOkos</title>
  <style type="text/css">
    :root {
      color-scheme: dark;
      supported-color-schemes: dark;
    }
    body, .gmail-bg {
      background-color: #0d1117 !important;
      color: #f0f6fc !important;
    }
    .gmail-card {
      background-color: #161b22 !important;
      border: 1px solid #30363d !important;
    }
    .white-table {
      background-color: #161b22 !important;
      color: #f0f6fc !important;
    }
    .white-table th {
      background-color: #0d1117 !important;
      color: #8b949e !important;
    }
    .white-table td {
      color: #f0f6fc !important;
      border-bottom: 1px solid #30363d !important;
    }
    @media (prefers-color-scheme: dark) {
      body, .gmail-bg {
        background-color: #0d1117 !important;
        color: #f0f6fc !important;
      }
      .gmail-card {
        background-color: #161b22 !important;
        border: 1px solid #30363d !important;
      }
      .white-table {
        background-color: #161b22 !important;
        color: #f0f6fc !important;
      }
      .white-table th {
        background-color: #0d1117 !important;
        color: #8b949e !important;
      }
      .white-table td {
        color: #f0f6fc !important;
        border-bottom: 1px solid #30363d !important;
      }
    }
    @media (prefers-color-scheme: light) {
      body, .gmail-bg {
        background-color: #0d1117 !important;
        color: #f0f6fc !important;
      }
      .gmail-card {
        background-color: #161b22 !important;
        border: 1px solid #30363d !important;
      }
      .white-table {
        background-color: #161b22 !important;
        color: #f0f6fc !important;
      }
      .white-table th {
        background-color: #0d1117 !important;
        color: #8b949e !important;
      }
      .white-table td {
        color: #f0f6fc !important;
        border-bottom: 1px solid #30363d !important;
      }
    }
    [data-ogsc] .gmail-bg { background-color: #0d1117 !important; color: #f0f6fc !important; }
    [data-ogsc] .gmail-card { background-color: #161b22 !important; border: 1px solid #30363d !important; }
    [data-ogsc] .white-table { background-color: #161b22 !important; color: #f0f6fc !important; }
  </style>
</head>
<body class="gmail-bg" style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #0d1117 !important; color: #f0f6fc !important;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" class="gmail-bg" style="background-color: #0d1117 !important; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table width="100%" class="gmail-card" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #161b22 !important; border-radius: 20px; border: 1px solid #30363d !important; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);">
          
          <!-- Header Branded Banner -->
          <tr>
            <td align="center" style="padding: 30px 20px; background-color: #0d1117 !important; border-bottom: 2px solid #0284c7 !important; text-align: center;">
              <!-- Embedded inline logo reference via cid:logo -->
              <img src="cid:logo" alt="HelyiOkos" style="height: 48px; width: auto; margin: 0 auto 12px auto; display: block;" />
              <div style="font-size: 13px; color: #38bdf8 !important; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px; margin-top: 8px;">Sikeresen rögzítettem az igényeit!</div>
              <div style="font-size: 20px; color: #ffffff !important; font-weight: 900; margin-top: 6px; font-family: Arial, sans-serif;">Ajánlatszám: ${trackingId}</div>
            </td>
          </tr>

          <!-- Message Body Content -->
          <tr>
            <td style="padding: 30px 20px; text-align: left;">
              <p style="font-size: 17px; font-weight: bold; color: #38bdf8 !important; margin-top: 0; margin-bottom: 15px;">Kedves ${name}!</p>
              <p style="font-size: 14.5px; line-height: 1.6; color: #cbd5e1 !important; margin-bottom: 20px;">
                Sikeresen összeállította a személyre szabott okosotthon csomagját! Megkaptam az ajánlatkérését, hamarosan (általában 24 órán belül) keresni fogom Önt a részletekkel és a felméréssel kapcsolatban.
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #cbd5e1 !important; margin-bottom: 25px;">
                Addig is, alább találja az Ön által kalkulált egyedi összeállítás tisztán olvasható részleteit:
              </p>

              <!-- Összeállított Csomag Eszközök -->
              <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #0284c7 !important; border-bottom: 1px solid #30363d !important; padding-bottom: 8px; margin-bottom: 15px; font-weight: bold;">Az Ön által összeállított konfiguráció</h3>
              
              <div style="overflow-x: auto; margin-bottom: 25px;">
                <table width="100%" border="0" cellspacing="0" cellpadding="12" class="white-table" style="background-color: #161b22 !important; border-radius: 12px; margin-bottom: 10px; font-size: 13.5px; color: #f0f6fc !important; border-collapse: collapse; overflow: hidden; border: 1px solid #30363d !important;">
                  <thead>
                    <tr style="background-color: #0d1117 !important; text-align: left; font-weight: bold; font-size: 11px; text-transform: uppercase; color: #8b949e !important; border-bottom: 2px solid #30363d !important;">
                      <th style="padding: 12px; text-align: left; background-color: #0d1117 !important; color: #8b949e !important;">Eszköz megnevezése</th>
                      <th style="padding: 12px; text-align: center; width: 80px; background-color: #0d1117 !important; color: #8b949e !important;">Mennyiség</th>
                      <th style="padding: 12px; text-align: right; width: 100px; background-color: #0d1117 !important; color: #8b949e !important;">Egységár</th>
                      <th style="padding: 12px; text-align: right; width: 110px; background-color: #0d1117 !important; color: #8b949e !important;">Összesen</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${itemsHtml}
                  </tbody>
                </table>
              </div>

              <!-- Grand Total visual summary block -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 15px;">
                <tr>
                  <td align="right">
                    <table border="0" cellspacing="0" cellpadding="14" style="background-color: #0d1117 !important; border: 2px solid #0284c7 !important; border-radius: 14px;">
                      <tr>
                        <td style="font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #8b949e !important; font-weight: bold; padding-right: 15px; text-align: right;">Várható végösszeg beépítéssel:</td>
                        <td style="font-size: 21px; color: #38bdf8 !important; font-weight: 1000; font-family: Arial, sans-serif; text-align: right; white-space: nowrap;">${formatPrice(total)} Ft</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px; border-top: 1px solid #30363d !important; padding-top: 20px;">
                <tr>
                  <td>
                    <p style="font-size: 13px; line-height: 1.6; color: #cbd5e1 !important; margin: 0;">
                      Ha bármilyen további kérdése adódna, hivatkozzon bátran a(z) <strong style="color: #38bdf8 !important;">${trackingId}</strong> azonosítószámára!
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Messenger Button at the bottom of customer confirmation email -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px; text-align: center;">
                <tr>
                  <td align="center" style="padding-top: 10px; padding-bottom: 5px;">
                    <a href="https://m.me/61581849661468" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 16px 32px; background-color: #2563eb !important; background-image: linear-gradient(to right, #2563eb, #0ea5e9) !important; color: #ffffff !important; font-family: 'Segoe UI', Arial, sans-serif; font-size: 16px; font-weight: 950; text-decoration: none; border-radius: 14px; box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3); text-transform: uppercase; letter-spacing: 1.5px; text-align: center;">
                      Írjon nekem Messengeren!
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Branded Details -->
          <tr>
            <td align="center" style="padding: 24px; background-color: #0d1117 !important; font-size: 12px; color: #64748b !important; border-top: 1px solid #30363d !important; text-align: center;">
              <p style="margin: 0; line-height: 1.5;">Ez egy automatikus visszaigazolás a HelyiOkos kalkulátorából.</p>
              <p style="margin: 6px 0 0; color: #38bdf8 !important; font-weight: bold;">HelyiOkos - Prémium Helyi Okosotthon Megoldások</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `;

      // Mail sender parameters
      const recipient = "nagylevente.tech@gmail.com";
      let smtpHost = process.env.SMTP_HOST;
      
      // Auto-correct common typo of smtp: "smpt" instead of "smtp"
      if (smtpHost) {
        smtpHost = smtpHost.trim();
        if (smtpHost.toLowerCase().startsWith("smpt.")) {
          const correctedHost = "smtp" + smtpHost.substring(4);
          console.warn(`[Email API] SMTP_HOST gépelési hiba kijavítva: "${smtpHost}" -> "${correctedHost}"`);
          smtpHost = correctedHost;
        }
      }

      const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const smtpFrom = process.env.SMTP_FROM || '"HelyiOkos Kalkulátor" <info@helyiokos.hu>';

      // Embedded branding assets (inline attachment)
      const logoPath = path.join(process.cwd(), "HelyiOkos.png");
      const attachments = [];
      if (fs.existsSync(logoPath)) {
        attachments.push({
          filename: "HelyiOkos.png",
          path: logoPath,
          cid: "logo" // same ID as in src="cid:logo"
        });
      }

      if (smtpHost && smtpUser && smtpPass) {
        // Authenticated SMTP setup
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // true for 465, false for 587 or other
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        // 1. Send copy to the owner (Levente)
        const infoOwner = await transporter.sendMail({
          from: smtpFrom,
          to: recipient,
          subject: `HO-ÚJ AJÁNLATKÉRÉS [${trackingId}] - ${name}`,
          html: emailHtml,
          attachments: attachments
        });
        console.log(`[Email API] Értesítő levél sikeresen kiküldve Leventének: ${infoOwner.messageId}`);

        // 2. Send confirmation to the client automatically
        const infoClient = await transporter.sendMail({
          from: smtpFrom,
          to: email, // customer email address
          subject: `Sikeres ajánlatkérés - HelyiOkos [${trackingId}]`,
          html: clientEmailHtml,
          attachments: attachments
        });
        console.log(`[Email API] Automatikus visszaigazoló levél elküldve az ügyfélnek (${email}): ${infoClient.messageId}`);

        return res.json({
          success: true,
          trackingId: trackingId,
          message: "Sikeres e-mail küldés (Levente és az ügyfél is megkapta)."
        });
      } else {
        // Logging content representation for debugging or when variables aren't set yet
        console.warn("[Email API] SMTP nincs teljesen konfigurálva. Mindkét e-mail küldése sikeresen szimulálva!");
        console.log(`[Email API] Generált Ajánlatszám: ${trackingId}`);
        console.log(`[Email API] Generált HTML Levente e-mail hossz: ${emailHtml.length} karakter`);
        console.log(`[Email API] Generált HTML ügyfél visszaigazolás hossz: ${clientEmailHtml.length} karakter`);
        
        return res.json({
          success: true,
          simulated: true,
          trackingId: trackingId,
          message: "Sikeresen rögzítve (SMTP szimulációs mód aktív)."
        });
      }

    } catch (error: any) {
      console.error("[Email API] Hiba az e-mail küldés feldolgozása közben:", error);
      return res.status(500).json({
        success: false,
        error: "Szerveroldali hiba történt az ajánlatküldés feldolgozásakor: " + error.message
      });
    }
  });

  // Serve static UI assets and handle dev/production separation
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
