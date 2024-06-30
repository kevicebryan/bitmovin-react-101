This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To see the result run the development server:
```bash
npm i
```

Package used:
- bitmovin-player-react : https://www.npmjs.com/package/bitmovin-player-react
- bitmovin-player-ui : https://www.npmjs.com/package/bitmovin-player-ui
- styled-components : https://styled-components.com/docs/basics


The sample of how to customize your own bitmovin video player UI can be seen in pages.tsx

Styling can be seen in style.ts --> src/app/style.ts
- to make styling easier give the component you want to style a classname with the **cssClasses** attribute, and reference that in the styling with **bmpui-** in front of the class name, and **hit it's the child div**.
    - e.g: you give cssClass: **controlbar-wrapper**, to access it you can use:
```css
& .bmpui-controlbar-wrapper > div {
      // some css styling
}

