<img width="613" alt="Screenshot 2024-06-02 at 9 55 30 PM" src="https://github.com/dylpark/nextspace/assets/64296934/ea92ea0f-cb28-486e-a145-7b32fd25b0ef">

This app puts React Server Components into practice by building a full-stack application from scratch with Next.js, PostgreSQL (Neon Serverless) and Prisma. The app is mostly complete as per my original goal of exploring this tech stack at a small scale. There's a few 'todos' below that would further improve performance.

ToDo List:

- Server actions: Handle form submissions and automatically re-render the UI without a full page load
- Server actions: Create a skeleton UI in the `loading.tsx` file.

Simple Social Media Platform inspired by sites like MySpace and Facebook where users can befriend each other. The goal of this project is to build knowledge on Next’s rendering, data-fetching, and caching strategies.

📚 Design patterns with React Server Components (RSC)

💎 How to choose optimal rendering strategies

🚅 Dynamic routing and project organization

🔥 Advanced data fetching and caching

👲 User authentication with Auth.js

📅 Data modeling with Postgres and Primsa

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```zsh
npm run dev
# or
yarn dev
# or
pnpm dev
```

To run migrations:

```zsh
npx prisma migrate dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
