// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group5467IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group5467Icon(props: Group5467IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 39 20'}
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
          'M0 0v20h12.793v-2.951H3.112V2.95h32.383v14.098H16.94L13.83 20h24.776V0H0z'
        }
        fill={'currentColor'}
      ></path>

      <path
        d={
          'M26.455 13.586V6.105h5.305v1.532h-3.466v1.405h3.277v1.448h-3.277v1.553h3.667v1.543h-5.506zm-19.274 0V6.105h1.917v5.906h3.054v1.575H7.181zm6.609 0h1.917V6.105H13.79v7.48zm8.203 0h-1.906L17.1 6.105h2.14l1.828 5.304h.045l1.817-5.304h2.106l-3.043 7.48z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Group5467Icon;
/* prettier-ignore-end */
