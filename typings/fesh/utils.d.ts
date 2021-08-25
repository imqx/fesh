/**
 * Index Type
 *
 * @public
 */
declare type IndexTypeLike = string | number | symbol;

/**
 * Entries Type
 *
 * @public
 */
declare type Entries<K, V> = [K, V][];

declare type UpdateAction<S> = (state: S | ((ps?: S) => S)) => void;

declare type StatusType = 'UNSET' | 'DONE' | 'LOADING' | 'ERROR';

declare interface ISthWithStatus<T> {
  value: T;
  status: StatusType;
}

declare interface ILngLat {
  lng: number;
  lat: number;
}

declare interface IWithLngLat {
  lnglat: ILngLat;
}
declare interface IWithLngLatRecord {
  [id: string]: IWithLngLat;
}
