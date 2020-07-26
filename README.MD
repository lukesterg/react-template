# React Template

Allows creating components in React that can be replaced.

This library is intended to be used by libraries. If you distribute a React component, it will allow people to change how a component works without them needing to change the library.

## Installing

For the latest version:

```bash
npm i @framed/react-template
```

## How to use

Call `useTemplate(<template name as string>, <React functional component>)` to create a templated component.

If a template name is used only the last template added will be shown.

### Example

```javascript
const Base = useTemplate('templateOverriddenWithProperties', (props: NameProperties) => <div>Hi {props.name}</div>);

const Override = useTemplate('templateOverriddenWithProperties', (props: NameProperties) => (
  <div>Hello {props.name}</div>
));
```

Rendering `<Base name="Bob" />` will display `<div>Hello Bob</div>`.

## Building

Fetch the repo:

```bash
git clone https://github.com/lukesterg/react-template
```

Change the directory to react-template:

```bash
cd react-template
```

Install dependencies:

```bash
npm i
```

Build:

```bash
npm run build
```
