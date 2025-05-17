'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const MetaThemeColor = () => {
  const pathname = usePathname();
  useEffect(() => {
    const color = pathname === '/' ? '#1A8FE3' : '#ffffff';

    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', color);
  }, [pathname]);

  return null;
};

export default MetaThemeColor;
