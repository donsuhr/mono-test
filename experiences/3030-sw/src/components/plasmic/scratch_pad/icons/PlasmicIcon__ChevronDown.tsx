// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type ChevronDownIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function ChevronDownIcon(props: ChevronDownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 24'}
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
          'M12.014 16.018a.999.999 0 01-.708-.294L5.314 9.715A1.001 1.001 0 016.73 8.3l5.286 5.3 5.3-5.285a1 1 0 011.413 1.416l-6.009 5.995a1 1 0 01-.706.292z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default ChevronDownIcon;
/* prettier-ignore-end */
