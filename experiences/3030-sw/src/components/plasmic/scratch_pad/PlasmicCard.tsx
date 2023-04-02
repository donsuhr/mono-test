// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ssXJzNt8MiEu8LBoGu8nv3
// Component: PLFAuqEt3vU

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
import sty from './PlasmicCard.module.css'; // plasmic-import: PLFAuqEt3vU/css

import DropTargetCopyIcon from './icons/PlasmicIcon__DropTargetCopy'; // plasmic-import: JZKZijEnNJP/icon
import ArrowIcon from './icons/PlasmicIcon__Arrow'; // plasmic-import: BNfgQajyIXQ/icon
import PlayIcon from './icons/PlasmicIcon__Play'; // plasmic-import: PbTipIbb_ke/icon
import ChevronDown3Icon from './icons/PlasmicIcon__ChevronDown3'; // plasmic-import: YXDASMC8aTJ/icon
import Group5468Icon from './icons/PlasmicIcon__Group5468'; // plasmic-import: mAJQsNnhgYw/icon
import Frame58Icon from './icons/PlasmicIcon__Frame58'; // plasmic-import: VIgq0y84h5/icon
import Line75Icon from './icons/PlasmicIcon__Line75'; // plasmic-import: o3BzfZY1tz/icon
import icnLiveTaxAdviceKoYdcQa5Zd from './images/icnLiveTaxAdvice.svg'; // plasmic-import: KOYdcQa5Zd/picture
import radioButtonQOwNQqn from './images/radioButton.svg'; // plasmic-import: Q_ow_nQQN-/picture
import documentEmFIhuEfQdl from './images/document.svg'; // plasmic-import: EmFIhuEfQdl/picture
import icnMaximzeYourDeductionsAndCredits22SbMl4AUkb from './images/icnMaximzeYourDeductionsAndCredits2.svg'; // plasmic-import: -2SBMl4aUKB/picture
import ellipse623ErF6CgJ4Ln from './images/ellipse623.svg'; // plasmic-import: erF6CG_j4LN/picture
import group2170L2397MXr6Jq from './images/group2170.svg'; // plasmic-import: L2397MXr6JQ/picture
import group345552V5TVtWJc from './images/group345.svg'; // plasmic-import: 552v5TVtWJc/picture

export type PlasmicCard__VariantMembers = {};
export type PlasmicCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicCard__VariantsArgs;
export const PlasmicCard__VariantProps = new Array<VariantPropType>();

export type PlasmicCard__ArgsType = {};
type ArgPropType = keyof PlasmicCard__ArgsType;
export const PlasmicCard__ArgProps = new Array<ArgPropType>();

export type PlasmicCard__OverridesType = {
  root?: p.Flex<'div'>;
  frame5483?: p.Flex<'div'>;
  frame5561?: p.Flex<'div'>;
  frame5479?: p.Flex<'div'>;
  number?: p.Flex<'div'>;
  _1?: p.Flex<'div'>;
  frame5447?: p.Flex<'div'>;
  frame5480?: p.Flex<'div'>;
  icnDocUpload?: p.Flex<'div'>;
  icnDocUpload2?: p.Flex<'div'>;
  group?: p.Flex<'div'>;
  number2?: p.Flex<'div'>;
  _2?: p.Flex<'div'>;
  _3?: p.Flex<'div'>;
  frame5448?: p.Flex<'div'>;
  getMatchedWithTheRightTaxExpertForYourUniqueSituation?: p.Flex<'div'>;
  frame5481?: p.Flex<'div'>;
  icnMaximzeYourDeductionsAndCredits?: p.Flex<'div'>;
  number3?: p.Flex<'div'>;
  _4?: p.Flex<'div'>;
  _5?: p.Flex<'div'>;
  frame5449?: p.Flex<'div'>;
  frame5482?: p.Flex<'div'>;
  icnMaximzeYourDeductionsAndCredits2?: p.Flex<'div'>;
  number4?: p.Flex<'div'>;
  _6?: p.Flex<'div'>;
  _7?: p.Flex<'div'>;
  frame5450?: p.Flex<'div'>;
  video?: p.Flex<'div'>;
  maskGroup?: p.Flex<'div'>;
  claudell521?: p.Flex<'div'>;
  cardCover?: p.Flex<'div'>;
  price?: p.Flex<'div'>;
  how?: p.Flex<'div'>;
  cta?: p.Flex<'div'>;
  frame229?: p.Flex<'div'>;
  serviceLevel?: p.Flex<'div'>;
  headerbg?: p.Flex<'div'>;
  frame5459?: p.Flex<'div'>;
  fullService?: p.Flex<'div'>;
  iconImage?: p.Flex<'div'>;
  icnFullService?: p.Flex<'div'>;
  headshots?: p.Flex<'div'>;
  neil2?: p.Flex<'div'>;
  neil1?: p.Flex<'div'>;
  ttExp19D3BlueNeil0117EditeWhiteBackground?: p.Flex<'div'>;
  rating?: p.Flex<'div'>;
};

export interface DefaultCardProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicCard__RenderFunc(props: {
  variants: PlasmicCard__VariantsArgs;
  args: PlasmicCard__ArgsType;
  overrides: PlasmicCard__OverridesType;
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
      <p.Stack
        as={'div'}
        data-plasmic-name={'frame5483'}
        data-plasmic-override={overrides.frame5483}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame5483)}
      >
        {false ? (
          <p.Stack
            as={'div'}
            data-plasmic-name={'frame5561'}
            data-plasmic-override={overrides.frame5561}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame5561)}
          >
            <p.Stack
              as={'div'}
              data-plasmic-name={'frame5479'}
              data-plasmic-override={overrides.frame5479}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame5479)}
            >
              {false ? (
                <img
                  alt={''}
                  className={classNames(
                    projectcss.all,
                    projectcss.img,
                    sty.img__kbqIz,
                  )}
                  src={icnLiveTaxAdviceKoYdcQa5Zd}
                />
              ) : null}
              {false ? (
                <div
                  data-plasmic-name={'number'}
                  data-plasmic-override={overrides.number}
                  className={classNames(projectcss.all, sty.number)}
                >
                  <img
                    alt={''}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__j2EfQ,
                    )}
                    src={radioButtonQOwNQqn}
                  />

                  <div
                    data-plasmic-name={'_1'}
                    data-plasmic-override={overrides._1}
                    className={classNames(projectcss.all, sty._1)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uiF2A,
                      )}
                    >
                      {'1'}
                    </div>
                  </div>
                </div>
              ) : null}
              <p.Stack
                as={'div'}
                data-plasmic-name={'frame5447'}
                data-plasmic-override={overrides.frame5447}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame5447)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fxgld,
                  )}
                >
                  {'1 UPLOAD YOUR DOCUMENTS'}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nV8,
                  )}
                >
                  {
                    'Securely share your documents so we can pair you with a tax expert.'
                  }
                </div>
              </p.Stack>
            </p.Stack>
            <p.Stack
              as={'div'}
              data-plasmic-name={'frame5480'}
              data-plasmic-override={overrides.frame5480}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame5480)}
            >
              {false ? (
                <div
                  data-plasmic-name={'icnDocUpload'}
                  data-plasmic-override={overrides.icnDocUpload}
                  className={classNames(projectcss.all, sty.icnDocUpload)}
                >
                  <div
                    data-plasmic-name={'icnDocUpload2'}
                    data-plasmic-override={overrides.icnDocUpload2}
                    className={classNames(projectcss.all, sty.icnDocUpload2)}
                  >
                    <div
                      data-plasmic-name={'group'}
                      data-plasmic-override={overrides.group}
                      className={classNames(projectcss.all, sty.group)}
                    >
                      <DropTargetCopyIcon
                        className={classNames(projectcss.all, sty.svg__jko2G)}
                        role={'img'}
                      />

                      <ArrowIcon
                        className={classNames(projectcss.all, sty.svg__cj4V)}
                        role={'img'}
                      />

                      <img
                        alt={''}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__olWbk,
                        )}
                        src={documentEmFIhuEfQdl}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {false ? (
                <div
                  data-plasmic-name={'number2'}
                  data-plasmic-override={overrides.number2}
                  className={classNames(projectcss.all, sty.number2)}
                >
                  <img
                    alt={''}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__dAknN,
                    )}
                    src={radioButtonQOwNQqn}
                  />

                  <div
                    data-plasmic-name={'_2'}
                    data-plasmic-override={overrides._2}
                    className={classNames(projectcss.all, sty._2)}
                  >
                    <div
                      data-plasmic-name={'_3'}
                      data-plasmic-override={overrides._3}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty._3,
                      )}
                    >
                      {'2'}
                    </div>
                  </div>
                </div>
              ) : null}
              <p.Stack
                as={'div'}
                data-plasmic-name={'frame5448'}
                data-plasmic-override={overrides.frame5448}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame5448)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fh5Lw,
                  )}
                >
                  {'2 MEET YOUR EXPERT'}
                </div>
                <div
                  data-plasmic-name={
                    'getMatchedWithTheRightTaxExpertForYourUniqueSituation'
                  }
                  data-plasmic-override={
                    overrides.getMatchedWithTheRightTaxExpertForYourUniqueSituation
                  }
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.getMatchedWithTheRightTaxExpertForYourUniqueSituation,
                  )}
                >
                  {
                    'Get matched with the right tax expert for your unique situation. '
                  }
                </div>
              </p.Stack>
            </p.Stack>
            <p.Stack
              as={'div'}
              data-plasmic-name={'frame5481'}
              data-plasmic-override={overrides.frame5481}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame5481)}
            >
              {false ? (
                <div
                  data-plasmic-name={'icnMaximzeYourDeductionsAndCredits'}
                  data-plasmic-override={
                    overrides.icnMaximzeYourDeductionsAndCredits
                  }
                  className={classNames(
                    projectcss.all,
                    sty.icnMaximzeYourDeductionsAndCredits,
                  )}
                >
                  <img
                    alt={''}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__xteNb,
                    )}
                    src={icnMaximzeYourDeductionsAndCredits22SbMl4AUkb}
                  />
                </div>
              ) : null}
              {false ? (
                <div
                  data-plasmic-name={'number3'}
                  data-plasmic-override={overrides.number3}
                  className={classNames(projectcss.all, sty.number3)}
                >
                  <img
                    alt={''}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__hPxr8,
                    )}
                    src={radioButtonQOwNQqn}
                  />

                  <div
                    data-plasmic-name={'_4'}
                    data-plasmic-override={overrides._4}
                    className={classNames(projectcss.all, sty._4)}
                  >
                    <div
                      data-plasmic-name={'_5'}
                      data-plasmic-override={overrides._5}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty._5,
                      )}
                    >
                      {'3'}
                    </div>
                  </div>
                </div>
              ) : null}
              <p.Stack
                as={'div'}
                data-plasmic-name={'frame5449'}
                data-plasmic-override={overrides.frame5449}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame5449)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dIlhe,
                  )}
                >
                  {'3 REVIEW YOUR RETURN'}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nb6O,
                  )}
                >
                  {
                    'Go over your return together and get answers to any questions.'
                  }
                </div>
              </p.Stack>
            </p.Stack>
            <p.Stack
              as={'div'}
              data-plasmic-name={'frame5482'}
              data-plasmic-override={overrides.frame5482}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame5482)}
            >
              {false ? (
                <div
                  data-plasmic-name={'icnMaximzeYourDeductionsAndCredits2'}
                  data-plasmic-override={
                    overrides.icnMaximzeYourDeductionsAndCredits2
                  }
                  className={classNames(
                    projectcss.all,
                    sty.icnMaximzeYourDeductionsAndCredits2,
                  )}
                >
                  <img
                    alt={''}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__hbKXp,
                    )}
                    src={icnMaximzeYourDeductionsAndCredits22SbMl4AUkb}
                  />
                </div>
              ) : null}
              {false ? (
                <div
                  data-plasmic-name={'number4'}
                  data-plasmic-override={overrides.number4}
                  className={classNames(projectcss.all, sty.number4)}
                >
                  <img
                    alt={''}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__rA6Ts,
                    )}
                    src={radioButtonQOwNQqn}
                  />

                  <div
                    data-plasmic-name={'_6'}
                    data-plasmic-override={overrides._6}
                    className={classNames(projectcss.all, sty._6)}
                  >
                    <div
                      data-plasmic-name={'_7'}
                      data-plasmic-override={overrides._7}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty._7,
                      )}
                    >
                      {'3'}
                    </div>
                  </div>
                </div>
              ) : null}
              <p.Stack
                as={'div'}
                data-plasmic-name={'frame5450'}
                data-plasmic-override={overrides.frame5450}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame5450)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oea9A,
                  )}
                >
                  {'4 Pay and file'}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dzjo8,
                  )}
                >
                  {
                    'Once you pay and give your expert the thumbs up, they’ll file your return!'
                  }
                </div>
              </p.Stack>
            </p.Stack>
          </p.Stack>
        ) : null}
        {false ? (
          <div
            data-plasmic-name={'video'}
            data-plasmic-override={overrides.video}
            className={classNames(projectcss.all, sty.video)}
          >
            <div
              data-plasmic-name={'maskGroup'}
              data-plasmic-override={overrides.maskGroup}
              className={classNames(projectcss.all, sty.maskGroup)}
            >
              <div
                data-plasmic-name={'claudell521'}
                data-plasmic-override={overrides.claudell521}
                className={classNames(projectcss.all, sty.claudell521)}
              />
            </div>
            <PlayIcon
              className={classNames(projectcss.all, sty.svg__yEwvX)}
              role={'img'}
            />
          </div>
        ) : null}
      </p.Stack>
      <div
        data-plasmic-name={'cardCover'}
        data-plasmic-override={overrides.cardCover}
        className={classNames(projectcss.all, sty.cardCover)}
      />

      <div
        data-plasmic-name={'price'}
        data-plasmic-override={overrides.price}
        className={classNames(projectcss.all, sty.price)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mzrda,
          )}
        >
          {'See what’s included'}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__btOl,
          )}
        >
          {'$260'}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___0IziL,
          )}
        >
          {'State additional'}
        </div>
      </div>
      <p.Stack
        as={'div'}
        data-plasmic-name={'how'}
        data-plasmic-override={overrides.how}
        hasGap={true}
        className={classNames(projectcss.all, sty.how)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mcu8,
          )}
        >
          {'See how it works'}
        </div>
        <ChevronDown3Icon
          className={classNames(projectcss.all, sty.svg__sW8Pu)}
          role={'img'}
        />
      </p.Stack>
      <p.Stack
        as={'div'}
        data-plasmic-name={'cta'}
        data-plasmic-override={overrides.cta}
        hasGap={true}
        className={classNames(projectcss.all, sty.cta)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__jdZTs,
          )}
        >
          {'Start for free\nPay only when you file*'}
        </div>
      </p.Stack>
      <p.Stack
        as={'div'}
        data-plasmic-name={'frame229'}
        data-plasmic-override={overrides.frame229}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame229)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__pTu8,
          )}
        >
          {'I want it all done for me'}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___0OHg6,
          )}
        >
          {
            'Hand your taxes off to a tax expert and let them prepare, sign, and file for you, from start to finish.'
          }
        </div>
      </p.Stack>
      <div
        data-plasmic-name={'serviceLevel'}
        data-plasmic-override={overrides.serviceLevel}
        className={classNames(projectcss.all, sty.serviceLevel)}
      >
        <div
          data-plasmic-name={'headerbg'}
          data-plasmic-override={overrides.headerbg}
          className={classNames(projectcss.all, sty.headerbg)}
        />

        <p.Stack
          as={'div'}
          data-plasmic-name={'frame5459'}
          data-plasmic-override={overrides.frame5459}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame5459)}
        >
          <Group5468Icon
            className={classNames(projectcss.all, sty.svg__brF)}
            role={'img'}
          />

          <div
            data-plasmic-name={'fullService'}
            data-plasmic-override={overrides.fullService}
            className={classNames(projectcss.all, sty.fullService)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lkroJ,
              )}
            >
              {'Full Service'}
            </div>
          </div>
        </p.Stack>
      </div>
      <div
        data-plasmic-name={'iconImage'}
        data-plasmic-override={overrides.iconImage}
        className={classNames(projectcss.all, sty.iconImage)}
      >
        <img
          alt={''}
          className={classNames(projectcss.all, projectcss.img, sty.img__qjdXo)}
          src={ellipse623ErF6CgJ4Ln}
        />

        <div
          data-plasmic-name={'icnFullService'}
          data-plasmic-override={overrides.icnFullService}
          className={classNames(projectcss.all, sty.icnFullService)}
        >
          <img
            alt={''}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__iEaSn,
            )}
            src={group2170L2397MXr6Jq}
          />

          <img
            alt={''}
            className={classNames(
              projectcss.all,
              projectcss.img,
              sty.img__fWYo3,
            )}
            src={group345552V5TVtWJc}
          />
        </div>
        <div
          data-plasmic-name={'headshots'}
          data-plasmic-override={overrides.headshots}
          className={classNames(projectcss.all, sty.headshots)}
        >
          <div
            data-plasmic-name={'neil2'}
            data-plasmic-override={overrides.neil2}
            className={classNames(projectcss.all, sty.neil2)}
          />

          <div
            data-plasmic-name={'neil1'}
            data-plasmic-override={overrides.neil1}
            className={classNames(projectcss.all, sty.neil1)}
          >
            <div
              data-plasmic-name={'ttExp19D3BlueNeil0117EditeWhiteBackground'}
              data-plasmic-override={
                overrides.ttExp19D3BlueNeil0117EditeWhiteBackground
              }
              className={classNames(
                projectcss.all,
                sty.ttExp19D3BlueNeil0117EditeWhiteBackground,
              )}
            />
          </div>
        </div>
      </div>
      <p.Stack
        as={'div'}
        data-plasmic-name={'rating'}
        data-plasmic-override={overrides.rating}
        hasGap={true}
        className={classNames(projectcss.all, sty.rating)}
      >
        <p.Stack
          as={Frame58Icon}
          hasGap={true}
          className={classNames(projectcss.all, sty.svg___071TX)}
          role={'img'}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__whFma,
          )}
        >
          {'(4.8/5 | 10,000 reviews)'}
        </div>
      </p.Stack>
      <Line75Icon
        className={classNames(projectcss.all, sty.svg__b9Yy9)}
        role={'img'}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    'root',
    'frame5483',
    'frame5561',
    'frame5479',
    'number',
    '_1',
    'frame5447',
    'frame5480',
    'icnDocUpload',
    'icnDocUpload2',
    'group',
    'number2',
    '_2',
    '_3',
    'frame5448',
    'getMatchedWithTheRightTaxExpertForYourUniqueSituation',
    'frame5481',
    'icnMaximzeYourDeductionsAndCredits',
    'number3',
    '_4',
    '_5',
    'frame5449',
    'frame5482',
    'icnMaximzeYourDeductionsAndCredits2',
    'number4',
    '_6',
    '_7',
    'frame5450',
    'video',
    'maskGroup',
    'claudell521',
    'cardCover',
    'price',
    'how',
    'cta',
    'frame229',
    'serviceLevel',
    'headerbg',
    'frame5459',
    'fullService',
    'iconImage',
    'icnFullService',
    'headshots',
    'neil2',
    'neil1',
    'ttExp19D3BlueNeil0117EditeWhiteBackground',
    'rating',
  ],
  frame5483: [
    'frame5483',
    'frame5561',
    'frame5479',
    'number',
    '_1',
    'frame5447',
    'frame5480',
    'icnDocUpload',
    'icnDocUpload2',
    'group',
    'number2',
    '_2',
    '_3',
    'frame5448',
    'getMatchedWithTheRightTaxExpertForYourUniqueSituation',
    'frame5481',
    'icnMaximzeYourDeductionsAndCredits',
    'number3',
    '_4',
    '_5',
    'frame5449',
    'frame5482',
    'icnMaximzeYourDeductionsAndCredits2',
    'number4',
    '_6',
    '_7',
    'frame5450',
    'video',
    'maskGroup',
    'claudell521',
  ],
  frame5561: [
    'frame5561',
    'frame5479',
    'number',
    '_1',
    'frame5447',
    'frame5480',
    'icnDocUpload',
    'icnDocUpload2',
    'group',
    'number2',
    '_2',
    '_3',
    'frame5448',
    'getMatchedWithTheRightTaxExpertForYourUniqueSituation',
    'frame5481',
    'icnMaximzeYourDeductionsAndCredits',
    'number3',
    '_4',
    '_5',
    'frame5449',
    'frame5482',
    'icnMaximzeYourDeductionsAndCredits2',
    'number4',
    '_6',
    '_7',
    'frame5450',
  ],
  frame5479: ['frame5479', 'number', '_1', 'frame5447'],
  number: ['number', '_1'],
  _1: ['_1'],
  frame5447: ['frame5447'],
  frame5480: [
    'frame5480',
    'icnDocUpload',
    'icnDocUpload2',
    'group',
    'number2',
    '_2',
    '_3',
    'frame5448',
    'getMatchedWithTheRightTaxExpertForYourUniqueSituation',
  ],
  icnDocUpload: ['icnDocUpload', 'icnDocUpload2', 'group'],
  icnDocUpload2: ['icnDocUpload2', 'group'],
  group: ['group'],
  number2: ['number2', '_2', '_3'],
  _2: ['_2', '_3'],
  _3: ['_3'],
  frame5448: [
    'frame5448',
    'getMatchedWithTheRightTaxExpertForYourUniqueSituation',
  ],
  getMatchedWithTheRightTaxExpertForYourUniqueSituation: [
    'getMatchedWithTheRightTaxExpertForYourUniqueSituation',
  ],
  frame5481: [
    'frame5481',
    'icnMaximzeYourDeductionsAndCredits',
    'number3',
    '_4',
    '_5',
    'frame5449',
  ],
  icnMaximzeYourDeductionsAndCredits: ['icnMaximzeYourDeductionsAndCredits'],
  number3: ['number3', '_4', '_5'],
  _4: ['_4', '_5'],
  _5: ['_5'],
  frame5449: ['frame5449'],
  frame5482: [
    'frame5482',
    'icnMaximzeYourDeductionsAndCredits2',
    'number4',
    '_6',
    '_7',
    'frame5450',
  ],
  icnMaximzeYourDeductionsAndCredits2: ['icnMaximzeYourDeductionsAndCredits2'],
  number4: ['number4', '_6', '_7'],
  _6: ['_6', '_7'],
  _7: ['_7'],
  frame5450: ['frame5450'],
  video: ['video', 'maskGroup', 'claudell521'],
  maskGroup: ['maskGroup', 'claudell521'],
  claudell521: ['claudell521'],
  cardCover: ['cardCover'],
  price: ['price'],
  how: ['how'],
  cta: ['cta'],
  frame229: ['frame229'],
  serviceLevel: ['serviceLevel', 'headerbg', 'frame5459', 'fullService'],
  headerbg: ['headerbg'],
  frame5459: ['frame5459', 'fullService'],
  fullService: ['fullService'],
  iconImage: [
    'iconImage',
    'icnFullService',
    'headshots',
    'neil2',
    'neil1',
    'ttExp19D3BlueNeil0117EditeWhiteBackground',
  ],
  icnFullService: ['icnFullService'],
  headshots: [
    'headshots',
    'neil2',
    'neil1',
    'ttExp19D3BlueNeil0117EditeWhiteBackground',
  ],
  neil2: ['neil2'],
  neil1: ['neil1', 'ttExp19D3BlueNeil0117EditeWhiteBackground'],
  ttExp19D3BlueNeil0117EditeWhiteBackground: [
    'ttExp19D3BlueNeil0117EditeWhiteBackground',
  ],
  rating: ['rating'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  frame5483: 'div';
  frame5561: 'div';
  frame5479: 'div';
  number: 'div';
  _1: 'div';
  frame5447: 'div';
  frame5480: 'div';
  icnDocUpload: 'div';
  icnDocUpload2: 'div';
  group: 'div';
  number2: 'div';
  _2: 'div';
  _3: 'div';
  frame5448: 'div';
  getMatchedWithTheRightTaxExpertForYourUniqueSituation: 'div';
  frame5481: 'div';
  icnMaximzeYourDeductionsAndCredits: 'div';
  number3: 'div';
  _4: 'div';
  _5: 'div';
  frame5449: 'div';
  frame5482: 'div';
  icnMaximzeYourDeductionsAndCredits2: 'div';
  number4: 'div';
  _6: 'div';
  _7: 'div';
  frame5450: 'div';
  video: 'div';
  maskGroup: 'div';
  claudell521: 'div';
  cardCover: 'div';
  price: 'div';
  how: 'div';
  cta: 'div';
  frame229: 'div';
  serviceLevel: 'div';
  headerbg: 'div';
  frame5459: 'div';
  fullService: 'div';
  iconImage: 'div';
  icnFullService: 'div';
  headshots: 'div';
  neil2: 'div';
  neil1: 'div';
  ttExp19D3BlueNeil0117EditeWhiteBackground: 'div';
  rating: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCard__VariantsArgs;
    args?: PlasmicCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCard__ArgsType,
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
          internalArgPropNames: PlasmicCard__ArgProps,
          internalVariantPropNames: PlasmicCard__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicCard';
  } else {
    func.displayName = `PlasmicCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCard = Object.assign(
  // Top-level PlasmicCard renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    frame5483: makeNodeComponent('frame5483'),
    frame5561: makeNodeComponent('frame5561'),
    frame5479: makeNodeComponent('frame5479'),
    number: makeNodeComponent('number'),
    _1: makeNodeComponent('_1'),
    frame5447: makeNodeComponent('frame5447'),
    frame5480: makeNodeComponent('frame5480'),
    icnDocUpload: makeNodeComponent('icnDocUpload'),
    icnDocUpload2: makeNodeComponent('icnDocUpload2'),
    group: makeNodeComponent('group'),
    number2: makeNodeComponent('number2'),
    _2: makeNodeComponent('_2'),
    _3: makeNodeComponent('_3'),
    frame5448: makeNodeComponent('frame5448'),
    getMatchedWithTheRightTaxExpertForYourUniqueSituation: makeNodeComponent(
      'getMatchedWithTheRightTaxExpertForYourUniqueSituation',
    ),
    frame5481: makeNodeComponent('frame5481'),
    icnMaximzeYourDeductionsAndCredits: makeNodeComponent(
      'icnMaximzeYourDeductionsAndCredits',
    ),
    number3: makeNodeComponent('number3'),
    _4: makeNodeComponent('_4'),
    _5: makeNodeComponent('_5'),
    frame5449: makeNodeComponent('frame5449'),
    frame5482: makeNodeComponent('frame5482'),
    icnMaximzeYourDeductionsAndCredits2: makeNodeComponent(
      'icnMaximzeYourDeductionsAndCredits2',
    ),
    number4: makeNodeComponent('number4'),
    _6: makeNodeComponent('_6'),
    _7: makeNodeComponent('_7'),
    frame5450: makeNodeComponent('frame5450'),
    video: makeNodeComponent('video'),
    maskGroup: makeNodeComponent('maskGroup'),
    claudell521: makeNodeComponent('claudell521'),
    cardCover: makeNodeComponent('cardCover'),
    price: makeNodeComponent('price'),
    how: makeNodeComponent('how'),
    cta: makeNodeComponent('cta'),
    frame229: makeNodeComponent('frame229'),
    serviceLevel: makeNodeComponent('serviceLevel'),
    headerbg: makeNodeComponent('headerbg'),
    frame5459: makeNodeComponent('frame5459'),
    fullService: makeNodeComponent('fullService'),
    iconImage: makeNodeComponent('iconImage'),
    icnFullService: makeNodeComponent('icnFullService'),
    headshots: makeNodeComponent('headshots'),
    neil2: makeNodeComponent('neil2'),
    neil1: makeNodeComponent('neil1'),
    ttExp19D3BlueNeil0117EditeWhiteBackground: makeNodeComponent(
      'ttExp19D3BlueNeil0117EditeWhiteBackground',
    ),
    rating: makeNodeComponent('rating'),

    // Metadata about props expected for PlasmicCard
    internalVariantProps: PlasmicCard__VariantProps,
    internalArgProps: PlasmicCard__ArgProps,
  },
);

export default PlasmicCard;
/* prettier-ignore-end */
