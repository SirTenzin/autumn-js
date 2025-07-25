"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePaywall } from "autumn-js/react";
import { getCheckContent } from "@/registry/check-dialog/lib/check-content";
import { cn } from "@/lib/utils";

export interface CheckDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  featureId: string;
  entityId?: string;
}

export default function CheckDialog(params?: CheckDialogProps) {
  const { data: preview } = usePaywall({
    featureId: params?.featureId,
    entityId: params?.entityId,
  });

  if (!params || !preview) {
    return <></>;
  }

  const { open, setOpen } = params;
  const { title, message } = getCheckContent(preview);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 pt-4 gap-0 text-foreground overflow-hidden text-sm">
        <DialogTitle className={cn("font-bold text-xl px-6")}>
          {title}
        </DialogTitle>
        <div className="px-6 my-2">{message}</div>
        <DialogFooter className="flex flex-col sm:flex-row justify-between gap-x-4 py-2 mt-4 pl-6 pr-3 bg-secondary border-t">
          <Button
            size="sm"
            className="font-medium shadow transition min-w-20"
            onClick={async () => {
              setOpen(false);
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
