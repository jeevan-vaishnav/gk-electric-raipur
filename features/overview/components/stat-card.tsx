import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

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
            <Card className='@container/card'>
                <CardHeader>
                    <CardDescription>
                        {label}
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {value}
                    </CardTitle>
                    <CardAction>
                        <Badge variant='outline'>
                            <Icons.trendingUp />
                            +0.00%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className='flex-col items-start gap-1.5 text-sm'>
                    <div  className='line-clamp-1 flex gap-2 font-medium'>
                        Trending up this month <Icons.trendingUp className='size-4' />
                    </div>
                    <div className='text-muted-foreground'>Visitors for the last 6 months</div>
                </CardFooter>
            </Card>
        </motion.div>
    );
}