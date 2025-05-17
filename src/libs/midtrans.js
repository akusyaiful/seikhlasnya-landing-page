import midtransClient from 'midtrans-client';

console.log('wkwk', process.env.MIDTRANS_CLIENT_KEY);

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export { snap };
