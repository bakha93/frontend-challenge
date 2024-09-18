import { cn } from '../utils/cn';

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('flex-col justify-center items-center flex', className)}>
      {children}
    </div>
  );
}
