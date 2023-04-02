// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type _1099IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function _1099Icon(props: _1099IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 20 6'}
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
          'M3.096 5.816V.152H1.864L0 1.52l.696.952 1.056-.816v4.16h1.344zm4.152.152c1.6 0 2.208-1.392 2.208-3C9.456 1.368 8.848 0 7.248 0 5.64 0 5.024 1.368 5.024 2.968c0 1.608.616 3 2.224 3zm0-1.152c-.712 0-.848-1.12-.848-1.848 0-.712.136-1.832.848-1.832.704 0 .832 1.12.832 1.832 0 .728-.128 1.848-.832 1.848zm5.392 1l1.368-2.04c.376-.56.632-1.08.632-1.752C14.64.784 13.648 0 12.408 0c-1.224 0-2.232.768-2.232 2.056 0 1.104.872 1.848 1.864 1.848.128 0 .288-.024.4-.064l-.016.024-1.408 1.952h1.624zm-.24-2.912c-.528 0-.88-.376-.88-.888 0-.536.36-.912.896-.912s.88.416.88.904c0 .528-.368.896-.896.896zm5.408 2.912l1.368-2.04c.376-.56.632-1.08.632-1.752C19.808.784 18.816 0 17.576 0c-1.224 0-2.232.768-2.232 2.056 0 1.104.872 1.848 1.864 1.848.128 0 .288-.024.4-.064l-.016.024-1.408 1.952h1.624zm-.24-2.912c-.528 0-.88-.376-.88-.888 0-.536.36-.912.896-.912s.88.416.88.904c0 .528-.368.896-.896.896z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default _1099Icon;
/* prettier-ignore-end */
