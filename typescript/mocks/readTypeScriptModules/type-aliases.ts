export class X<T> {

}

export const X2 = X;
export type X2 = X<any>;

export type Parameterized<T, R> = X<T>;
