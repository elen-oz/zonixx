'use client';

import { registerServiceWorker } from '@/utils/serviceWorkerRegistration';
import { useEffect } from 'react';

import HomeContent from '@/app/_home-sections/HomeContent';

const Home = () => {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return <HomeContent />;
};

export default Home;
