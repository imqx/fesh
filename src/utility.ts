/**
 * Check if is/contains `undefined` or `null`.
 *
 * @param vals - what to check
 * @returns `undefined` if `undefined` or `null`, otherwise origin val.
 * @public
 */
export function checkUndefined(vals: any | any[]): any;
/**
 * Check if is/contains `undefined` or `null`.
 *
 * @param vals - what to check
 * @param msg - message to throw
 * @returns throw an Error if `undefined` or `null`, otherwise origin val.
 * @throws Error indicated by message.
 * @public
 */
export function checkUndefined(vals: any | any[], msg: string): void;
export function checkUndefined(vals: any | any[], msg?: string) {
  let i: number = -1;
  if (!(vals instanceof Array)) {
    i = (vals as any[]).findIndex(
      (v: any) => typeof v === 'undefined' || v === null,
    );
  } else {
    i = typeof vals === 'undefined' || vals === null ? 0 : -1;
  }
  if (i !== -1) {
    if (msg) {
      throw msg;
    }
    return undefined;
  }
  return vals;
}

/**
 * Return `otherwise` if `vals` is/contains `undefined`, or origin `vals`
 *
 * @param vals - what to check
 * @param otherwise - returns if `vals` is/contains `undefined`
 * @returns return `otherwise` if `vals` is/contains `undefined`, or origin `vals`
 * @public
 */
export function thatUndefined<T>(
  vals: T,
  otherwise: Exclude<T, undefined>,
): Exclude<T, undefined> {
  if (typeof checkUndefined(vals) === 'undefined') {
    return otherwise;
  }
  return vals as Exclude<T, undefined>;
}

/**
 * Swap K and V, in condition of duplicated V, it will join keys together in an Array
 *
 * @typeParam K - Key Type
 * @typeParam V - Value Type
 * @param origin - Object with key and value of string.
 * @returns Object keyed by origin value, and valued by origin key or keys.
 * @beta
 */
export function swapkv<K extends string, V extends string>(
  origin: Record<K, V>,
): Record<V, K | K[]> {
  let r = {} as any;
  for (let [k, v] of Object.entries(origin)) {
    let rv = r[v as V];
    k = k as K;
    if (rv instanceof Array) {
      rv.push(k);
    } else if (typeof rv === 'string') {
      r[v as V] = [rv, k];
    } else {
      r[v as V] = k;
    }
  }
  return r as Record<V, K | K[]>;
}

/**
 * Swap K and V, Duplicated V is not accepted.
 *
 * @typeParam K - Key Type
 * @typeParam V - Value Type
 * @param origin - Object with key and value of string.
 * @returns Object keyed by origin value, and valued by origin key or keys.
 * @beta
 */
export function swapkvExactly<K extends string, V extends string>(
  origin: Record<K, V>,
): Record<V, K> {
  return swapkv(origin) as Record<V, K>;
}

/**
 * Stringify Anything simplely
 *
 * @param a Anything
 * @returns String of a
 * @beta
 */
export function stringifyAny(a: any): string {
  const t = typeof a;
  if (['string', 'number', 'symbol', 'function', 'boolean'].indexOf(t) !== -1) {
    return a.toString();
  }
  if (t === 'undefined') {
    return 'undefined';
  }
  return JSON.stringify(a);
}

/**
 * Handle something of T or T[] with the same handler, composed by `reduceCompose` in condition of T[];
 *
 * @param handle - Handle one Item to somewhat
 * @param initial - Array compose initial for reduce
 * @param reduceCompose - Reduce function
 * @returns Handle result of the one or Array.
 * @beta
 */
export function handleSingleOrArrayReduced<T, R, P>(
  handle: (it: T, opt?: P) => R,
  initial: R,
  reduceCompose: (o: R, c: R) => R,
) {
  return function (item: T | T[], opt?: P) {
    if (item instanceof Array) {
      return item.reduce((o, c) => {
        const res = handle(c, opt);
        return reduceCompose(o, res);
      }, initial);
    }
    return handle(item, opt);
  };
}

/**
 * Handle something of T or T[] with the same handler, composed by `Array.join()` in condition of T[];
 *
 * @param handle - Handle one Item to somewhat
 * @param separator - Separator for Array joining, default `,`
 * @returns Handle result of the one or Array.
 * @beta
 */
export function handleSingleOrArrayJoined<T, P>(
  handle: (it: T, opt?: P) => string,
  separator: string = ',',
) {
  return function (item: T | T[], opt?: P) {
    if (item instanceof Array) {
      return item.map((c) => handle(c, opt)).join(separator);
    }
    return handle(item, opt);
  };
}

/**
 * Make A Finder Function, Find in Array Somewhat
 *
 * @example
 * const records = [
 * {name: 'Lee', age: 35},
 * {name: 'Wang', age: 72}
 * ];
 * const getAgeByName = recordFinder(records, (s1:string, s2:string)=> s1===s2, 'name', 'age');
 * const age = getAgeByName('Lee');
 * // age: 35
 *
 * ```;
 *
 * @typeParam R - Record item type
 * @typeParam K - The key find by
 * @typeParam VK - The key what to find
 * @param record - Array of Items
 * @param match - Compare Function, return `true` if matched.
 * @param findKey - Find By What
 * @param resultKey - Find What
 * @param msg - Not Found Message, default 'not found!'
 * @returns The Finder Function
 * @beta
 */
export function recordValueFinder<R, K extends keyof R, VK extends keyof R>(
  record: R[],
  match: (r1: R[K], r2: R[K]) => boolean,
  findKey: K,
  resultKey: VK,
  msg: string = 'not found!',
) {
  return function (r: R[K]) {
    const f = record.find((x) => match(r, x[findKey]));
    checkUndefined(f, `${msg}-[${stringifyAny(r)}]`);
    return f![resultKey];
  };
}
/**
 * Make A Finder Function, Find in Array Somewhat
 *
 * @typeParam R - Record item type
 * @typeParam K - The key find by
 * @param record - Array of Items
 * @param match - Compare Function, return `true` if matched.
 * @param findKey - Find By What
 * @param msg - Not Found Message, default 'not found!'
 * @returns The Finder Function
 * @beta
 */
export function recordFinder<R, K extends keyof R>(
  record: R[],
  match: (r1: R[K], r2: R[K]) => boolean,
  findKey: K,
  msg: string = 'not found!',
) {
  return function (r: R[K]) {
    const f = record.find((x) => match(r, x[findKey]));
    checkUndefined(f, `${msg}-[${stringifyAny(r)}]`);
    return f!;
  };
}

/**
 * Make a Finder that find the key in an Object by value.
 *
 * @example
 * ```
 * const ages =  {lee: 35, john: 28, frank: 60};
 * const getOneByAge = kvFinder(ages, (e: number, a: number) => e === a);
 * const name = getOneByAge(35);
 * // name: lee
 *
 * ```;
 *
 * @typeParam R - Data Object Type
 * @typeParam A - Data Item Type
 * @param record - Data Object
 * @param predicate - Finder predicate
 * @param msg - Not Found Message
 * @returns The key which predicate return true.
 * @throws Not Found Error.
 * @beta
 */
export function keyFinder<R, A>(
  record: R,
  predicate: (e: R[keyof R], a: A) => boolean,
  msg: string = 'not found!',
) {
  return function (asset: A): keyof R {
    let f = Object.entries(record).find((x) => predicate(x[1], asset));
    checkUndefined(f, `${msg}-[${stringifyAny(asset)}]`);
    return f![0] as keyof R;
  };
}

/**
 * Produce a Replacement of a template with patterned Arguments.
 * Use default pattern like `#name`, and escape by `!#name`.
 *
 * @example
 * ```
 * const objArg = { name: 'Lee' };
 * const strArg = 'Bruce';
 * const arrArg = ['Bill', 'Frank', 'Robert'];
 * const tempForObj = 'Hello, #{name}! !!#{name} is not replaced.';
 * const tempForStr = 'Hello, #{0}';
 * const tempForArr = '#{0} says, #{1} and #{2} are my friends. !!#{1} did nothing.';
 * const temper = templateReplacementBuilder('#{', '}');

 * temper(tempForObj)(objArg);
 * [LOG]: "Hello, Lee! !#{name} is not replaced."
 *
 * temper(tempForStr)(strArg);
 * [LOG]: "Hello, Bruce"
 *
 * temper(tempForArr)(arrArg);
 * [LOG]: "Bill says, Frank and Robert are my friends. !#{1} did nothing."
 * ```
 *
 * @param bracketStart - start of a replacement bracket
 * @param bracketEnd - end of a replacement bracket
 * @param escape - escape start
 * @returns function that holding a template.
 * @beta
 */
export function templateReplacementBuilder<
  K extends string = string,
  V extends string = string,
>(bracketStart: string = '#', bracketEnd: string = '', escape: string = '!') {
  if (escape === '\\') {
    throw 'escape should not be `\\`';
  }
  const regHold = (name: string) =>
    new RegExp(`(?<!${escape})${bracketStart}${name}${bracketEnd}`, 'g');
  const esc = (temp: string) =>
    temp.replace(
      new RegExp(`${escape}${bracketStart}`, 'g'),
      `${bracketStart}`,
    );
  return function (template: string) {
    return function (data: Record<K, V> | string | Array<string>) {
      if (typeof data === 'string') {
        return esc(template.replace(regHold('[0]'), data));
      } else if (data instanceof Array) {
        return esc(
          data.reduce(
            (p, c, i) => p.replace(regHold(`[${i.toString()}]`), c),
            template,
          ),
        );
      }
      return esc(
        Object.entries(data).reduce(
          (p, [k, v]) => p.replace(regHold(k), v as string),
          template,
        ),
      );
    };
  };
}
