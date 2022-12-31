export interface ObserverOption {
  target?: React.MutableRefObject<HTMLDivElement>;
  rootMargin: string;
  threshold: number;
}
