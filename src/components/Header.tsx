/**
 * Assets
 */
import { SparkleIcon, MailIcon } from 'lucide-react';
/**
 * Node Modules
 */
import { motion } from 'motion/react';
/**
 * Components
 */
import { Button } from '@/components/UI/Button';
import {ContactDialog} from '@/components/ContactDialog'

import { useState } from 'react';

export const Header = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <header className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
      <motion.div
        className='space-y-2'
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
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
      </motion.div>

      <motion.div
        className='flex gap-4'
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Button 
        onClick={() => setDialogOpen(true)} variant='default' size='default'>
          <MailIcon size={20} />
          Let's Connect
        </Button>

        <ContactDialog open={dialogOpen} onOpen={() => setDialogOpen(false)} />
       
      </motion.div>
    </header>
  );
};
