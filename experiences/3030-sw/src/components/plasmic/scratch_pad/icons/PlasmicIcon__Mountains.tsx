// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type MountainsIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function MountainsIcon(props: MountainsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 133 25'}
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
          'M0 24.254h132.421s-4.202-20.972-20.533-22.673c-8.704-.904-16.272 11.77-21.824 11.925C84.512 13.66 78.096.666 66.214.024 54.33-.618 49.087 11.874 42.036 12.778c-7.05.904-3.829-9.325-15.744-8.923C14.38 4.255 0 24.255 0 24.255z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default MountainsIcon;
/* prettier-ignore-end */
