import { type ClassValue, clsx } from "clsx"
import { atom } from "recoil"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


