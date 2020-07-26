import React from 'react';
import { useTemplate } from '..';
import renderer from 'react-test-renderer';

const TemplateNotOverridden = useTemplate('templateNotOverridden', () => <div>A</div>);

test('Template without override', () => {
  const component = renderer.create(<TemplateNotOverridden />);
  let tree = component.toJSON();
  expect(tree!.children).toEqual(['A']);
});

const TemplateBase = useTemplate('templateOverridden', () => <div>A</div>);
const TemplateOverride = useTemplate('templateOverridden', () => <div>B</div>);

test('Template with override. Base overridden', () => {
  const component = renderer.create(<TemplateBase />);
  let tree = component.toJSON();
  expect(tree!.children).toEqual(['B']);
});

test('Template with override. Override is correct', () => {
  const component = renderer.create(<TemplateOverride />);
  let tree = component.toJSON();
  expect(tree!.children).toEqual(['B']);
});

interface NameProperties {
  name: string;
}
const TemplateWithPropertiesBase = useTemplate('templateOverriddenWithProperties', (props: NameProperties) => (
  <div>Hi {props.name}</div>
));
const TemplateWithPropertiesOverride = useTemplate('templateOverriddenWithProperties', (props: NameProperties) => (
  <div>Hello {props.name}</div>
));

test('Template with override. Base is correct', () => {
  const component = renderer.create(<TemplateWithPropertiesBase name="Bob" />);
  let tree = component.toJSON();
  expect(tree!.children).toEqual(['Hello ', 'Bob']);
});

test('Template with override. Override is correct', () => {
  const component = renderer.create(<TemplateWithPropertiesOverride name="Bob" />);
  let tree = component.toJSON();
  expect(tree!.children).toEqual(['Hello ', 'Bob']);
});
