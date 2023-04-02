// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Ellipse619IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Ellipse619Icon(props: Ellipse619IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 84 84'}
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

      <circle cx={'42'} cy={'42'} r={'42'} fill={'currentColor'}></circle>
    </svg>
  );
}

export default Ellipse619Icon;
/* prettier-ignore-end */
