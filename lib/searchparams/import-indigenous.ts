import {createSearchParamsCache,createSerializer,parseAsString} from "nuqs/server";

import { commonSearchParams } from "./common";

export const searchParams = {
  ...commonSearchParams,
  code: parseAsString,
  name: parseAsString,
};

export const searchParamsCache = createSearchParamsCache(searchParams);

export const serialize = createSerializer(searchParams);