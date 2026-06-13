import {createSearchParamsCache,createSerializer,parseAsString} from "nuqs/server";

import { commonSearchParams } from "./common";

export const searchParams = {
  ...commonSearchParams,
  functionNo: parseAsString,
  name: parseAsString,
  groupCode: parseAsString,
};

export const searchParamsCache = createSearchParamsCache(searchParams);

export const serialize = createSerializer(searchParams);