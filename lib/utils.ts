import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// "predev": "npm run typegen",
// "prebuild": "npm run typegen",
// "typegen": "sanity schema extract --path=./sanity/extract.json && sanity typegen generate"
