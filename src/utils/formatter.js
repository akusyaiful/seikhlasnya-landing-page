export const snakeToTitleCase = (text) => {
  if (!text) {
    return '-';
  }

  return text
    .split('_')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const kebabToTitleCase = (text) => {
  if (!text) {
    return '-';
  }

  return text
    .split('_')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const capitalizeFirstLetter = (text) => {
  if (!text) {
    return '-';
  }

  return text[0].toUpperCase() + text.slice(1);
};

export const formatCurrency = (value, currency = 'IDR', locale = 'id-ID') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(value);
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('id-ID').format(value);
};

export const unformatNumber = (value) => {
  return value.replaceAll('.', '');
};
