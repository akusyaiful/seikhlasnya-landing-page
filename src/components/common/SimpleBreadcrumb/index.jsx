'use client';

import { kebabToTitleCase } from '@/utils/formatter';
import { Box, Breadcrumb, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const SimpleBreadcrumb = () => {
  const pathname = usePathname();

  const pathnameArray = pathname.split('/').filter((item) => Boolean(item));

  const isDashboard = pathnameArray[1] === 'dashboard';

  if (isDashboard) {
    return (
      <Stack>
        <Breadcrumb.Root size={'lg'}>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Link href="/admin/dashboard">Dasboard</Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </Stack>
    );
  }
  return (
    <Stack>
      <Breadcrumb.Root size={'lg'}>
        <Breadcrumb.List>
          {pathnameArray?.map((path, index) => {
            if (path === 'admin') {
              return (
                <Fragment key={path}>
                  <Breadcrumb.Item>
                    <Link href="/admin/dashboard">Dasboard</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Separator />
                </Fragment>
              );
            }
            return (
              <Fragment key={path}>
                <Breadcrumb.Item>
                  <Link href={`/admin/${path}`}>{kebabToTitleCase(path)}</Link>
                </Breadcrumb.Item>
                {index !== pathnameArray.length - 1 && <Breadcrumb.Separator />}
              </Fragment>
            );
          })}
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </Stack>
  );
};

export default SimpleBreadcrumb;
