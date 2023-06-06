# Netflix Clone(Next.js, Prisma, MongoDB, NextAuth)

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## App Router

### Navigation

To use `useRouter`, import it from `next/navigation`, and call the hook inside your Client Component:

```javascript
import { useRouter } from 'next/navigation';
```

### NextAuth.js

Next.js 13.2 introduced Route Handlers, the preferred way to handle REST-like requests in App Router (`app/`).


```typescript
/**
PATH: /app/api/auth/[...nextauth]/route.ts
**/

import NextAuth from "next-auth"

const handler = NextAuth({
  ...
})

export { handler as GET, handler as POST }
```
