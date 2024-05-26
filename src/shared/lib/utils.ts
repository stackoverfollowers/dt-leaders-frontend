import { type ClassValue, clsx } from 'clsx';
import { jwtDecode } from "jwt-decode";
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const jwtVerify = (token: string) => {
  try {
    jwtDecode(token);
    return true;
  } catch {
    return false;
  }
}