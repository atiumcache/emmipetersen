import React from 'react';
import { useMediaQuery } from '../hooks/use-media-query';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ContactForm } from './ContactForm';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";

interface ContactPopoverProps {
  buttonText?: string;
  className?: string;
}

export const ContactPopover: React.FC<ContactPopoverProps> = ({ buttonText = "Contact", className }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className={className}>
            {buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[600px] p-0">
          <ContactForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className={className}>
          {buttonText}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[100dvh] p-0 pb-10">
        <ContactForm />
      </SheetContent>
    </Sheet>
  );
}; 