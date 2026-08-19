import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names safely, resolving conflicts between
 * utility classes (e.g. `px-2 px-4` → `px-4`).
 *
 * Uses `clsx` to handle conditional/array inputs, then `twMerge` to
 * eliminate duplicate or conflicting Tailwind classes. Both steps are
 * needed: clsx alone doesn't understand Tailwind specificity, and
 * twMerge alone doesn't support conditional class syntax.
 *
 * @example
 * cn("px-2 py-1", isActive && "bg-primary", "px-4")
 * // → "py-1 bg-primary px-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
