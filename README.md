# Jewell

[![npm version](https://img.shields.io/npm/v/jewell.svg)](https://www.npmjs.org/package/jewell)
[![Build Status](https://travis-ci.org/pedsmoreira/jewell.svg?branch=master)](https://travis-ci.org/pedsmoreira/jewell)
[![Code Climate](https://codeclimate.com/github/pedsmoreira/jewell/badges/gpa.svg)](https://codeclimate.com/github/pedsmoreira/jewell)
[![Test Coverage](https://codeclimate.com/github/pedsmoreira/jewell/badges/coverage.svg)](https://codeclimate.com/github/pedsmoreira/jewelle/coverage)

Syntax Sugar for Javascript Higher-Order Messaging

```javascript
animals.filter.owned.map.name // 💎
animals.filter(animal => animal.owned).map(animal => animal.name) // Tradicional
```

⚠️ **Warning**: This is an experimental package and it's not meant to be used in production.

## Installation

Using NPM:

```bash
npm install jewell --save
```

Using Yarn

```bash
yarn add jewell
```

Using CDN

```bash
<script src="https://unpkg.com/jewell/dist/index.js"></script>
```

*Note*: You may need a ES6 `Proxy` polyfill to support older browsers.

## Resources

- [Contributing Guide](./CONTRIBUTING.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

## License

[MIT](./LICENSE)
