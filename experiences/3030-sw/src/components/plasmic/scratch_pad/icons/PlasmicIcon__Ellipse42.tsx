// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Ellipse42IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Ellipse42Icon(props: Ellipse42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 90 90'}
      height={'1em'}
      width={'1em'}
      style={{
        fill: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={'45'} cy={'45'} r={'45'} fill={'currentColor'}></circle>
    </svg>
  );
}

export default Ellipse42Icon;
/* prettier-ignore-end */
