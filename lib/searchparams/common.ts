import {parseAsInteger,parseAsString} from "nuqs/server";

export const commonSearchParams = {
    page: parseAsInteger.withDefault(1),
    perPage: parseAsInteger.withDefault(10),
    sort: parseAsString,
    active: parseAsString,
};