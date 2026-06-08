
import AuthLayout from "@/components/layout/auth-layout";
export default async function AuthPageLayout({ children }: {
    children: React.ReactNode;
}) {
    return <AuthLayout>{children}</AuthLayout>
}