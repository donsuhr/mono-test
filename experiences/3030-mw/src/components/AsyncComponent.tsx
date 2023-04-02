import React from 'react';

export default function AsyncComponent({ thing }) {
  const [foo, setfoo] = React.useState('foo default value');

  const handleOnClick = async (event) => {
    setfoo('fooNotDefault');
    const { moduleThing } = await import('./AsyncTarget');
    setfoo(moduleThing('hello'));
  };

  return (
    <>
      <p>thing prop: {thing}</p>
      <p>foo internal val: {foo}</p>
      <button type="button" onClick={handleOnClick}>
        button
      </button>
    </>
  );
}
