"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) => {
  return (
    <DialogPrimitive.Portal {...props}>
      <div className="au-root">{children}</div>
    </DialogPrimitive.Portal>
  );
};

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "au-fixed au-inset-0 au-z-50  data-[state=open]:au-animate-in data-[state=closed]:au-animate-out data-[state=closed]:au-fade-out-0 data-[state=open]:au-fade-in-0 au-backdrop-blur-sm au-bg-black/40",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        `au-fixed au-left-[50%] au-top-[50%] au-z-50 au-grid au-w-full au-max-w-lg au-translate-x-[-50%] au-translate-y-[-50%] au-gap-4 au-border au-bg-background au-p-6 au-shadow-lg au-duration-200 data-[state=open]:au-animate-in data-[state=closed]:au-animate-out data-[state=closed]:au-fade-out-0 data-[state=open]:au-fade-in-0 data-[state=closed]:au-zoom-out-95 data-[state=open]:au-zoom-in-95 data-[state=closed]:au-slide-out-to-left-1/2 data-[state=closed]:au-slide-out-to-top-[48%] data-[state=open]:au-slide-in-from-left-1/2 data-[state=open]:au-slide-in-from-top-[48%] sm:au-rounded-lg`,
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="au-absolute au-right-4 au-top-4 au-rounded-sm au-opacity-70 au-ring-offset-background au-transition-opacity hover:au-opacity-100 focus:au-outline-none focus:au-ring-2 focus:au-ring-ring focus:au-ring-offset-2 disabled:au-pointer-events-none data-[state=open]:au-bg-accent data-[state=open]:au-text-muted-foreground">
        <X className="au-h-4 au-w-4" />
        <span className="au-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "au-flex au-flex-col au-space-y-1.5 au-text-center sm:au-text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "au-flex au-flex-col-reverse sm:au-flex-row sm:au-justify-end sm:au-space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "au-text-lg au-font-semibold au-leading-none au-tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("au-text-sm au-text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
