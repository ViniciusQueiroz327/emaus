export type MemoryType =
  | "image"
  | "video";

export interface Memory {
  type: MemoryType;
  src: string;
}