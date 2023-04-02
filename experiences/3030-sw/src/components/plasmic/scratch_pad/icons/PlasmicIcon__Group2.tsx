// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 25 35'}
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
          'M0 34.648V0h23.608v7.04H8.235v6.486h14.641v6.67H8.236v7.226h16.287v7.226H0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
