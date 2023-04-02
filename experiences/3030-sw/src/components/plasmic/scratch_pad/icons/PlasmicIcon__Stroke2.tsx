// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Stroke2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Stroke2Icon(props: Stroke2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 7 20'}
      height={'1em'}
      width={'1em'}
      style={{
        stroke: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={'evenodd'}
        d={'M1 18.816h4.581V1H1v17.816z'}
        stroke={'currentColor'}
        strokeWidth={'1.8'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default Stroke2Icon;
/* prettier-ignore-end */
