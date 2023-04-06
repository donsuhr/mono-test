// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: big3maYwhwor2fngFth6uN
// Component: GwKNNGo9w_

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

import projectcss from './plasmic_blank_project.module.css'; // plasmic-import: big3maYwhwor2fngFth6uN/projectcss
import sty from './PlasmicFirstComponent.module.css'; // plasmic-import: GwKNNGo9w_/css

export type PlasmicFirstComponent__VariantMembers = {};
export type PlasmicFirstComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicFirstComponent__VariantsArgs;
export const PlasmicFirstComponent__VariantProps = new Array<VariantPropType>();

export type PlasmicFirstComponent__ArgsType = {};
type ArgPropType = keyof PlasmicFirstComponent__ArgsType;
export const PlasmicFirstComponent__ArgProps = new Array<ArgPropType>();

export type PlasmicFirstComponent__OverridesType = {
  root?: p.Flex<'div'>;
  h1?: p.Flex<'h1'>;
  text?: p.Flex<'div'>;
};

export interface DefaultFirstComponentProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFirstComponent__RenderFunc(props: {
  variants: PlasmicFirstComponent__VariantsArgs;
  args: PlasmicFirstComponent__ArgsType;
  overrides: PlasmicFirstComponent__OverridesType;
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
      <h1
        data-plasmic-name={'h1'}
        data-plasmic-override={overrides.h1}
        className={classNames(
          projectcss.all,
          projectcss.h1,
          projectcss.__wab_text,
          sty.h1,
        )}
      >
        {'Hello world H1'}
      </h1>
      <div
        data-plasmic-name={'text'}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {'Now is the time for all...'}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'h1', 'text'],
  h1: ['h1'],
  text: ['text'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  h1: 'h1';
  text: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFirstComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFirstComponent__VariantsArgs;
    args?: PlasmicFirstComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFirstComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFirstComponent__ArgsType,
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
          internalArgPropNames: PlasmicFirstComponent__ArgProps,
          internalVariantPropNames: PlasmicFirstComponent__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicFirstComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicFirstComponent';
  } else {
    func.displayName = `PlasmicFirstComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicFirstComponent = Object.assign(
  // Top-level PlasmicFirstComponent renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent('h1'),
    text: makeNodeComponent('text'),

    // Metadata about props expected for PlasmicFirstComponent
    internalVariantProps: PlasmicFirstComponent__VariantProps,
    internalArgProps: PlasmicFirstComponent__ArgProps,
  },
);

export default PlasmicFirstComponent;
/* prettier-ignore-end */
