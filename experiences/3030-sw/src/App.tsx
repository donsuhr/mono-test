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

declare global {
  var __VERSION__: string | undefined;
}

const Experience = ({ aprop }) => {
  const handleOnClick = (e) => {
    console.log('clicked', e);
  };


  return (
    <>
      <p>
        3030-sw {__VERSION__} - aprop: {aprop}
      </p>
      <p>a-cjs 1+2 = {add(1, 2)}</p>
      <SecondComponent  />
      <UpdatedSecondComponent  />
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
