import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ request }, next) => {
  const url = new URL(request.url);
  if (url.pathname === "/_health" || url.pathname === "/_health/") {
    return new Response(JSON.stringify({ status: "ok" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  return next();
});
