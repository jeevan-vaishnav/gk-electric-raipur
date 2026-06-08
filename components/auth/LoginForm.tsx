'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(7, "Password must be at least 7 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password
        })

        if (result?.error) {
            alert('Invalid email or password')
            return
        }

        router.push("/dashboard")
    };

    return (
        <div>
            <div className="mb-8">
                {/* <h1 className="text-2xl font-bold tracking-tight text-foreground">Admin Portal Login</h1>
                <p className="mt-1.5 text-sm text-muted-foreground">
                    Access the secure administration panel
                </p> */}
                <h1 className="text-2xl font-bold">
                    Welcome Back
                </h1>

                <p className="text-sm text-muted-foreground mt-1">
                    Sign in to access the GK Electric Dashboard.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input
                        type="email"
                        placeholder="xyz@gkelectric.in"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-xs text-destructive">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>Password</Label>
                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...register("password")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                            {showPassword ? (
                                <EyeOff size={16} />
                            ) : (
                                <Eye size={16} />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-xs text-destructive">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    {/* Remember Me */}
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm font-normal">
                            Remember me
                        </Label>
                    </div>
                    <button type="button" className="hidden text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                        Forgot Password?
                    </button>
                </div>
                <motion.div whileTap={{ scale: 0.98 }}>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </Button>
                </motion.div>
            </form>

            <p className="text-sm text-center mt-6">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary font-medium">
                    Register
                </Link>
            </p>
        </div>
    );
};
