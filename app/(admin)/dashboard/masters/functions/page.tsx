import { Icons } from "@/components/icons";
import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SearchParams } from "nuqs/server";
import { functionInfoContent } from "@/config/infoconfig";
import FunctionListingPage from "@/features/functions/components/functions-listing";
import { searchParamsCache } from "@/lib/searchparams/functions";

type pageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {

    const searchParams = await props.searchParams;
    searchParamsCache.parse(searchParams);

    return (
        <PageContainer
            pageTitle='Functinos'
            pageDescription='Functinos products'
            infoContent={functionInfoContent}
            pageHeaderAction={
                <Link href='/dashboard/product/new' className={cn(buttonVariants(), 'text-xs md:text-sm')}>
                    <Icons.add className='mr-2 h-4 w-4' /> Add New Funtion
                </Link>
            }
        >
            <FunctionListingPage />
        </PageContainer>
    )
}