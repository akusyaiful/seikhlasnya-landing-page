import { Field as ChakraField } from '@chakra-ui/react';
import * as React from 'react';

const SimpleField = React.forwardRef((props, ref) => {
  const {
    label,
    children,
    helperText,
    errorText,
    optionalText,
    ...rest
  } = props;

  return (
    <ChakraField.Root ref={ref} invalid={Boolean(errorText)} {...rest}>
      {label && (
        <ChakraField.Label color={'brand.grayDark'}>
          {label}
          <ChakraField.RequiredIndicator fallback={optionalText} />
        </ChakraField.Label>
      )}
      {children}
      {helperText && (
        <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
      )}
      {errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
    </ChakraField.Root>
  );
});

export default SimpleField;
