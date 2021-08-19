import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export default function useInfiniteScroll(hasMore: boolean, loading: boolean): [page: number, loaderRef: React.RefObject<HTMLDivElement>]{
  const loaderRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    const loaderNode = loaderRef.current;

    if (!loaderNode || !hasMore) return;

    const listener: IntersectionObserverCallback = (entries) => {
      // console.log(page);
      if(!loading && entries[0].isIntersecting){
        setPage(prevPage => prevPage + 1);
      }
    };

    const observer = new IntersectionObserver(listener);

    observer.observe(loaderNode);
    return () => observer.disconnect();
  }, [ hasMore ] );
  return [page, loaderRef];
}