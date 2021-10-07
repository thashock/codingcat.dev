import { useState, useEffect } from 'react';
import router from 'next/router';
// import dynamic from 'next/dynamic';
import Head from 'next/head';
import nightwind from 'nightwind/helper';
import { ThemeProvider } from 'next-themes';

import { AppTopbar } from '@/layout/AppTopbar';

import AppMenu from '@/layout/AppMenu';
import { Site } from '@/models/site.model';
import Footer from '@/layout/Footer';

import useIsNavigating from '@/hooks/useIsNavigating';
import { Progress } from '@/components/global/loading/Progress';

const Layout = ({
  site,
  children,
}: {
  site: Site | null;
  children: any;
}): JSX.Element => {
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const isNavigating = useIsNavigating();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [overlayMenuActive]);

  router.events.on('routeChangeComplete', () => setOverlayMenuActive(false));

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="light"
      >
        <Progress isAnimating={isNavigating} />

        <AppTopbar
          setOverlayMenuActive={setOverlayMenuActive}
          overlayMenuActive={overlayMenuActive}
        />
        <div className="grid grid-cols-1 justify-items-center calc-height-wrapper lg:mx-auto lg:w-80 lg:max-w-8xl lg:justify-items-stretch">
          <main className="grid justify-center w-full grid-cols-1 gap-10 bg-primary-50 dark:bg-basics-700">
            {children}
          </main>

          <Footer site={site} />
        </div>
        <AppMenu
          setOverlayMenuActive={setOverlayMenuActive}
          overlayMenuActive={overlayMenuActive}
          userMenu={userMenu}
          setUserMenu={setUserMenu}
        />
      </ThemeProvider>
    </>
  );
};

export default Layout;
