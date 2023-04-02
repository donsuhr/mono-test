// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type StarIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function StarIcon(props: StarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={'0 0 99.6 94.5'}
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
          'M98.7 36.2c-.1-.4-.5-.7-1-.7l-36 .3L50.8 1.5c-.3-.9-1.7-.9-2 0L37.9 35.8l-36-.3c-.4 0-.8.3-1 .7-.1.4 0 .9.4 1.2l29.3 20.9-11.4 34c-.1.4 0 .9.4 1.2.2.1.4.2.6.2.2 0 .4-.1.6-.2l29-21.3 29 21.3c.4.3.9.3 1.2 0 .4-.3.5-.7.4-1.2L69 58.2l29.3-20.9c.4-.2.5-.7.4-1.1z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default StarIcon;
/* prettier-ignore-end */
