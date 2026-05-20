import { gtag } from "./gtag";
import type { AnalyticsEvent, EventParams } from "./types";

export function trackEvent<T extends AnalyticsEvent>(
  eventName: T,
  params?: EventParams[T],
) {
  gtag("event", eventName, params);
}
