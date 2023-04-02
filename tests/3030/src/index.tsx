import React from 'react';
import { Experience as MW } from 'gato-experience-3030-mw';
import { Experience as SW } from 'gato-experience-3030-sw';

declare global {
  var __VERSION__: string | undefined;
}

const Loading = ({ parent = 'unknown' }) => {
  React.useEffect(() => {
    console.log('Loading from ', parent);
  }, []);
  return <p>Loading...</p>;
};

const Experience = ({ aprop, onReady }) => {
  const [isDesktop, setIsDesktop] = React.useState(null);
  const [C, setC] = React.useState(() => Loading);

  React.useEffect(() => {
    const nextC =
      isDesktop === true
        ? React.lazy(() =>
            import('gato-experience-3030-sw').then((module) => {
              console.log('sw ready');
              onReady('its done SW');
              return {
                default: module.Experience,
              };
            }),
          )
        : isDesktop === false
        ? React.lazy(() =>
            import('gato-experience-3030-mw').then((module) => {
              console.log('mw ready');
              onReady('its done MW');
              return {
                default: module.Experience,
              };
            }),
          )
        : () => Loading;
    setC(nextC);
  }, [isDesktop]);

  React.useEffect(() => {
    const onWindowResize = (event) => {
      setIsDesktop(window.matchMedia('(min-width: 700px)').matches);
    };
    window.addEventListener('resize', onWindowResize);
    onWindowResize();
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  console.count('render');

  return (
    <>
      <p>wrapper {__VERSION__}</p>
      <React.Suspense fallback={<Loading parent="suspense" />}>
        <C aprop={aprop} parent="other" />
      </React.Suspense>
    </>
  );
};

export { Experience };
