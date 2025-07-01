# Project Info-:

An AI-powered car marketplace web app built with Next.js, where users can list, search, and compare used cars intelligently.

## Create Next.js app-:

```
npx create-next-app@latest
```

### Run App on server

```
npm run dev
```

---

## Install ShadCn

```
npx shadcn@latest init
```

- install Button from shadcn

```
npx shadcn@latest add button
```

- Install all the components of Shadcn Which is required in our app

```
npx shadcn@latest add accordion alert badge calendar card checkbox dialog dropdown-menu input label pagination popover select sheet skeleton slider sonner table tabs textarea
```

- For installing all component at one time (but its not good practice)

```
npx shadcn-ui@latest add --all
```

---

## IMP Concepts-:

- {children} inside layout.js is load the page.js file above this header and below this is footer
- header.jsx is created under components/ui and import into the layout.js

---

## User Authentication (Clerk)-:

- 1 Install Clerk-:

```
npm install @clerk/nextjs
```

- 2 Create .env files and add api keys

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c21hc2hpbmctZm9hbC05LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_EtDxYGAv3a5DCo8q6PCRkUmNPOwwyAm5rap0P9oPw8
```

- 3 Update Middleware.js file

  - this file runs before the app runs
  - configure and initialize authentication before the app runs
  - protect any private pages from the public access
  -

- 4 Add <ClerkProvider>Entire code<ClerkProvider/> in the layout.js file
  and at top add 

```
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
```

- 5 Create Private Pages at middleware.js

```
const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/saved-cars(.*)",
  "/reservations(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const {redirectToSignIn} = await auth();
    return redirectToSignIn();
  }
  });

```




---

## Setup a BackEnd -: (SupaBase) For DataBase
 - We use postgres database supabase.
 - Prisma PostGres sql database. ORM
 - Use Supabase storage for car images (public)
 - connect => server.ts files => copy code => paset in => create file inside lib (supabase.js).
 - npm install @supabase/supabase-js
 - npm install @supabase/ssr




---


## Prevent WebSite from Common Attacks-: (Arcjet)
 - Security for application
 - Avoid Rate limiting
 - Prevent Website from common attack
 - Email Validation
 - Data redaction 
 - Bot detection

### Create a new site and add api key at .env file


---

## Creating a waitlist form if we add to new feature in web
 - get template from create.
 - this is used to create email notification when it lauch
 - FAQ Section 
 - This is also very imp part and web looks very good 
 - like this [text](https://vehiql-vedant.created.app)
 
 - for integrate in pur app click embed project and copy it link in crete waitlist folder inside app 



---

## Landing Page-:



---

## Drag and drop search ui
 - install library
 ```npm i react drop-zone```

 - use React-Dropzone

 



