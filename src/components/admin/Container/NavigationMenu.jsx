'use client';

import { Box, Text, VStack } from '@chakra-ui/react';
import {
  BuildingIcon,
  HandCoinsIcon,
  LayoutDashboardIcon,
  StickyNoteIcon,
  UsersRoundIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAVIGATION_MENUS = [
  {
    path: '/admin/dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboardIcon />,
  },
  {
    path: '/admin/donations',
    label: 'Donasi',
    icon: <HandCoinsIcon />,
  },
  {
    path: '/admin/organizations',
    label: 'Lembaga Donasi',
    icon: <BuildingIcon />,
  },
  {
    path: '/admin/users',
    label: 'Pengguna',
    icon: <UsersRoundIcon />,
  },
  {
    path: '/admin/posts',
    label: 'Post',
    icon: <StickyNoteIcon />,
  },
];

const NavigationMenu = () => {
  const pathname = usePathname();
  return (
    <VStack w={'full'} alignItems={'flex-start'} gap={4}>
      {NAVIGATION_MENUS.map((menu) => {
        const isActive = pathname.includes(menu.path);
        return (
          <Link href={menu.path} key={menu.path} style={{ width: '100%' }}>
            <Box
              color={isActive ? 'brand.white' : 'brand.grayDark'}
              bg={isActive ? 'brand.blue' : 'brand.white'}
              boxShadow={'base'}
              p={4}
              w="full"
              borderRadius={12}
              display={'flex'}
              gap={2}
            >
              {menu.icon}
              <Text fontWeight={'medium'}>{menu.label}</Text>
            </Box>
          </Link>
        );
      })}
    </VStack>
  );
};

export default NavigationMenu;
