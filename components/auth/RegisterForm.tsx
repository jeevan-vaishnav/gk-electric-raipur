'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export const registerSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email"), password: z
        .string()
        .min(8, "Minimum 8 characters")
        .regex(/[A-Z]/, "Must contain uppercase")
        .regex(/[0-9]/, "Must contain number"),
    confirmPassword: z.string(),
    role: z.string().min(1, "Select role"),
    authorized: z.boolean().refine(val => val === true, {
        message: "Authorization required"
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;


async function createUser(data: RegisterFormValues) {
    const res = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const result = await res.json();
    if (!res.ok) {
        throw new Error(result.message || 'Something went wrong!')
    }
    return data;
}

export function RegisterForm() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { register, reset, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
            authorized: false,
        },
    });

    const onSubmit = async (data: RegisterFormValues) => {
        try {
            await createUser(data);
            // console.log("User created:", data);
            reset();
            toast.success("Account created successfully");
            router.push("/login");
        } catch (error) {
            toast.error("Something went wrong");
            console.error(error);
        }

    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Create Account</h1>
                <p className="mt-1.5 text-sm text-muted-foreground">
                    Register a new user to access GK Electric System
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input {...register("fullName")} placeholder="Enter your name" />
                    {errors.fullName && (<p className="text-xs text-destructive">{errors.fullName.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" {...register("email")} placeholder="Enter your email" />
                    {errors.email && (
                        <p className="text-xs text-destructive">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                {/* Password */}
                <div className="space-y-2">
                    <Label>Password</Label>
                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                            placeholder="*******"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-xs text-destructive">
                            {errors.password.message}
                        </p>
                    )}
                </div>


                {/* Confirm Password */}
                <div className="space-y-2">
                    <Label>Confirm Password</Label>
                    <div className="relative">
                        <Input
                            type={showConfirm ? "text" : "password"}
                            {...register("confirmPassword")}
                            placeholder="*******"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                            {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-xs text-destructive">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>Role</Label>
                    <Controller
                        control={control}
                        name="role"
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="production">Production</SelectItem>
                                    <SelectItem value="npd">NPD</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.role && (
                        <p className="text-xs text-destructive">
                            {errors.role.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Controller
                        control={control}
                        name="authorized"
                        render={({ field }) => (
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                                <Label>I confirm authorization</Label>
                            </div>
                        )}
                    />
                    {errors.authorized && (
                        <p className="text-xs text-destructive">
                            {errors.authorized.message}
                        </p>
                    )}
                </div>

                <motion.div whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                    </Button>
                </motion.div>
            </form>

            <p className="text-sm text-center mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-medium">
                    Login
                </Link>
            </p>
        </div>
    );
};
