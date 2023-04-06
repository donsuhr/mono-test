import FirstComponent from './components/plasmic/FirstComponent';
import SecondComponent from './components/plasmic/SecondComponent';

declare global {
  var __VERSION__: string | undefined;
  var __PACKAGE__: string | undefined;
}

const Experience = ({ aprop }) => {
  return (
    <>
      <p>
        some-old-sw {__VERSION__} - aprop: {aprop}
      </p>
      <p>FirstComponent: </p>
      <FirstComponent />

      <p>SecondComponent: </p>
      <SecondComponent slot2="overriden2" />
    </>
  );
};

export { Experience };
