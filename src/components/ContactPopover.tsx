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

export const ContactPopover: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">
            Contact
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[400px] p-0">
          <ContactForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          Contact
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[100dvh] p-0 pb-10">
        <ContactForm />
      </SheetContent>
    </Sheet>
  );
}; 