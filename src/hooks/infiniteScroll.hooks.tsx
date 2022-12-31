import { ObserverOption } from '@/interfaces/infiniteScroll.interface';
import { useCallback, useEffect, useState } from 'react';

export default function useInfiniteScroll({
  target,
  rootMargin,
  threshold,
}: ObserverOption): {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
} {
  const [page, setPage] = useState<number>(0);
  const handleObserver = useCallback(
    ([target]: IntersectionObserverEntry[]) => {
      if (!target) return;
      if (target.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    },
    [],
  );

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      handleObserver,
      {
        rootMargin,
        threshold,
      },
    );
    if (target.current) {
      observer.observe(target.current);
    }
  }, [handleObserver]);

  return { page, setPage };
}
