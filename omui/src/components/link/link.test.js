import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from './link';

it('renders correctly with external ref', () => {
  const tree = renderer
    .create(<Link href="https://openmined.org">OpenMined</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with internal ref', () => {
  const tree = renderer.create(<Link href="#cards">Cards</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});
