import { INC, DEC } from "./actionConstent";

export function incHandler() {
  return { type: INC };
}
export function decHandler() {
  return { type: DEC };
}
