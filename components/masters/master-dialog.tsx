"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { MasterForm } from "./master-form";
import { MasterFormProps } from "./types";

interface Props extends MasterFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function MasterDialog({ isSubmitting, open, onOpenChange, title, fields, onSubmit, defaultValues }: Props) {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                </DialogHeader>

                <MasterForm
                    fields={fields}
                    onSubmit={onSubmit}
                    defaultValues={defaultValues}
                    title={title}
                    isSubmitting={isSubmitting}
                    requireConfirmation
                    confirmationMessage={`Are you sure you want to create this ${title}?`}
                />
            </DialogContent>
        </Dialog>
    );
}