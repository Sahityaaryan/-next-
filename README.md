This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



<!-- Learning how to create readme.md -->

<!-- started: 24-10-23 23:05 -->
<!--  Building the application -->

<!-- 1. Implementing routing -->
## Learning to Routing
- ## App router(Tree Like structure)
    - 1. Directories are route and directories having page.js will be shown else they will be used to store components or static file like images etc.

    - 2. checking whether the root layout wraps the nested layouts or not (yes it is wrapping inside the wrapper)

    - 3. Understanding the TEMPLATE.JS - a layout whose data is not consistent?


## Doubts

- 1. Templates (confusing) - 25-10-23 (00:17) 
- 2. What is the use of "scroll" in Link? 25-10-23 (08:39)


## Insights
1. useRouter can play more with routing by writing codes but for short purposes Link is appreciated because of some default facilites like (prefetch, scroll, replace etc.)

2. - Route groups (folder_name)
    1. Pro's - It can be used to organize the routes
    2. Navigating - Through different route grops will cause full page reload increasing the cost  

3. Dynamic Routing 
    1. for showing user a page whose content is not fixed and can be changed on the user input or any search queries (for example I have two components "Team" , "Business" under the same "About/" so I will check the user's search params to display the required response).

4. Streaming(Do checkout) && Loading.js
    1. loading.tsx || jsx : This file will return automatically whenever the required page loads    

5. Error Handling
    1. error.tsx the UI component shown while getting the error
         - create an error.tsx in the level of layout and all
         - for error handling define the ErrorBoundary at the required component or it may be the layout and populate the fallback attribute 
         - error: these contains error messages for server side errors these may contain sensitive information handle it smartly at the production (use the "message" inside the Error object as it contains the generic message)
         - digest: hash for the respective error 
    2. global-error.tsx : these files can be used to handle the errors of the root layout.tsx || root template.tsx


## Things to be explored Later (after SIH)
1. Router cache- how and where the prefetched components got stored in the client-side. 


## Level up Development

- href in Link also accept the object in which we can pass querys as well. so sending queries to the backend with href.
-  "<Link href={`/blog/${post.slug}`}>{post.title}</Link>" another way of providing the queries
- Check the Middleware post in the [Components>Link](https://nextjs.org/docs/app/api-reference/components/link)
- Scrolling to an id [Linking and Navigating](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- Add route groups wherever necessary
- Explore the Dynamic routes (Each topic under this is unique from generateStaticParams to catch-all optional)
but I am unable to understand the useCase of it
 




