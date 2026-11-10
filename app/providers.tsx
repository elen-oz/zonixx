'use client';

import { useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useFavoriteWorkouts } from '@/store/useFavoriteWorkouts';
import { useTrainingDaysStore } from '@/store/useTrainingDaysStore';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    useFavoriteWorkouts.persist.rehydrate();
    useTrainingDaysStore.persist.rehydrate();
  }, []);

  return <NextUIProvider>{children}</NextUIProvider>;
};
