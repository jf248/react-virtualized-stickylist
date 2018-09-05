# react-virtualized-stickylist
An extension of `react-virtualized`'s `List` component that adds 'sticky' subheaders in the list.

See [storybook][storybook] for live demos.

## Installation
```
yarn add react-virtualized-stickylist
```

## Usage
```jsx
import React from 'react';
import {render} from 'react-dom';
import StickyList from 'react-virtualized-stickylist';

const items = [
    { text: 'apple', group: 'fruits' },
    { text: 'banana', group: 'fruits' },
    { text: 'carrot', group: 'vegetables' },
    // ... etc.
];

const labelRenderer = ({ label, style, key }) => (
    <div
        key={key}
        style={{
            ...style,
            height: 20,
            backgroundColor: 'white',
            lineHeight: `20px`,
        }}
        >
        <b>{label}</b>
    </div>
);

rowRenderer: ({ index, style, key }) => (
    <div
        key={key}
        style={{
            ...style,
            height: 20,
            backgroundColor: 'white',
            lineHeight: `20px`,
            paddingLeft: 8,
        }}
    >
        {items[index].text}
    </div>
);

render(
    <StickyList
        height={100},
        items={items},
        labelRenderer={labelRenderer},
        rowHeight={20},
        rowRenderer={rowRenderer},
        width={300},
      }}
    />,
    document.getElementById('root')
);
```

## Props
> Takes all the props of `react-virtualized`'s [list][`List` component], as well as the following additional props.
| Prop | Type | Required? | Default | Description |
| :--- | :--- | :---: | :--- | :--- |
| itemToGroup | `func` |  | `item => item && item['group']` | A function that converts an item to its group.<br><br>**Signature**<br>`function(item: any) => (group: string \| null)` |
| items | `array` |   | `[]` | The items to list. |
| labelRenderer | `func` | ✓ |  | A function that renders the label.<br>Similar to `rowRenderer` except it is given a `label` prop instead of an<br>`index` prop.<br><br>**Signature**<br>`function({label: string, ...otherProps}) => node` |
| wrapperStyle | `object` |   | `{}` | Extra styling for the wrapper `div`. |

[storybook]: https://jf248.github.io/react-virtualized-stickylist/
[list]: https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md
