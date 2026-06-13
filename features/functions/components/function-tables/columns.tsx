'use client';

'use client';
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { Column, ColumnDef } from '@tanstack/react-table';
import { Icons } from '@/components/icons';
import Image from 'next/image';
import { CellAction } from './cell-action';
import { CATEGORY_OPTIONS } from './options';
import { FunctionsResponse } from '../../api/types';

export const functionColumns: ColumnDef<FunctionsResponse>[] = [
  {
    id: 'functionNo',
    accessorKey: 'functionNo',
    header: ({ column }: { column: Column<FunctionsResponse, unknown> }) => (
      <DataTableColumnHeader
        column={column}
        title='Function No'
      />
    ),
    meta: {
      label: 'Function No',
      placeholder: 'Search function no...',
      variant: 'text'
    },
    enableColumnFilter: true
  },

  {
    id: 'groupCode',
    accessorKey: 'groupCode',
    header: ({ column }: { column: Column<FunctionsResponse, unknown> }) => (
      <DataTableColumnHeader
        column={column}
        title='Group Code'
      />
    ),
    cell: ({ row }) => (
      <Badge variant='outline'>
        {row.original.groupCode}
      </Badge>
    ),
    meta: {
      label: 'Group Code',
      placeholder: 'Search group code...',
      variant: 'text'
    },
    enableColumnFilter: true
  },

  {
    id: 'groupName',
    accessorKey: 'groupName',
    header: ({ column }: { column: Column<FunctionsResponse, unknown> }) => (
      <DataTableColumnHeader
        column={column}
        title='Group Name'
      />
    )
  },

  {
    id: 'name',
    accessorKey: 'name',
    header: ({ column }: { column: Column<FunctionsResponse, unknown> }) => (
      <DataTableColumnHeader
        column={column}
        title='Function Name'
      />
    ),
    meta: {
      label: 'Function Name',
      placeholder: 'Search function name...',
      variant: 'text'
    },
    enableColumnFilter: true
  },

  {
    id: 'active',
    accessorKey: 'active',
    header: ({ column }: { column: Column<FunctionsResponse, unknown> }) => (
      <DataTableColumnHeader
        column={column}
        title='Status'
      />
    ),
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.active
            ? 'default'
            : 'secondary'
        }
      >
        {row.original.active
          ? 'Active'
          : 'Inactive'}
      </Badge>
    )
  }
];


// export const functionColumns: ColumnDef<Product>[] = [
//   {
//     accessorKey: 'photo_url',
//     header: 'IMAGE',
//     cell: ({ row }) => {
//       return (
//         <div className='relative aspect-square'>
//           <Image
//             src={row.getValue('photo_url')}
//             alt={row.getValue('name')}
//             fill
//             sizes='80px'
//             className='rounded-lg'
//           />
//         </div>
//       );
//     }
//   },
//   {
//     id: 'name',
//     accessorKey: 'name',
//     header: ({ column }: { column: Column<Product, unknown> }) => (
//       <DataTableColumnHeader column={column} title='Name' />
//     ),
//     cell: ({ cell }) => <div>{cell.getValue<Product['name']>()}</div>,
//     meta: {
//       label: 'Name',
//       placeholder: 'Search products...',
//       variant: 'text',
//       icon: Icons.text
//     },
//     enableColumnFilter: true
//   },
//   {
//     id: 'category',
//     accessorKey: 'category',
//     enableSorting: false,
//     header: ({ column }: { column: Column<Product, unknown> }) => (
//       <DataTableColumnHeader column={column} title='Category' />
//     ),
//     cell: ({ cell }) => {
//       const status = cell.getValue<Product['category']>();
//       const Icon = status === 'active' ? Icons.circleCheck : Icons.xCircle;

//       return (
//         <Badge variant='outline' className='capitalize'>
//           <Icon />
//           {status}
//         </Badge>
//       );
//     },
//     enableColumnFilter: true,
//     meta: {
//       label: 'categories',
//       variant: 'multiSelect',
//       options: CATEGORY_OPTIONS
//     }
//   },
//   {
//     accessorKey: 'price',
//     header: 'PRICE'
//   },
//   {
//     accessorKey: 'description',
//     header: 'DESCRIPTION'
//   },

//   {
//     id: 'actions',
//     cell: ({ row }) => <CellAction data={row.original} />
//   }
// ];
