import React from 'react';
import cat from './assets/cat.jpg';
import AltButton from './components/AltButton';
import AnywayPencil from './components/AnywayPencil';
import W2 from './components/W2';
import Tile from './components/Tile';
import AsyncComponent from './components/AsyncComponent';
import add from 'a-cjs';
import SecondComponent from 'some-old-sw/dist/esm/components/plasmic/SecondComponent';
import UpdatedSecondComponent from './components/SecondComponent';
import DotoPoorC1 from 'some-old-sw/dist/esm/components/plasmic/DotoPoorC1';
import ThisDotoPoorC1 from './components/DotoPoorC1';
import DotoPoorDirect from 'dodo-poor/dist/esm/components/plasmic/DotoPoorC1';

declare global {
  var __VERSION__: string | undefined;
}

const Experience = ({ aprop }) => {
  const handleOnClick = (e) => {
    console.log('clicked', e);
  };

  const slot1 = `this text set by: ${__PACKAGE__}@${__VERSION__}`;

  return (
    <>
      <p>
        3030-sw {__VERSION__} - aprop: {aprop}
      </p>
      <p>a-cjs 1+2 = {add(1, 2)}</p>
      <p>from some-old-sw</p>
      <DotoPoorC1 slot2={slot1} />
      <p>this projects import of Plasmic DotoPoorC1</p>
      <ThisDotoPoorC1 />
      <p>SecondComponent from some-old-sw</p>
      <SecondComponent />
      <p>This projects import of SecondComponent (as UpdatedSecondComponent) with doto <em>package</em> verison of DotoPoorC1</p>
      <UpdatedSecondComponent slot2={<DotoPoorDirect />} slot1="foo" />
      <AsyncComponent thing="here is a thing" />
      <div>
        <AnywayPencil />
      </div>
      <div>
        <AltButton onClick={handleOnClick} />
      </div>

      <W2 icon="w2" />
      <Tile />
      <img src={cat} alt="cat" />
    </>
  );
};

export { Experience };
