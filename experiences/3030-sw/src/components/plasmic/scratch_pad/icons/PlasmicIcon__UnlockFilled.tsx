// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type UnlockFilledIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function UnlockFilledIcon(props: UnlockFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 16 20'}
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

      <g clipPath={'url(#kAM3ZGIxwHa)'}>
        <path
          fillRule={'evenodd'}
          clipRule={'evenodd'}
          d={
            'M7.938 0c2.773 0 4.854 2.167 4.957 5.22l.003.237v1.488h.993c1.096 0 1.984.889 1.984 1.985v8.93a1.984 1.984 0 01-1.984 1.984H1.984A1.984 1.984 0 010 17.859V8.93c0-1.095.888-1.984 1.984-1.984h8.93V5.457c0-2.113-1.262-3.473-2.976-3.473-1.277 0-2.325.765-2.76 2.056a.992.992 0 01-1.88-.633C4.002 1.314 5.803 0 7.938 0zm0 10.914a1.984 1.984 0 00-.993 3.703v.464l.007.093c.057.395.477.701.986.701.547 0 .992-.355.992-.794v-.464a1.983 1.983 0 00-.992-3.703z'
          }
          fill={'currentColor'}
        ></path>
      </g>

      <defs>
        <clipPath id={'kAM3ZGIxwHa'}>
          <path fill={'currentColor'} d={'M0 0h15.875v19.844H0z'}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default UnlockFilledIcon;
/* prettier-ignore-end */
