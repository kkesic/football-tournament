export type IshodType = "W" | "D" | "L" | "-"

export interface Rezultat {
    tim1: string;
    tim2: string;
    ishod: IshodType;
}

export interface TimRezultat {
    nazivTima: string;
    bodovi: number;
    w: number;
    d: number;
    l: number;
}