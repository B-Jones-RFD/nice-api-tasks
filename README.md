![GitHub Actions CI](https://github.com/B-Jones-RFD/nice-api-tasks/actions/workflows/main.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/@b-jones-rfd/nice-api-tasks.svg?style=flat-square)](https://www.npmjs.com/package/@b-jones-rfd/nice-api-tasks)
[![npm bundle size](https://img.shields.io/bundlephobia/min/%40b-jones-rfd%2Fnice-api-tasks)](https://bundlephobia.com/package/@b-jones-rfd/nice-api-tasks)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Nice API Tasks

Helpers to perform common tasks using the [Nice InContact API](https://developer.niceincontact.com/API). This is an exercise to avoid code reuse in my own projects. Use at your own risk.

## Prerequisites

This project requires NodeJS (version >= 18) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
10.2.4
v20.11.1
```

[PNPM](https://pnpm.io/) is a awesome alternative to NPM and is recommended.

## Table of contents

- [nice API Tasks](#nice-api-tasks)

  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API](#api)
  - [Responses](#responses)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm i @b-jones-rfd/nice-api-tasks
```

Or if you prefer using Yarn:

```sh
$ yarn add @b-jones-rfd/nice-api-tasks
```

Or for PNPM:

```sh
$ pnpm add @b-jones-rfd/nice-api-tasks
```

## Usage

TBD

## API

TBD

## Responses

Responses are provided based on the Result type. Success can be determined by checking the success property.

```ts
export type Result<TResponse> = Success<TResponse> | Failure
```

### Success

Response is returned in the data property.

```ts
type Success<TResponse> = { success: true; data: TResponse }
```

### Failure

Errors are returned in the error property.

```ts
type Failure = { success: false; error: string }
```

## Contributing

This is a pet project to save me time at work. It is still under development and you should use at your own risk.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/B-Jones-RFD/nice-api-tasks/tags).

## Authors

- **B Jones RFD** - _Package Noob_ - [B-Jones-RFD](https://github.com/B-Jones-RFD)

## License

[MIT License](https://github.com/B-Jones-RFD/nice-api-tasks/blob/main/LICENSE)
