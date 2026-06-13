import {createSearchParamsCache,createSerializer,parseAsString} from "nuqs/server";

import { commonSearchParams } from "./common";

export const searchParams = {
  ...commonSearchParams,
  partNumber: parseAsString,
  partName: parseAsString,
  supplierCode: parseAsString,
  systemGroupCode: parseAsString,
  functionNo: parseAsString,
  versionCode: parseAsString,
  variantCode: parseAsString,
  partTypeCode: parseAsString,
  importCode: parseAsString,
};

export const searchParamsCache = createSearchParamsCache(searchParams);

export const serialize = createSerializer(searchParams);