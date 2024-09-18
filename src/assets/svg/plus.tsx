import { cn } from '../../utils/cn';

export default function Plus({ className }: { className?: string }) {
  return (
    <svg
      className={cn('size-6 font-bold text-white', className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14m-7 7V5"
      />
    </svg>
  );
}
