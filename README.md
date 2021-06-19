# Fit-s-marky

[![Jest](https://github.com/ZdenekD/fit-s-marky/workflows/Jest/badge.svg)](https://jestjs.io/en/)
[![Snyk](https://github.com/ZdenekD/fit-s-marky/workflows/Snyk/badge.svg)](https://snyk.io)

[![code style: eslint](https://img.shields.io/badge/code%20style-eslint-%23463fd4)](https://eslint.org) [![code style: stylelint](https://img.shields.io/badge/code%20style-stylelint-success)](https://stylelint.io) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installing / Getting started

Instruction of the minimal setup

---

### Setting up Dev

Description how to set project on local machine

```
git clone git@github.com:ZdenekD/fit-s-marky.git
cd fit-s-marky/
yarn
```

### CSS Modules fix

Because of problems with NextJS CSS modules and Framer-motion (if is used `<AnimatePresence exitBeforeEnter>`, NextJS change styles immediately and animation `before unmount` is unstyled).
Solution is use @zeit/next-css package, but there is invalid configuration for postcss, so edit files are in folder **next-css**. For proper work it's necessary use @zeit/next-css package
and edited files from folder 'next-css'.

### Development

It's automatically pushed to [Zeit.co](https://zeit.co/dashboard). Production branch is **master**, other branches for development (every pushed branch is built)

```
master branch - **production**
develop branch - stage/development preview
```

### Building

Project is automatically build on [Zeit.co](https://zeit.co/dashboard).
Build task:

```
yarn build
```

## Tests

How to run and write tests
[Snyk](https://snyk.io) - check packages for vulnerabilities
[Webhint](https://webhint.io) - complete website tests
[Yarn Outdated](https://yarnpkg.com/lang/en/docs/cli/outdated/) - check for outdated project packages

```
snyk wizard
yarn jest
yarn jest:coverage
yarn hint:local
yarn hint:dev
yarn hint:prod
yarn outdated
```

## Sentry

Handle initial config files for Sentry

```
npx @sentry/wizard -i nextjs
```

## Deploying

Push to **master** branch
