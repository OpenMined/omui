import React, { Fragment, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Prism from 'prism-react-renderer/prism';
import theme from 'prism-react-renderer/themes/vsDark';
import Editor from 'react-simple-code-editor';

import { Box } from './Box';
import { fonts } from '../theme/typography';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-markup');
require('prismjs/components/prism-css');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-c');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-cpp');
require('prismjs/components/prism-clojure');
require('prismjs/components/prism-docker');
require('prismjs/components/prism-erlang');
require('prismjs/components/prism-git');
require('prismjs/components/prism-go');
require('prismjs/components/prism-graphql');
require('prismjs/components/prism-java');
require('prismjs/components/prism-json');
require('prismjs/components/prism-julia');
require('prismjs/components/prism-kotlin');
require('prismjs/components/prism-latex');
require('prismjs/components/prism-markdown');
require('prismjs/components/prism-objectivec');
require('prismjs/components/prism-python');
require('prismjs/components/prism-r');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-tsx');
require('prismjs/components/prism-swift');
require('prismjs/components/prism-typescript');
require('prismjs/components/prism-wasm');

export const Code = ({
  children,
  language,
  lineNumbers = true,
  inline = false,
  ...props
}) => {
  if (inline) lineNumbers = false;

  return (
    <Box {...props} display={inline ? 'inline' : 'block'}>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            as="pre"
            px={inline ? 2 : 4}
            py={inline ? 1 : 3}
            borderRadius="md"
            display={inline ? 'inline' : 'block'}
            overflow="scrollX"
            className={className}
            style={style}
          >
            {tokens.map((line, i) => (
              <Box
                key={i}
                display="table-row"
                {...getLineProps({ line, key: i })}
              >
                {lineNumbers && (
                  <Box
                    as="span"
                    display="table-cell"
                    textAlign="right"
                    fontWeight="semibold"
                    pr={4}
                    userSelect="none"
                    opacity="0.5"
                  >
                    {i + 1}
                  </Box>
                )}
                <Box as="span" display="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Highlight>
    </Box>
  );
};

export const CodeEditor = (props) => {
  const [code, setCode] = useState(props.children);

  const styles = {
    root: {
      boxSizing: 'border-box',
      fontFamily: fonts.mono,
      ...theme.plain
    }
  };

  const highlight = (code) => (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  );

  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={highlight}
      style={styles.root}
    />
  );
};

// TODO: Finish editor styling
// TODO: Convert back to Typescript
