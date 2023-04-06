// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: big3maYwhwor2fngFth6uN
// Component: SovhrYo4M4

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
import sty from './PlasmicSecondComponent.module.css'; // plasmic-import: SovhrYo4M4/css

export type PlasmicSecondComponent__VariantMembers = {};
export type PlasmicSecondComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicSecondComponent__VariantsArgs;
export const PlasmicSecondComponent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSecondComponent__ArgsType = {
  slot1?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSecondComponent__ArgsType;
export const PlasmicSecondComponent__ArgProps = new Array<ArgPropType>(
  'slot1',
  'slot2',
);

export type PlasmicSecondComponent__OverridesType = {
  root?: p.Flex<'div'>;
  titleText?: p.Flex<'div'>;
  freeBox?: p.Flex<'div'>;
};

export interface DefaultSecondComponentProps {
  slot1?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSecondComponent__RenderFunc(props: {
  variants: PlasmicSecondComponent__VariantsArgs;
  args: PlasmicSecondComponent__ArgsType;
  overrides: PlasmicSecondComponent__OverridesType;
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
        data-plasmic-name={'titleText'}
        data-plasmic-override={overrides.titleText}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.titleText,
        )}
      >
        {"This is component 'SecondComponent' from 'Blank project'"}
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
            sty.text__n2Rmn,
          )}
        >
          {'First text slot:'}
        </div>
        {p.renderPlasmicSlot({
          defaultContents: 'default slot1',
          value: args.slot1,
          className: classNames(sty.slotTargetSlot1),
        })}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__c027Z,
          )}
        >
          {'Second text slot:'}
        </div>
        {p.renderPlasmicSlot({
          defaultContents: 'default slot2',
          value: args.slot2,
          className: classNames(sty.slotTargetSlot2),
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'titleText', 'freeBox'],
  titleText: ['titleText'],
  freeBox: ['freeBox'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  titleText: 'div';
  freeBox: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSecondComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSecondComponent__VariantsArgs;
    args?: PlasmicSecondComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSecondComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSecondComponent__ArgsType,
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
          internalArgPropNames: PlasmicSecondComponent__ArgProps,
          internalVariantPropNames: PlasmicSecondComponent__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicSecondComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicSecondComponent';
  } else {
    func.displayName = `PlasmicSecondComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicSecondComponent = Object.assign(
  // Top-level PlasmicSecondComponent renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    titleText: makeNodeComponent('titleText'),
    freeBox: makeNodeComponent('freeBox'),

    // Metadata about props expected for PlasmicSecondComponent
    internalVariantProps: PlasmicSecondComponent__VariantProps,
    internalArgProps: PlasmicSecondComponent__ArgProps,
  },
);

export default PlasmicSecondComponent;
/* prettier-ignore-end */
