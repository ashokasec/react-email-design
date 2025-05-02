import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${NEXT_PUBLIC_APP_URL}${path}`;
}
