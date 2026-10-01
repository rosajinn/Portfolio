import { cn } from '@/lib/utils';

export const Input = ({
  className,
  ...props
}: React.ComponentProps<'input'>) => {
  return (
    <input
      className={cn(
        'w-full px-4 py-3 rounded-2xl bg-surface-container-high text-on-surface border-2  border-transparent focus:border-primary focus:outline-none transition-colors',
        className
      )}
      {...props}
    />
  );
};
