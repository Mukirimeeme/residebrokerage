# Style

## Getting Started

### Install dependencies

Run `yarn` in your terminal. Done!

### Choose your environment

The environment url that is being tested against can be found in `config/test_data.json`. Change the `url.site` property to point your test suite at your localhost or a different remote environment.

### Configure Browsers

Make sure to enable the "Allow Remote Automation" setting in Safari before running your tests. You'll find this setting in Safaris "Develop" dropdown.

### Running Tests

Run the entire test suite with yarn:

```
yarn test
```

_Note: This currently runs each test 4 times if its a failing test. If you are expecting failures, this is not your most efficient option._

### Run specific tests with nightwatch

Useful options:

```
yarn nightwatch -e {browser} -a {tag} --suiteRetries={n} --filter '{fileRegex}'
```
