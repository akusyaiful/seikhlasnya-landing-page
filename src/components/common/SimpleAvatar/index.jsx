import { Avatar, HStack } from '@chakra-ui/react';
import SimpleTooltip from '../SimpleTooltip';

const SimpleAvatar = ({ src, name, size = 'sm', showNameTooltip }) => {
  return (
    <SimpleTooltip disabled={!showNameTooltip} content={name}>
      <HStack cursor={'pointer'} gap="3">
        <Avatar.Root size={size}>
          <Avatar.Fallback name={name} />
          <Avatar.Image src={src} />
        </Avatar.Root>
      </HStack>
    </SimpleTooltip>
  );
};

export default SimpleAvatar;
