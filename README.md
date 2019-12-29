# Fit-s-marky

![aws](https://codebuild.eu-central-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiUHMvWE1xeitFRmdRaFZMeHBCOUtFNWUzazBOWGsvaUJTWmVZY0JZbnJoTmtzSG9YTm1QeTRrMVlzYmhkeFBjNHJTMnJPU3Z2bVpuZVR4S21ib2txdW5nPSIsIml2UGFyYW1ldGVyU3BlYyI6IkNodGp0ZGM1VFo2Umx5cDUiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=develop)
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

### Development

AWS development
- create S3 bucket with `dev` prefix
- create CloudFront distribution
- create CodeBuild with S3 bucket access role
- create SNS and Lambda to Slack messages for build info

[url](https://d9wkmslvwir33.cloudfront.net)

### Building

Build project before deploy

```
yarn build
```

## Tests

How to run and write tests

```shell
yarn test
```

## Deploying

How to build and publish on production
