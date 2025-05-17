import { Checkbox } from '@chakra-ui/react';

const SimpleCheckbox = ({ label }) => {
  return (
    <Checkbox.Root colorPalette={'brand.blue'}>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label fontWeight={'medium'} color={'brand.grayDark'}>
        {label}
      </Checkbox.Label>
    </Checkbox.Root>
  );
};

export default SimpleCheckbox;
