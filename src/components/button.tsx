import { cn } from '../utils/cn';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  name?: string;
}
export default function Button({ name, className, ...rest }: IButton) {
  return (
    <button
      {...rest}
      className={cn(
        'h-10 rounded-lg text-white font-medium px-2 flex items-center justify-center',
        className
      )}
    >
      {name}
    </button>
  );
}
