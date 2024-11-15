import { useEffect, useState } from 'react';

export function useLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
} 