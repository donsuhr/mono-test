import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import useSecondComponentVm from 'some-old-sw/dist/esm/components/plasmic/useSecondComponentVm';
import {
  PlasmicSecondComponent,
  DefaultSecondComponentProps,
} from './plasmic/scratch_pad/PlasmicSecondComponent';

export interface SecondComponentProps extends DefaultSecondComponentProps {}

function SecondComponent_(
  props: SecondComponentProps,
  ref: HTMLElementRefOf<'div'>,
) {
  const origVm = useSecondComponentVm();
  const slot2 = `this text set by: ${__PACKAGE__}@${__VERSION__}`;

  return (
    <PlasmicSecondComponent
      root={{ ref }}
      {...origVm}
      slot2={slot2}
      {...props}
    />
  );
}

const SecondComponent = React.forwardRef(SecondComponent_);
export default SecondComponent;
