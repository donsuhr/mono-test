// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector11IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 14 32'}
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
          'M12.373 0a8.944 8.944 0 00-4.602 4.699C6.379 8.155 2.805 15.7 2.133 17.883 1.461 20.064 0 31.872 0 31.872l2.613.085s3.302-9.797 4.006-12.57c.704-2.774 7.013-13.334 7.013-13.334L12.373 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
