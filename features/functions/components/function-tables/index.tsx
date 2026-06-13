'use client';

import { DataTable } from '@/components/ui/table/data-table';
import { DataTableToolbar } from '@/components/ui/table/data-table-toolbar';
import { useDataTable } from '@/hooks/use-data-table';
import { useSuspenseQuery } from '@tanstack/react-query';
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';
// import { getSortingStateParser } from '@/lib/parsers';
import { functionColumns } from './columns';
import { functionsQueryOptions } from '../../api/queries';
import { FunctionsResponse } from '../../api/types';

const columnIds = functionColumns.map((c) => c.id).filter(Boolean) as string[];

export function FunctionTable() {
  const [params] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    perPage: parseAsInteger.withDefault(10),
    name: parseAsString,
    // category: parseAsString,
    // sort: getSortingStateParser(columnIds).withDefault([])
  });

  const filters = {
    page: params.page,
    limit: params.perPage,
    ...(params.name && { search: params.name }),
    // ...(params.category && { categories: params.category }),
    // ...(params.sort.length > 0 && { sort: JSON.stringify(params.sort) })
  };
  //   const filters = {
  //   page:params.page,
  //   limit: pageLimit,
  //   ...(search && { search }),
  //   ...(functionNo && { functionNo }),
  //   ...(groupCode && { groupCode }),
  //   ...(sort && { sort })
  // };


  const { data } = useSuspenseQuery(functionsQueryOptions(filters));

  // const pageCount = Math.ceil(data.total_products / params.perPage);

  const { table } = useDataTable<FunctionsResponse>({
    data: data,
    columns: functionColumns,
    pageCount: 1,
    shallow: true,
    debounceMs: 500,
    initialState: {
      columnPinning: { right: ['actions'] }
    }
  });

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table} />
    </DataTable>
  );
}
