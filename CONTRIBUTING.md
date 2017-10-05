# Contributing

We'd love to have your contribution added to Jewell. If you decide to do so, please follow the
[code of conduct](./CODE_OF_CONDUCT.md)

## Code Style

Please follow the [TSLint](https://github.com/palantir/tslint) rules on the [tslint.json](tslint.json) file.
You can analyse your code style with `npm run lint`.

The linter also runs before the tests, so if your build is not passing, may be because of formatting.

## Commit Messages

Commit messages should be verb based, such as:

- Fixing ...
- Adding ...
- Updating ...
- Removing ...

## Testing

Please update the tests to accordingly to your code changes. Pull requests will only be accepted if they are successful on
[Travis CI](https://travis-ci.org/pedsmoreira/jewell)
and [Code Climate](https://codeclimate.com/github/pedsmoreira/jewell). Which means the tests must pass and there must be no code quality issues.

## Developing

- `npm test` runs tests shows coverage
- `npm run test:watch` watches tests

## Documentation
   
If needed, please update the README and tutorials to reflect your changes.

## Releasing

To release a new version, define the number following the [semantic versioning](http://semver.org/).

``` bash
$ npm version <newversion> -m "Releasing %s"
$ npm publish
```
