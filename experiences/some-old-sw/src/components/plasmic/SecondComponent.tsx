import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import Dodocore from 'dodo-poor/dist/esm/components/plasmic/DotoPoorC1';
import {
  PlasmicSecondComponent,
  DefaultSecondComponentProps,
} from '../../plasmic-managed/blank_project/PlasmicSecondComponent';
import useSecondComponentVm from './useSecondComponentVm';

export interface SecondComponentProps extends DefaultSecondComponentProps {}

function SecondComponent_(
  props: SecondComponentProps,
  ref: HTMLElementRefOf<'div'>,
) {
  const { slot1, onClick } = useSecondComponentVm();
  return (
    <>
      <p>slot2 from dodo-poor@0.0.1</p>
      <PlasmicSecondComponent
        onClick={onClick}
        root={{ ref }}
        slot1={slot1}
        slot2={<Dodocore slot1={slot1} />}
        {...props}
      />
    </>
  );
}

const SecondComponent = React.forwardRef(SecondComponent_);
export default SecondComponent;
