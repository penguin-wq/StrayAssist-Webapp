# ERR 001 - Missing leading slash in `fetch('/api/hello')` caused HTML response instead of JSON.

*****Resolved:** 10/24/2026, 12:26PM

## Summary

The frontend displayed the error `Backend not reachable`.

This was caused by a missing leading slash in the fetch URL. The call used a relative path (`api/hello` instead of `/api/hello`), so the request resolved against the current page path and hit the Vite dev server instead of being proxied to the Spring Boot backend. Vite returned the SPA's `index.html` fallback with a `200` status, which the frontend then tried to parse as JSON — hence the `Unexpected token '<'` error.

## Resolution

Changing the fetch call to use an aboslute path to resolve the issue:
```ts
// Before — resolves relative to the current page, bypasses proxy
fetch('api/hello')

// After — resolves against the site root, matches the Vite proxy rule
fetch('/api/hello')
```
