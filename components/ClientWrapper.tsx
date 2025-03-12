'use client'; // ✅ Mark this as a Client Component

import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading delay

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
}
