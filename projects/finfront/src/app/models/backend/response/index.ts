export interface Response<T> {
  code: number;
  data: T;
  error?: string;
}
