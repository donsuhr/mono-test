// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ssXJzNt8MiEu8LBoGu8nv3
// Component: QN6lWZtqTgh

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
import ConfettiBadge from '../../ConfettiBadge'; // plasmic-import: PItJAD3u3f/component
import AltButton from '../../AltButton'; // plasmic-import: 7pGfee8N7aE/component

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_scratch_pad.module.css'; // plasmic-import: ssXJzNt8MiEu8LBoGu8nv3/projectcss
import sty from './PlasmicLayoutSplashWithButton.module.css'; // plasmic-import: QN6lWZtqTgh/css

export type PlasmicLayoutSplashWithButton__VariantMembers = {};
export type PlasmicLayoutSplashWithButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicLayoutSplashWithButton__VariantsArgs;
export const PlasmicLayoutSplashWithButton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLayoutSplashWithButton__ArgsType = {
  title?: React.ReactNode;
  image?: React.ReactNode;
  body?: React.ReactNode;
  button?: React.ReactNode;
};
type ArgPropType = keyof PlasmicLayoutSplashWithButton__ArgsType;
export const PlasmicLayoutSplashWithButton__ArgProps = new Array<ArgPropType>(
  'title',
  'image',
  'body',
  'button',
);

export type PlasmicLayoutSplashWithButton__OverridesType = {
  root?: p.Flex<'div'>;
};

export interface DefaultLayoutSplashWithButtonProps {
  title?: React.ReactNode;
  image?: React.ReactNode;
  body?: React.ReactNode;
  button?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLayoutSplashWithButton__RenderFunc(props: {
  variants: PlasmicLayoutSplashWithButton__VariantsArgs;
  args: PlasmicLayoutSplashWithButton__ArgsType;
  overrides: PlasmicLayoutSplashWithButton__OverridesType;
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
    <p.Stack
      as={'div'}
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__heaUd)}>
        {p.renderPlasmicSlot({
          defaultContents: 'Your account is all set!',
          value: args.title,
          className: classNames(sty.slotTargetTitle),
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__oRbij)}>
        {p.renderPlasmicSlot({
          defaultContents: <ConfettiBadge />,

          value: args.image,
        })}
      </div>
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__v4SzK)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eKxEe,
                )}
              >
                {
                  'Next, just answer a few questions and we’ll set you up with the right tax service and price for your situation.'
                }
              </div>
            ),
            value: args.body,
            className: classNames(sty.slotTargetBody),
          })}
        </div>
      ) : null}
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__mr3Az)}>
          {true
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <AltButton
                    className={classNames(
                      '__wab_instance',
                      sty.altButton__zImKz,
                    )}
                  />
                ),

                value: args.button,
              })
            : null}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayoutSplashWithButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayoutSplashWithButton__VariantsArgs;
    args?: PlasmicLayoutSplashWithButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayoutSplashWithButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLayoutSplashWithButton__ArgsType,
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
          internalArgPropNames: PlasmicLayoutSplashWithButton__ArgProps,
          internalVariantPropNames: PlasmicLayoutSplashWithButton__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicLayoutSplashWithButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicLayoutSplashWithButton';
  } else {
    func.displayName = `PlasmicLayoutSplashWithButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLayoutSplashWithButton = Object.assign(
  // Top-level PlasmicLayoutSplashWithButton renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLayoutSplashWithButton
    internalVariantProps: PlasmicLayoutSplashWithButton__VariantProps,
    internalArgProps: PlasmicLayoutSplashWithButton__ArgProps,
  },
);

export default PlasmicLayoutSplashWithButton;
/* prettier-ignore-end */
