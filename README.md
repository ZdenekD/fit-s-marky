# Fit-s-marky

[![Jest](https://github.com/ZdenekD/fit-s-marky/workflows/Jest/badge.svg)](https://jestjs.io/en/)
[![Snyk](https://github.com/ZdenekD/fit-s-marky/workflows/Snyk/badge.svg)](https://snyk.io)
[![Cypress](https://github.com/ZdenekD/fit-s-marky/workflows/Cypress/badge.svg)](https://www.cypress.io)

[![code style: eslint](https://img.shields.io/badge/code%20style-eslint-%23463fd4)](https://eslint.org) [![code style: stylelint](https://img.shields.io/badge/code%20style-stylelint-success)](https://stylelint.io) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Percy](https://percy.io/static/images/percy-badge.svg)](https://percy.io)

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

### Development

It's automatically pushed to [Zeit.co](https://zeit.co/dashboard). Production branch is **master**, other branches for development (every pushed branch is build)

```
master branch - production
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
yarn test:snyk
yarn test:webhint
yarn test:packages
```

## Deploying

Push to **master** branch
