import {cn} from '@/lib/utils'

export const Label = ({children, className, ...props}: React.ComponentProps<'label'>) => {
    return(
        <label className={cn('block text-sm font-medium text-on-surface-variant', 
            className,
        )}
        {...props}
        >
            {children}
        </label>
    )
}