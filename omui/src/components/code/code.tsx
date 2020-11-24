import React, { useState, useEffect } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import Editor from 'react-simple-code-editor';
import { Global, css } from '@emotion/core';

import { Box } from '../box';

import { fonts } from '../../theme/foundations/typography';

theme.plain['fontFamily'] = fonts.mono;

type CodeProps = {
  children: string;
  language: Language;
  lineNumbers: boolean;
  inline: boolean;
  colorMode: 'light' | 'dark';
};

export const Code = ({
  children,
  language,
  lineNumbers = true,
  inline = false,
  colorMode,
  ...props
}: CodeProps) => {
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
                    fontWeight="bold"
                    pr={4}
                    userSelect="none"
                    opacity={0.5}
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

type CodeEditorProps = {
  children: string;
  onChange: (code: string) => void;
  language: Language;
};

export const CodeEditor = ({
  children,
  onChange,
  language,
  ...props
}: CodeEditorProps) => {
  const [code, setCode] = useState(children);

  useEffect(() => onChange && onChange(code), [code, onChange]);

  const styles = {
    root: {
      boxSizing: 'border-box',
      fontFamily: fonts.mono,
      ...theme.plain
    }
  };

  const highlight = (code: string) => (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </>
      )}
    </Highlight>
  );

  return (
    <Box {...props} borderRadius="md" overflow="hidden">
      <Box
        bg="gray.600"
        color="gray.400"
        pt={2}
        pb={1}
        px={4}
        fontSize="sm"
        fontWeight="medium"
      >
        This code block is editable
      </Box>
      {/* TODO: We should figure out a better way to change this style... */}
      <Global
        styles={css`
          .npm__react-simple-code-editor__textarea:focus {
            outline: none;
          }
        `}
      />
      <Box bg={styles.root.backgroundColor} px={4} py={3}>
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={highlight}
          style={styles.root as React.CSSProperties}
        />
      </Box>
    </Box>
  );
};
