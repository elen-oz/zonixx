'use client';

import { useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useFavoriteWorkouts } from '@/store/useFavoriteWorkouts';
import { useTrainingDaysStore } from '@/store/useTrainingDaysStore';
import { registerServiceWorker } from '@/utils/serviceWorkerRegistration';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    useFavoriteWorkouts.persist.rehydrate();
    useTrainingDaysStore.persist.rehydrate();
    registerServiceWorker();
  }, []);

  return <NextUIProvider>{children}</NextUIProvider>;
};
