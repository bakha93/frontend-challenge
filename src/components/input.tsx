import { cn } from '../utils/cn';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...rest }: IInput) {
  return (
    <input
      {...rest}
      className={cn(
        'h-10 px-2 focus:border-none focus:outline-none',
        className
      )}
      placeholder="Memorize the dictionary"
    />
  );
}
