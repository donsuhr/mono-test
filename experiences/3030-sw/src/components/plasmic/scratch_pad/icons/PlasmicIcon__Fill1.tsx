// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Fill1IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Fill1Icon(props: Fill1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 5 18'}
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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={'M0 17.816h4.581V0H0v17.816z'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Fill1Icon;
/* prettier-ignore-end */
