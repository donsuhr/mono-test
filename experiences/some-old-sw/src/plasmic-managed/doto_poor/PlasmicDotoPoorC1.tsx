// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4te94uv1ZiZhiFJqxxGPia
// Component: uReK7o7kww

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

import projectcss from './plasmic_doto_poor.module.css'; // plasmic-import: 4te94uv1ZiZhiFJqxxGPia/projectcss
import sty from './PlasmicDotoPoorC1.module.css'; // plasmic-import: uReK7o7kww/css

export type PlasmicDotoPoorC1__VariantMembers = {};
export type PlasmicDotoPoorC1__VariantsArgs = {};
type VariantPropType = keyof PlasmicDotoPoorC1__VariantsArgs;
export const PlasmicDotoPoorC1__VariantProps = new Array<VariantPropType>();

export type PlasmicDotoPoorC1__ArgsType = {
  slot1?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDotoPoorC1__ArgsType;
export const PlasmicDotoPoorC1__ArgProps = new Array<ArgPropType>(
  'slot1',
  'slot2',
  'slot3',
);

export type PlasmicDotoPoorC1__OverridesType = {
  root?: p.Flex<'div'>;
  freeBox?: p.Flex<'div'>;
};

export interface DefaultDotoPoorC1Props {
  slot1?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicDotoPoorC1__RenderFunc(props: {
  variants: PlasmicDotoPoorC1__VariantsArgs;
  args: PlasmicDotoPoorC1__ArgsType;
  overrides: PlasmicDotoPoorC1__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__po82V,
        )}
      >
        {'DotoPoorC1 - project version 0.0.1'}
      </div>
      <div
        data-plasmic-name={'freeBox'}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___7Ulb8,
          )}
        >
          {'slot 1'}
        </div>
        {p.renderPlasmicSlot({
          defaultContents: 'slot 1',
          value: args.slot1,
        })}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__dVbv4,
          )}
        >
          {'slot 2'}
        </div>
        {p.renderPlasmicSlot({
          defaultContents: 'slot 2',
          value: args.slot2,
        })}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sv68Z,
          )}
        >
          {'slot 3'}
        </div>
        {p.renderPlasmicSlot({
          defaultContents: 'slot 3',
          value: args.slot3,
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'freeBox'],
  freeBox: ['freeBox'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  freeBox: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDotoPoorC1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDotoPoorC1__VariantsArgs;
    args?: PlasmicDotoPoorC1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDotoPoorC1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDotoPoorC1__ArgsType,
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
          internalArgPropNames: PlasmicDotoPoorC1__ArgProps,
          internalVariantPropNames: PlasmicDotoPoorC1__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicDotoPoorC1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicDotoPoorC1';
  } else {
    func.displayName = `PlasmicDotoPoorC1.${nodeName}`;
  }
  return func;
}

export const PlasmicDotoPoorC1 = Object.assign(
  // Top-level PlasmicDotoPoorC1 renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent('freeBox'),

    // Metadata about props expected for PlasmicDotoPoorC1
    internalVariantProps: PlasmicDotoPoorC1__VariantProps,
    internalArgProps: PlasmicDotoPoorC1__ArgProps,
  },
);

export default PlasmicDotoPoorC1;
/* prettier-ignore-end */
