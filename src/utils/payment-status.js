import { capitalizeFirstLetter } from './formatter';

export const getPaymentStatusProperty = (status) => {
  switch (status) {
    case 'paid':
      return {
        label: 'Sukses',
        colorPallete: 'status.green',
      };
    case 'failed':
      return {
        label: 'Gagal',
        colorPallete: 'status.red',
      };
    case 'pending':
      return {
        label: 'Pending',
        colorPallete: 'status.yellow',
      };
    default:
      return {
        label: capitalizeFirstLetter(status),
        colorPallete: 'status.gray',
      };
  }
};
