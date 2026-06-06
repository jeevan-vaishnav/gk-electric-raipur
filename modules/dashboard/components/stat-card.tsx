import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import {
    Card,
    CardContent,
} from "@/components/ui/card"

interface StatCardProps {
    label: string;
    value: number;
    icon: LucideIcon;
}

export function StatCard({
    label,
    value,
    icon: Icon,
}: StatCardProps) {
    return (
        <motion.div whileHover={{ y: -2 }}>
            <Card>
                <CardContent className="p-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                {label}
                            </p>

                            <h2 className="text-3xl font-bold mt-2">
                                {value}
                            </h2>
                        </div>

                        <Icon className="h-5 w-5" />
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}