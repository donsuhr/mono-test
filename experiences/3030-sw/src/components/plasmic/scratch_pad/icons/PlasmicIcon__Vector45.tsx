// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector45IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector45Icon(props: Vector45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 19 8'}
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
          'M.022 2.882c-.043.294 3.808 4.542 10.619 4.376 6.81-.166 7.658-.417 8-1.241.341-.824-.032-.257-1.259-1.76-.443-.535 0-1.204-.49-1.552-.865-.604-.977-.83-1.915-.813-.939.016-4.539 3.873-4.539 3.873S5.937-.162 5.105.003c-.832.166-.534.701-1.456 1.07-.672.263-1.6.097-2.32.535-1.696 1.054-1.27.98-1.307 1.274z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector45Icon;
/* prettier-ignore-end */
