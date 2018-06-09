
# babel-preset-minimal

[![NPM version](https://img.shields.io/npm/v/babel-preset-minimal.svg?style=flat)](https://npmjs.com/package/babel-preset-minimal) [![NPM downloads](https://img.shields.io/npm/dm/babel-preset-minimal.svg?style=flat)](https://npmjs.com/package/babel-preset-minimal) [![CircleCI](https://circleci.com/gh/egoist/babel-preset-minimal/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/babel-preset-minimal/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Features

- Minimal `async/await` transform
- Loose mode if you want minimal output but still need to support old browsers like IE 9
- Modern mode if you only target browsers that support `<script type="module">` tag
- [...See complete features](./test/snapshot/index.test.js.md).

## Install

```bash
yarn add babel-preset-minimal
```

## Usage

Your `.babelrc`:

```json
{
  "presets": ["minimal"]
}
```

## Options

### jsx

- __Type__: `string`
- __Default__: `react`
- __Possible values__: `react` `vue` or any JSX pragma like `h`.

### mode

- __Type__: `string`
- __Default__: `undefined`
- __Possible values__: `loose` `modern`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**babel-preset-minimal** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/babel-preset-minimal/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
