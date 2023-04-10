import React from 'react';
import DotoPoorC1 from './components/plasmic/DotoPoorC1';

declare global {
  var __VERSION__: string | undefined;
  var __PACKAGE__: string | undefined;
}

const Experience = ({ aprop }) => {
  return (
    <>
      <p>
        dodocore {__VERSION__} - aprop: {aprop}
      </p>
      <DotoPoorC1 />
    </>
  );
};

export { Experience };
