
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/query-client';
import { searchParamsCache } from "@/lib/searchparams/functions";
import { FunctionTable } from './function-tables';
import {functionsQueryOptions } from '../api/queries';

export default async function ProductListingPage() {
  const page = searchParamsCache.get('page');
  const name = searchParamsCache.get('name');
  const pageLimit = searchParamsCache.get('perPage');
  const functionNo = searchParamsCache.get('functionNo');
  const groupCode = searchParamsCache.get('groupCode');
  const sort = searchParamsCache.get('sort');

  const filters = {
    page,
    limit: pageLimit,
    ...(name && { name }),
    ...(functionNo && { functionNo }),
    ...(groupCode && { groupCode }),
    ...(sort && { sort })
  };

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(functionsQueryOptions(filters));

  // console.log("Data")
  // console.log(
  //   queryClient.getQueryData(
  //     functionKeys.list(filters)
  //   )
  // );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FunctionTable />
    </HydrationBoundary>
  );
}