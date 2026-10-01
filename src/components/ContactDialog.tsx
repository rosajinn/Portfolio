import {Dialog, DialogHeader, DialogTitle, DialogContent} from '@/components/UI/Dialog'
import emailjs from '@emailjs/browser'

import {useRef, useState, useCallback, useMemo} from 'react'
import type { SubmitEventHandler } from 'react';
import { Label } from './UI/Label';
import { Input } from './UI/Input';
import { Textarea } from './UI/Textarea';
import { Button } from './UI/Button';
import { cn } from '@/lib/utils';

import {SendIcon, CheckIcon,Loader2Icon, CircleAlertIcon} from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'failed'

type ContactdialogProps = {
    open: boolean;
    onOpen: () => void;
}
export const ContactDialog = ({ open, onOpen }: ContactdialogProps) => {
    const form = useRef<HTMLFormElement>(null)
    const [formState, setFormState] = useState<FormState>('idle');

    const sendEmail: SubmitEventHandler<HTMLFormElement> 
    =useCallback (async (e) => {
        e.preventDefault();

        if (!form.current) return;

        setFormState('submitting');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                }
            );
            setFormState('success');
        }catch (err) {
            setFormState('failed');
            console.log(err);
        }finally {
            setTimeout(() => {
                setFormState('idle');
                onOpen();
            }, 1000);

        }
        
    }, [form.current]);

    const formStateIcon = useMemo(() => ({
        idle: <SendIcon size={20} />,
        submitting: <Loader2Icon size={20} className='animate-spin' />,
        success: <CheckIcon size={20} />,
        failed: <CircleAlertIcon size={20} />,
    }), [])

    const formStateLabel = useMemo(() => ({
        idle: 'Send Message',
        submitting: 'Sending...',
        success: 'Message Sent!',
        failed: 'Failed to Send Message',
    }), [])
        

    return ( 
    <Dialog
    open ={open}
    onOpen={onOpen}
    >
        <DialogHeader onOpen={onOpen}>
            <DialogTitle>Let's Connect</DialogTitle>
        </DialogHeader>

        <DialogContent>
            <form ref={form}
            onSubmit={sendEmail}
            className='space-y-4'
            >
                <div
                className='space-y-2'
                > 
                <Label htmlFor='name'>Name</Label>

                <Input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
                required
                />
                </div>
                <div
                className='space-y-2'
                > 
                <Label htmlFor='email'>Email</Label>

                <Input
                type='email'
                name='email'
                id='email'
                placeholder='Your Email'
                required
                />
                </div>
                <div
                className='space-y-2'
                > 
                <Label htmlFor='message'>Message</Label>

                <Textarea
                name='message'
                id='message'
                placeholder='Your Message'
                required
                />
                </div>
                <Button className={cn('w-full',formState === 'failed' &&  'bg-error text-on-error')}
                disabled={formState === 'submitting' || formState === 'success'}
                type='submit'
                >
                    {formStateIcon[formState]}
                    {formStateLabel[formState]}
                </Button>
            </form>
        </DialogContent>
    </ Dialog>
    )
}