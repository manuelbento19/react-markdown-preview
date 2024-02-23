import React from 'react';
import ReactMarkdown from 'react-markdown';

export function Preview({text}) {
  return <ReactMarkdown>{text}</ReactMarkdown>
}
