import React from 'react';
import FirstComponent from './components/plasmic/FirstComponent';
import SecondComponent from './components/plasmic/SecondComponent';
import DotoPoorC1 from './components/plasmic/DotoPoorC1';
import DodoCore from 'dodo-poor/dist/esm/components/plasmic/DotoPoorC1';

declare global {
  var __VERSION__: string | undefined;
  var __PACKAGE__: string | undefined;
}

const Experience = ({ aprop }) => {
  return (
    <>
      <p>
        some-old-sw {__VERSION__} - aprop: {aprop}
      </p>
      <p>Self version</p>
      <DotoPoorC1 slot2="hello slot 1" />
      <p>From dodo-poor</p>
      <DodoCore />
      <p>self FirstComponent: </p>
      <FirstComponent />

      <p>self SecondComponent: </p>
      <SecondComponent />
    </>
  );
};

export { Experience };
