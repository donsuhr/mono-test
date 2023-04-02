import React from 'react';
import cat from './assets/cat.gif';
import AsyncComponent from './components/AsyncComponent';

declare global {
  var __VERSION__: string | undefined;
}

const Experience = ({ aprop }) => (
  <>
    <p>
      3030-mw package.json version: {__VERSION__} - aprop: {aprop}
    </p>
    <AsyncComponent thing="here is a thing in MW" />
    <hr />
    <img src={cat} alt="cat" />
  </>
);

export { Experience };
