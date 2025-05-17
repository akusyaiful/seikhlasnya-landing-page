import { CloseButton, Dialog, Portal, Text, VStack } from '@chakra-ui/react';

export const SimpleDialog = ({
  description,
  footer,
  hideCloseButton,
  icon,
  onClose,
  onOpenChange,
  open,
  title,
  ...props
}) => {
  return (
    <Dialog.Root
      trapFocus={false}
      lazyMount
      open={open}
      placement="center"
      onOpenChange={onOpenChange}
      {...props}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxWidth={{ base: '90vw', md: '550px' }}
            borderRadius={16}
          >
            <Dialog.Body pb={4} pt={12}>
              <VStack alignItems="center" gap={4} textAlign="center">
                {icon}
                <Text fontSize={20} fontWeight="bold" mt={4}>
                  {title}
                </Text>
                <Text maxW="4/5">{description}</Text>
              </VStack>
            </Dialog.Body>
            <Dialog.Footer alignItems="center" justifyContent="center">
              {footer}
            </Dialog.Footer>
            {!hideCloseButton && (
              <Dialog.CloseTrigger asChild>
                <CloseButton
                  mt={1}
                  variant={'plain'}
                  colorPalette="brand.white"
                  size="lg"
                  onClose={onClose}
                />
              </Dialog.CloseTrigger>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
