import React from 'react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import { Code, CodeEditor, Text } from '../..';

import {
  themeCodeLanguages,
  themeCodePrettyLanguages
} from '../../helpers/get-theme';

const themeLanguages = {};

themeCodePrettyLanguages.forEach((lang, index) => {
  themeLanguages[lang] = themeCodeLanguages[index];
});

const sampleCode = `import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`;

export default { title: 'Components/Code', decorators: [withKnobs] };

export const Default = () => (
  <Code
    language={select('Language', themeLanguages, 'jsx')}
    lineNumbers={boolean('Show line numbers?', true)}
  >
    {text('Code', sampleCode)}
  </Code>
);

Default.story = {
  parameters: {
    knobs: {
      escapeHTML: false
    }
  }
};

export const Editable = () => (
  <CodeEditor
    language={select('Language', themeLanguages, 'jsx')}
    onChange={(code) => console.log('Got the code here', code)}
  >
    {sampleCode}
  </CodeEditor>
);

export const Inline = () => (
  <Text as="span">
    Just remember to call{' '}
    <Code language="javascript" inline>
      console.log(myVar);
    </Code>{' '}
    when debugging!
  </Text>
);
