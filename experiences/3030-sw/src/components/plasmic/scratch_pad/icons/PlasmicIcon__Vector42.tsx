// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector42IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector42Icon(props: Vector42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 3 5'}
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
          'M2.14.722S1.605-.583.757.316c-.848.899-.987 2.803-.405 3.397a2.014 2.014 0 001.562.444L2.14.722'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector42Icon;
/* prettier-ignore-end */
