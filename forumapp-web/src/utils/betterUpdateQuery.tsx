import { Cache, QueryInput } from "@urql/exchange-graphcache";

//wrapper function to convert update cache query to typesafe
//it's going to be called every time user logs in or registers
export function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}