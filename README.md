# reproduction-bug-redirect-in-server-action-between-prod-and-dev

https://reproduction-bug-redirect-in-server-action-between-prod-and-dev.vercel.app

I found that ⁠`redirect()` in server actions works differently between production and development environments. In production, a server action request that redirects to '/test' returns a 303 Response that has RSC payloads. However, in development, despite this, an unknown request with an RSC payload still occurs.

## production

https://github.com/user-attachments/assets/98046420-1d58-43bf-8f5b-1520d7e6b9d5

## development

https://github.com/user-attachments/assets/a18c3e2c-1822-4fb6-90a5-2b6d0b5d796a
