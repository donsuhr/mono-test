// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector21IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector21Icon(props: Vector21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 13 20'}
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

      <path
        d={
          'M12.544 0s-3.84.683-7.179 5.12C2.027 9.557 0 17.275 0 17.275l4.341 2.56 5.43-9.296c3.349-1.675 2.096-7.307 1.6-8L12.544 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */
