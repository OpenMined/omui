import React from 'react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import { Code, CodeEditor } from './';
import { Text } from '../../';

// Code Languages
const themeCodeLanguages = [
  'markup',
  'css',
  'javascript',
  'bash',
  'c',
  'csharp',
  'cpp',
  'clojure',
  'docker',
  'erlang',
  'git',
  'go',
  'graphql',
  'java',
  'json',
  'julia',
  'kotlin',
  'latex',
  'markdown',
  'objectivec',
  'python',
  'r',
  'rust',
  'jsx',
  'tsx',
  'swift',
  'typescript',
  'wasm'
];

const themeCodePrettyLanguages = [
  'HTML, XML, SVG',
  'CSS',
  'Javascript',
  'Bash',
  'C',
  'C#',
  'C++',
  'Clojure',
  'Docker',
  'Erlang',
  'Git',
  'Go',
  'GraphQL',
  'Java',
  'JSON',
  'Julia',
  'Kotlin',
  'LaTeX',
  'Markdown',
  'Objective-C',
  'Python',
  'R',
  'Rust',
  'JSX (React Javascript)',
  'TSX (React Typescript)',
  'Swift',
  'Typescript',
  'WebAssembly'
];

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

Default.parameters = {
  knobs: {
    escapeHTML: false
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
