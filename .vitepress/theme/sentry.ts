/// <reference types="vite/client" />
import type { App } from "vue";
import type { Router } from "vitepress";
import * as Sentry from "@sentry/vue";

declare const __SENTRY_DSN__: string;
declare const __SENTRY_RELEASE__: string;

/** Client-only Sentry setup: errors, page views (tracing) and session replay. */
export function initSentry(app: App, router: Router) {
  if (typeof window === "undefined" || !__SENTRY_DSN__) return;

  Sentry.init({
    app,
    dsn: __SENTRY_DSN__,
    environment: import.meta.env?.PROD ? "production" : "development",
    release: __SENTRY_RELEASE__ || undefined,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 0.2,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });

  // VitePress is an SPA: record each client-side navigation as its own page view.
  router.onAfterRouteChanged = (to) => {
    const path = to.split(/[?#]/)[0];
    Sentry.addBreadcrumb({
      category: "navigation",
      message: path,
      level: "info",
    });
    Sentry.startNewTrace?.(() => {
      Sentry.startSpan(
        {
          name: path,
          op: "navigation",
          attributes: { "sentry.source": "url" },
        },
        () => {},
      );
    });
  };
}
