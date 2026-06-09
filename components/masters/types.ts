export type FormField = {
    name: string;
    label: string;
    type?: "text" | "number" | "textarea";
    placeholder?: string;
};

export interface MasterFormProps {
    title: string;
    fields: FormField[];
    defaultValues?: Record<string, any>;
    onSubmit: (data: any) => void;
    isSubmitting?: boolean;

    requireConfirmation?: boolean;
    confirmationMessage?: string;
}