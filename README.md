# UFAL 60 anos

Veja o quanto evoluímos juntos. Já passaram 60 anos! Explore através do decorrer das décadas o valor e prestígio da nossa Universidade Federal de Alagoas expandindo-se.

## Documentação

This project will follows this planned prototype:

![Mobile device layout - home](https://github.com/soujvnunes/ufal-60-anos/blob/master/doc/samsung-galaxy-s10--1.png?raw=true)
![Mobile device layout - decade context](https://github.com/soujvnunes/ufal-60-anos/blob/master/doc/samsung-galaxy-s10--2.png?raw=true)
![Desktop device layout - home](https://github.com/soujvnunes/ufal-60-anos/blob/master/doc/web-1920--1.png?raw=true)
![Mobile device layout - decade context](https://github.com/soujvnunes/ufal-60-anos/blob/master/doc/web-1920--2.png?raw=true)
![Mobile device layout - decade context - imagem visibility](https://github.com/soujvnunes/ufal-60-anos/blob/master/doc/web-1920--3.png?raw=true)

## Conventions

1. Naming:

- **Folders** directory and JS, JSX and CSS **files**, if necessary, names are named with _kebab-case_ as `component/my-component/index.js`;
- **Component** exportation names are named with _PascalCase_ as:

```javascript
// example for index.js at /component/ folder
import MyComponent from "./my-component";
import AnotherComponent from "./another-component";

export { MyComponent, AnotherComponent };
```

- **Instances** from components or **modules** are named with _camelCase_, following the [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/react#naming), as:

```javascript
// example for modules.js
export function someModule({ prop = "" } = {}) {}

// example for instancing a component
import MyComponent from "./my-component";

const myComponent = MyComponent;
```

- **Classes** on cascade stylesheet **modules** are named with _camelCase_. In case importing them as css modules, should always be imported as _cssModules_, following:

```css
/* example for a index.module.css from MyComponent */
.root {
  prop: "value";
}

.variant {
  exclusive-prop: "value";
}
```

```javascript
// example for instancing styles from css modules
import cssModules, { root } from "./index.module.css";
```

```jsx
// using the css module class
<div className={clsx(root, { cssModules[variant]: variant })} />
```

2. Project Tree:

- **Assets**: locate on `/src/assets` directory, following the naming convention, exported by `index.js` file on it;
- **Components**: locate on `/src/components` directory, following the naming convention, exported by `index.js` file on it;
- **Modules**: locate on `modules.js` file at `/src/components` directory;
- **Constants**: locate on `constants.js` file at `/src/components` directory;
- Used **APIs**: locate on `api.js` file at `/src/components` directory;

3. Documentation:

- Params description:

```javascript
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

function pow({ x = 0, n = 0 } = {}) {
  return x ** n;
}
```

- JSX component usages:

```javascript
<Component prop={value1|value2|etc...} />
```

- Component or module props:

- Functional:

```javascript
function Component({
  iAmString = "",
  iAmBool = false,
  iAmFunc = () => {},
  iAmNumber = 0,
  iAmObject = null,
} = {}) {
  return <div />;
}
```

- Class:

```javascript
const defaultProps = {
  iAmString = "",
  iAmBool = false,
  iAmFunc = () => {},
  iAmNumber = 0,
  iAmObject = null,
}

export default class MyComponent extends React.Component {}

MyComponent.defaultProps = defaultProps;
```

## Components

All components reffers to [Material UI's library](https://material-ui.com/).

## Modules

Nothing yet.

## Constants

Nothing yet.

## Used APIs

Nothing yet.
