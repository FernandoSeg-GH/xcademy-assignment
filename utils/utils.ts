import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (number:number, defaultMessage = 'Loading...') => {
  if (typeof number === 'number') {
    return number.toFixed(2);
  }
  return defaultMessage;
};