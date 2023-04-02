// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group3IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 80 35'}
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
          'M0 34.648V0h8.602v27.422h13.542v7.226H0zm29.281 0V0h8.602v34.648H29.28zm36.602 0h-8.419L44.104 0h9.517l8.053 24.643h.183L69.909 0h9.334l-13.36 34.648z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
