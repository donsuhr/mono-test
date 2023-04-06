import { useState } from 'react';

const useVm = () => {
  const [someState, setSomeState] = useState(0);

  const slot1 = `this text set by: ${__PACKAGE__}@${__VERSION__} - someState: ${someState}`;

  const onClick = () => {
    console.log('click clicck');
    setSomeState(someState + 1);
  };

  return {
    slot1,
    onClick,
  };
};

export default useVm;
