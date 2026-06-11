import { Icons } from '@/components/icons';
import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SearchParams } from 'nuqs/server';
import { partInfoContent } from '@/config/infoconfig';
import { searchParamsCache } from '@/lib/searchparams';

export const metadata = {
    title: 'Dashboard: Parts'
};

type appProps = {
    searchParams: Promise<SearchParams>;
}

export default async function page(props: appProps) {
    const searchParams = await props.searchParams;
    searchParamsCache.parse(searchParams);

    return (
        <PageContainer
            pageTitle='Parts Generator'
            pageDescription='Generate and manage part numbers using configured master data.'
            infoContent={partInfoContent}
            pageHeaderAction={
                <Link href='/dashboard/parts/create' className={cn(buttonVariants(), 'text-xs md:text-sm')}>
                    <Icons.add className='mr-2 h-4 w-4' /> Create Part
                </Link>
            }
        >
            <div>Product List</div>
            {/* <ProductListingPage /> */}
        </PageContainer>
    )
}