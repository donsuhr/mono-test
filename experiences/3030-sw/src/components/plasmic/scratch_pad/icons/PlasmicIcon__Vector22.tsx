// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector22IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector22Icon(props: Vector22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 172 93'}
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
        d={
          'M0 0v92.456h56.916V78.931H13.91V13.526h144.029V78.93H75.4L61.491 92.456h110.356V0H0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
