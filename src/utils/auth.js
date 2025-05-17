import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { resend } from '@/libs/resend';

// Auth token
export const generateToken = async (cookiesStore, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  cookiesStore.set('jwt', token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d in ms
    httpOnly: true, // Prevent XSS attacks cross-site scripting attacks
    sameSite: 'strict', // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== 'development',
    path: '/',
  });

  return token;
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

// Verification token

export const generateVerificationToken = () => {
  const token = crypto.randomInt(100000, 1000000);
  return token.toString();
};

export const sendVerificationTokenEmail = async ({
  verificationToken,
  email,
  fullName,
}) => {
  const { error } = await resend.emails.send({
    from: 'Seikhlasnya <noreply@seikhlasnya.musyafa.dev>',
    to: email,
    subject: 'Kode OTP Anda || Seikhlasnya',
    html: `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Kode OTP</title>
          <style>
            body {
              font-family: "Poppins", sans-serif;
              background-color: #ffffff;
              padding: 40px;
            }

            .container {
              max-width: 500px;
              margin: auto;
              background-color: #ffffff;
              border: 1px solid #eee;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
            }

            .logo img {
              width: 36px;
              height: 36px;
            }

            .content {
              font-size: 16px;
              color: #333;
            }

            .otp-code {
              font-size: 24px;
              font-weight: bold;
              margin: 20px 0;
            }

            .note {
              color: #666;
              font-size: 14px;
              border-top: 1px solid #eee;
              padding-top: 15px;
              border-bottom: 1px solid #eee;
              padding-bottom: 15px;
            }

            .signature {
              margin-top: 20px;
              font-weight: bold;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <img
                src="https://res.cloudinary.com/dixlmlcu4/image/upload/v1746524055/seikhlasnya-app/app/anc0o1rqurtkisthvtik.png"
                alt="Logo"
              />
              <div class="content">
                <p>Hi ${fullName}, berikut adalah code OTP Anda</p>
                <div class="otp-code">${verificationToken}</div>
                <div class="note">
                  <p>
                    Kode ini hanya berlaku selama 5 menit dan jangan berikan kepada
                    siapapun.
                  </p>
                  <p>Jika Anda tidak meminta kode ini, abaikan saja email ini</p>
                </div>
                <div class="signature">Seikhlasnya</div>
              </div>
            </div>
          </div>
        </body>
        </html>
    `,
  });

  if (error) {
    console.log(error);
  }
};

// Reset password token

export const generateResetPasswordToken = () => {
  const token = crypto.randomBytes(32).toString('hex');
  return token;
};

export const sendResetPasswordTokenEmail = async ({
  resetPasswordToken,
  email,
  fullName,
}) => {
  const { error } = await resend.emails.send({
    from: 'Seikhlasnya <noreply@seikhlasnya.musyafa.dev>',
    to: email,
    subject: 'Kode OTP Anda || Seikhlasnya',
    html: `<p>Hi ${fullName}, kode otp kamu: <b>${resetPasswordToken}</b></p>`,
  });

  if (error) {
    console.log(error);
  }
};
