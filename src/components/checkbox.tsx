import Plus from '../assets/svg/plus';
import { cn } from '../utils/cn';

export default function Checkbox({
  isChecked = true,
  onChange,
}: {
  isChecked?: boolean;
  onChange?: () => void;
}) {
  const toggleStype = isChecked
    ? 'bg-purple-700'
    : 'border-purple-700 border-2';
  return (
    <div
      className={cn(
        'relative size-6 rounded-full flex items-center justify-center',
        toggleStype
      )}
    >
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={onChange}
        className="peer relative shrink-0 appearance-none size-6"
      />
      <Plus className="pointer-events-none absolute hidden peer-checked:block" />
    </div>
  );
}
