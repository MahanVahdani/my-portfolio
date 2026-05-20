export const gtag = (...args: any[]) => {
  if (typeof window === "undefined") return;
  window.gtag?.(...args);
};
