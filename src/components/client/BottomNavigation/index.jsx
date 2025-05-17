import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { HeartIcon, HouseIcon, SquareMenuIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoAiIcon from '@/../public/assets/icons/logo-ai.svg';
import { useBreakpoint } from '@/hooks/common/use-breakpoint';
import { CLIENT_CONTAINER_MAX_WIDTH } from '../Container';
import ChatbotDialog from '../ChatbotDialog';
import { useState } from 'react';
import { useAuthStore } from '@/store/client/auth';
import { useAppStore } from '@/store/client/app';

const NAVIGATION_MENUS = [
  {
    path: '/',
    label: 'Home',
    icon: <HouseIcon />,
  },
  {
    path: '/posts',
    label: 'Aktivitas',
    icon: <SquareMenuIcon />,
  },
  {
    path: '/ai',
    label: 'Seikhlasnya AI',
    icon: <HeartIcon />,
  },
  {
    path: '/donations',
    label: 'Donasiku',
    icon: <HeartIcon />,
  },
  {
    path: '/profile',
    label: 'Akun',
    icon: <UserIcon />,
  },
];

const BottomNavigation = () => {
  const { user } = useAuthStore((state) => state);
  const pathname = usePathname();
  const { isMobile } = useBreakpoint();
  const [openChatbotDialog, setOpenChatbotDialog] = useState(false);
  const updateOpenModalUnauthenticated = useAppStore(
    (state) => state.updateOpenModalUnauthenticated
  );

  const handleOpenChatbot = () => {
    if (user) {
      setOpenChatbotDialog(true);
    } else {
      updateOpenModalUnauthenticated(true);
    }
  };

  return (
    <Box
      w="full"
      boxShadow={'base'}
      position={'fixed'}
      bg={'brand.white'}
      bottom={0}
      maxW={CLIENT_CONTAINER_MAX_WIDTH}
    >
      <Flex gap={2} justifyContent={'space-around'}>
        {NAVIGATION_MENUS.map((menu) => {
          if (menu.path === '/ai') {
            return (
              <Flex
                mt={{ base: -3, md: -5 }}
                key={menu.path}
                // bg="brand.blue"
                bgGradient="to-tl"
                gradientFrom="brand.blueLighter"
                gradientTo="brand.blueDarker"
                p={{ base: 3, md: 4 }}
                borderRadius={'full'}
                h="fit-content"
                justifyContent={'center'}
                alignItems={'center'}
                width={{ base: '75px', md: '75px' }}
                onClick={handleOpenChatbot}
              >
                <LogoAiIcon
                  style={{
                    color: 'var(--se-colors-brand-white)',
                    width: isMobile ? 35 : 35,
                    height: isMobile ? 35 : 35,
                  }}
                />
              </Flex>
            );
          }
          const isActive = pathname === menu.path;
          return (
            <Link
              href={menu.path || '/'}
              key={menu.path}
              style={{ width: '100%' }}
            >
              <VStack
                color={isActive ? 'brand.blue' : 'brand.grayDark'}
                px={{ base: 2, md: 4 }}
                py={{ base: 3, md: 4 }}
                w="full"
                borderRadius={12}
                display={'flex'}
                gap={2}
              >
                {menu.icon}
                <Text fontSize={{ base: 10, md: 14 }} fontWeight={'semibold'}>
                  {menu.label}
                </Text>
              </VStack>
            </Link>
          );
        })}
      </Flex>
      <ChatbotDialog
        open={openChatbotDialog}
        onOpenChange={(event) => setOpenChatbotDialog(event.open)}
      />
    </Box>
  );
};

export default BottomNavigation;
