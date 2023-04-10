import * as React from 'react';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import {
  PlasmicDotoPoorC1,
  DefaultDotoPoorC1Props,
} from './plasmic/doto_poor/PlasmicDotoPoorC1';

export interface DotoPoorC1Props extends DefaultDotoPoorC1Props {}

function DotoPoorC1_(props: DotoPoorC1Props, ref: HTMLElementRefOf<'div'>) {
  const slot2 = `this text set by: ${__PACKAGE__}@${__VERSION__}`;
  return <PlasmicDotoPoorC1 root={{ ref }} slot2={slot2} {...props} />;
}

const DotoPoorC1 = React.forwardRef(DotoPoorC1_);
export default DotoPoorC1;
