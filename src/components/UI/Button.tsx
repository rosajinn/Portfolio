import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
// import { GitBranchIcon } from 'lucide-react';

const buttonVariants = cva(
  'flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer font-medium rounded-2xl transition-all [&_svg]:size-5',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-on-primary shadow-lg disabled:bg-on-surface/10 disabled:text-on-surface/[0.38] hover:opacity-90',
        secondary: 'bg-secondary text-on-secondary-container hover:opacity-90',
        ghost: 'text-on-surface-variant hover:bg-on-surface-variant/10',
      },
      size: {
        default: 'h-14 px-4',
        icon: 'size-14',
        iconSmall: 'size-10 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) => {
    const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    ></Comp>
  );
};



//github button
//  <div className='flex gap-2'>
//           <Button
//             variant='secondary'
//             size='icon'
//             asChild
//           >
//             <a
//               href='https://github.com/rosajinn'
//               target='_blank'
//               aria-label='GitHub'
//             >
//               <GitBranchIcon size={20} />
//             </a>
//           </Button>
// </div>