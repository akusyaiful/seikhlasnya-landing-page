import { Tag } from '@chakra-ui/react';

const StatusTag = ({ colorPallete, label }) => {
  return (
    <Tag.Root size={'md'} colorPalette={colorPallete || 'status.green'}>
      <Tag.Label>{label}</Tag.Label>
    </Tag.Root>
  );
};

export default StatusTag;
