// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group5IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 36 24'}
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
          'M0 .6A.6.6 0 01.6 0h34.8a.6.6 0 01.6.6v17.362a.6.6 0 01-.175.425l-5.438 5.437a.6.6 0 01-.424.176H.6a.6.6 0 01-.6-.6V.6zm1.2.6v21.6h28.514l5.087-5.086V1.2H1.2z'
        }
        fill={'currentColor'}
      ></path>

      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M28.734 17.267a.6.6 0 01.6-.6h6a.6.6 0 110 1.2h-5.4v5.4a.6.6 0 01-1.2 0v-6z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
