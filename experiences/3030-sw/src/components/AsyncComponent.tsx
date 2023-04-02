import React from 'react';

export default function AsyncComponent({ thing }) {
  const [foo, setfoo] = React.useState('foodefault');

  const handleOnClick = async (event) => {
    setfoo(<p>fooNotDefault</p>);
    const { moduleThing } = await import('./AsyncTarget');
    setfoo(moduleThing('hello'));
  };

  return (
    <>
      <p>thing: {thing}</p>
      foo: {foo}
      <hr />
      <button type="button" onClick={handleOnClick}>
        button
      </button>
      <hr />
    </>
  );
}
