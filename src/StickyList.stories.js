import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import StickyList from './StickyList';

const ITEMS = [
  { text: 'apple', group: 'fruits' },
  { text: 'banana', group: 'fruits' },
  { text: 'grapefruit', group: 'fruits' },
  { text: 'lemon', group: 'fruits' },
  { text: 'mango', group: 'fruits' },
  { text: 'orange', group: 'fruits' },
  { text: 'papaya', group: 'fruits' },
  { text: 'brocoli', group: 'vegetables' },
  { text: 'cabbage', group: 'vegetables' },
  { text: 'carrot', group: 'vegetables' },
  { text: 'cauliflower', group: 'vegetables' },
  { text: 'lettuce', group: 'vegetables' },
  { text: 'onion', group: 'vegetables' },
  { text: 'bread', group: 'other' },
  { text: 'eggs', group: 'other' },
  { text: 'lentils', group: 'other' },
  { text: 'milk', group: 'other' },
  { text: 'rice', group: 'other' },
];

const ROW_HEIGHT = 20;
const WIDTH = 300;
const HEIGHT = 100;

export const Example = () => (
  <StickyList
    {...{
      height: HEIGHT,
      items: ITEMS,
      labelRenderer: ({ label, style, key }) => (
        <div
          key={key}
          style={{
            ...style,
            height: ROW_HEIGHT,
            backgroundColor: 'white',
            lineHeight: `${ROW_HEIGHT}px`,
          }}
        >
          <b>{label}</b>
        </div>
      ),
      rowHeight: ROW_HEIGHT,
      rowRenderer: ({ index, style, key }) => (
        <div
          key={key}
          style={{
            ...style,
            height: ROW_HEIGHT,
            backgroundColor: 'white',
            lineHeight: `${ROW_HEIGHT}px`,
            paddingLeft: 8,
          }}
        >
          {ITEMS[index].text}
        </div>
      ),
      width: WIDTH,
    }}
  />
);

const ExampleWithData = () => (
  <div>
    <Example />
    <br />
    <div style={{ fontWeight: 'bold' }}>items prop:</div>
    <pre>{JSON.stringify(ITEMS, null, 2)}</pre>
  </div>
);

storiesOf('StickyList', module).add('basic', () => <ExampleWithData />);
