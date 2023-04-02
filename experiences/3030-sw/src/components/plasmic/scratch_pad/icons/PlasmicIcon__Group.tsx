// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type GroupIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 15 11'}
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
          'M11.927 1.81s.278 3.3-.202 4.735C11.245 7.98 9.527 9.42 9.527 9.42a6.715 6.715 0 012.278-.181c.708.167 1.39.431 2.026.784 0 0 .838-2.72.624-4.864-.309-3.318-2.528-3.35-2.528-3.35zM4.193.017S2.529 3.1 2.843 4.93A6.4 6.4 0 005.51 9.313a5.899 5.899 0 00-3.024.027c-.724.276-1.34.78-1.754 1.435 0 0-1.067-5.078-.624-7.819C.294 1.89 1.03.54 1.708.226c.677-.316 2.485-.21 2.485-.21z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
