# Global Style Utils

## Theme getters

theme.size

| Arg              | Type          | Default | Description                                                               | Example                              |
| ---------------- | ------------- | ------- | ------------------------------------------------------------------------- | ------------------------------------ |
| size             | `CSSVarsSize` |         | Specify a number that matchs with one of the CSS vars previously defined. | `theme.size(16)`                     |
| options.pxInRem  | boolean       | false   | If true, size will match with one of the CSS vars with REM unit.          | `theme.size(16, { pxInRem: true })`  |
| options.negative | boolean       | false   | If true, size will return within CSS `calc` function minus value `1`.     | `theme.size(16, { negative: true })` |

theme.color

| Arg           | Type                                    | Default | Description                                                                                                             | Example                                      |
| ------------- | --------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| color         | `CSSVarsColor`                          |         | Specify a color that matchs with one of the CSS vars previously defined.                                                | `theme.color('main')`                        |
| options.mix   | `tint` `tone` `shade`                   |         | Mixing terminology where `tint` is closer to white, while `shade` is closer to black.                                   | `theme.color('main', { mix: 'tint' })`       |
| options.alpha | number `primary` `secondary` `tertiary` |         | Alpha channel specified by number (0-1), percentage (0-100) or `primary` (0.6), `secondary` (0.4) and `tertiary` (0.2). | `theme.color('main', { alpha: 'primary' }) ` |
