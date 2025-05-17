import { useBreakpointValue } from '@chakra-ui/react';

export const useBreakpoint = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const breakpoint = useBreakpointValue({
    base: 'base',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
  });

  return {
    isMobile,
    breakpoint,
  };
};
