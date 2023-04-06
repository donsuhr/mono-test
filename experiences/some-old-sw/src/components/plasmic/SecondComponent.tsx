import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
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
    <PlasmicSecondComponent
      onClick={onClick}
      root={{ ref }}
      slot1={slot1}
      slot2="slot 2 content"
      {...props}
    />
  );
}

const SecondComponent = React.forwardRef(SecondComponent_);
export default SecondComponent;
