import { useEffect, useRef } from 'react';
import useActions from './useActions';

export default function useInfiniteList() {
  const bottomOfList = useRef<HTMLDivElement>(null);
  const { fetchNextKatas } = useActions();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([target]) => {
        if (target.isIntersecting) fetchNextKatas();
      },
      {
        rootMargin: '100px',
      }
    );
    const bottom = bottomOfList.current;
    if (bottom) observer.observe(bottom);
    return () => {
      if (bottom) observer.unobserve(bottom);
    };
  }, [bottomOfList.current]);

  return [bottomOfList];
}
