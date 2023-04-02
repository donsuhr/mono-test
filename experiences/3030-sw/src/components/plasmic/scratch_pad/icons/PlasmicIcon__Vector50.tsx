// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector50IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector50Icon(props: Vector50IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 23 22'}
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
          'M3.473 0l18.532 4.968c.787-2.564-5.271 17.02-5.271 17.02S1.137 18.267.845 17.974C.553 17.68-.857 10.101.771 4.73 2.026.654 3.473 0 3.473 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector50Icon;
/* prettier-ignore-end */
