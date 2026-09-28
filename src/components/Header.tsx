/**
 * Assets
 */
import { SparkleIcon } from 'lucide-react';

export const Header = () => {
  return (
    <header className=''>
      <div className='space-y-2'>
        <div
          className='flex items-center gap-2 
            text-primary font-semibold tracking-tight'
        >
          <SparkleIcon size={20} />
          <p>Full Stack Orchestrator</p>
        </div>
        <h1 className='text-5xl font-bold tracking-tight text-on-background md:text-7xl'>
          Alex <span className='text-primary'>River</span>
        </h1>
        <p className='text-xl text-on-surface-variant max-w-xl leading-relaxed'>
          Crafting fluid digital experiences where code meets human-centric
          design. Focused on scalable React ecosystems and robust cloud
          architectures.
        </p>
      </div>
    </header>
  );
};
