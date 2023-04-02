// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type CreateIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function CreateIcon(props: CreateIconProps) {
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
          'M17.983 11.027l-5-.007.007-5a1 1 0 00-2 0l-.007 5-5-.008a1 1 0 000 2l5 .008-.008 5a1 1 0 002 0l.008-5 5 .007a1 1 0 000-2z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default CreateIcon;
/* prettier-ignore-end */
