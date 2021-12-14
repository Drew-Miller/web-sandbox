# Installation Guide

## 1. Material 
*install before tailwind*

### Install
Run the following command to install.

> npm i @angular/material

&nbsp;

### Add to Project

Add the reference to the scss file from nodule modules to **angular.json** *styles*

```
"styles": [
 "src/styles.scss",
 "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
],
```

Or, create your own!!!

&nbsp;

## 2. Tailwind

### Install

Try the first set of commands. If there is an error, use the second set of commands.
1. > https://github.com/ngneat/tailwind

2. > npx ng add @ngneat/tailwind

**OR**

1. > npm install tailwindcss @ngneat/tailwind

2. > npx tailwindcss init

&nbsp;

### Add to Project

In your application's stylesheet, add the following imports.

> **style.scss**
```
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

&nbsp;

## 3. Storybook

### Install

Run the following commands

1. > npx sb init

2. > npm run storybook

&nbsp;

### Run

Use the following command to run storybook
> npm run storybook