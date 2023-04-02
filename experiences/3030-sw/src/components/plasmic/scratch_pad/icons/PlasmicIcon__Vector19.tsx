// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector19IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 12 20'}
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
          'M.021 0S3.6 1.557 4.597 2.725c2.752 3.2 7.072 12.08 7.072 12.08L8.3 19.488l-6.491-6.976L0 .202.021 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
