# Installation Guide

Not compatible with Angular 13.1.0 yet, use Angular 13.0.0

## Material

Install before tailwind. Run the following command to install.

> npm i @angular/material

Add the reference to the nodule modules scss file to **angular.json**. Or create your own theme.scss file.

```typescript
"styles": [
 "src/styles.scss",
 "src/theme.scss", // custome theme
 "node_modules/@angular/material/prebuilt-themes/indigo-pink.css" // default theme
],
```

Import the icon font into styles.scss

```scss
/* Material Icons */
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
```

## Tailwind

<https://github.com/ngneat/tailwind>

To install, try the first command. If that fail's, try the second commands.

> npx ng add @ngneat/tailwind

> npm install tailwindcss @ngneat/tailwind
>
> npx tailwindcss init

Add these imports to your style.scss file.

```scss
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

## Storybook

Install Storybook with these commands

> npx sb init
>
> npm run storybook

Run storybook with

> npm run storybook
