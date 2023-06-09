// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ssXJzNt8MiEu8LBoGu8nv3
// Component: wNONG5kdlb

import * as React from 'react';

import * as p from '@plasmicapp/react-web';
import * as ph from '@plasmicapp/react-web/lib/host';

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from '@plasmicapp/react-web';

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_scratch_pad.module.css'; // plasmic-import: ssXJzNt8MiEu8LBoGu8nv3/projectcss
import sty from './PlasmicThinger.module.css'; // plasmic-import: wNONG5kdlb/css

export type PlasmicThinger__VariantMembers = {
  green: 'green';
};
export type PlasmicThinger__VariantsArgs = {
  green?: SingleBooleanChoiceArg<'green'>;
};
type VariantPropType = keyof PlasmicThinger__VariantsArgs;
export const PlasmicThinger__VariantProps = new Array<VariantPropType>('green');

export type PlasmicThinger__ArgsType = {
  doGreen?: boolean;
  title?: string;
};
type ArgPropType = keyof PlasmicThinger__ArgsType;
export const PlasmicThinger__ArgProps = new Array<ArgPropType>(
  'doGreen',
  'title',
);

export type PlasmicThinger__OverridesType = {
  thinger?: p.Flex<'div'>;
  text?: p.Flex<'div'>;
  value?: p.Flex<'div'>;
};

export interface DefaultThingerProps {
  doGreen?: boolean;
  title?: string;
  green?: SingleBooleanChoiceArg<'green'>;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicThinger__RenderFunc(props: {
  variants: PlasmicThinger__VariantsArgs;
  args: PlasmicThinger__ArgsType;
  overrides: PlasmicThinger__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          doGreen: false,
          title: 'default title' as const,
        },
        props.args,
      ),
    [props.args],
  );

  const $props = {
    ...args,
    ...variants,
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: 'green',
        type: 'private',
        variableType: 'variant',
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.doGreen ?? $props.green,
      },
    ],
    [$props, $ctx],
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <div
      data-plasmic-name={'thinger'}
      data-plasmic-override={overrides.thinger}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.thinger,
        { [sty.thingergreen]: hasVariant($state, 'green', 'green') },
      )}
    >
      <div
        data-plasmic-name={'text'}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textgreen]: hasVariant($state, 'green', 'green'),
        })}
      >
        {(() => {
          try {
            return $props.title;
          } catch (e) {
            if (e instanceof TypeError) {
              return 'thinger title';
            }
            throw e;
          }
        })()}
      </div>
      <div
        data-plasmic-name={'value'}
        data-plasmic-override={overrides.value}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.value)}
      >
        {(() => {
          try {
            return $props.doGreen;
          } catch (e) {
            if (e instanceof TypeError) {
              return 'fallback value';
            }
            throw e;
          }
        })()}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  thinger: ['thinger', 'text', 'value'],
  text: ['text'],
  value: ['value'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  thinger: 'div';
  text: 'div';
  value: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicThinger__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicThinger__VariantsArgs;
    args?: PlasmicThinger__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicThinger__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicThinger__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>,
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicThinger__ArgProps,
          internalVariantPropNames: PlasmicThinger__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicThinger__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'thinger') {
    func.displayName = 'PlasmicThinger';
  } else {
    func.displayName = `PlasmicThinger.${nodeName}`;
  }
  return func;
}

export const PlasmicThinger = Object.assign(
  // Top-level PlasmicThinger renders the root element
  makeNodeComponent('thinger'),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent('text'),
    value: makeNodeComponent('value'),

    // Metadata about props expected for PlasmicThinger
    internalVariantProps: PlasmicThinger__VariantProps,
    internalArgProps: PlasmicThinger__ArgProps,
  },
);

export default PlasmicThinger;
/* prettier-ignore-end */
