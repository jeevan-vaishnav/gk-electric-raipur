"use client";

import { useForm } from "react-hook-form";

import { FormField, MasterFormProps } from "./types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export function MasterForm({ fields, defaultValues, onSubmit, isSubmitting }: MasterFormProps) {

    const { register, handleSubmit, reset } = useForm({ defaultValues });

    const submitHandler = async (data: any) => {
        await onSubmit(data);
        reset();
    };
    
    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-4"
        >
            {fields.map((field) => (
                <div key={field.name}>
                    <label className="text-sm font-medium">
                        {field.label}
                    </label>

                    <Input
                        {...register(field.name)}
                        placeholder={field.placeholder}
                    />
                </div>
            ))}

            {/* <Button type="submit" className="cursor-pointer" >
                Save
            </Button> */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                    </>
                ) : (
                    "Save"
                )}
            </Button>
        </form>
    );
}