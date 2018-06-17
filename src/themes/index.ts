import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export interface ThemeInterface {
  primaryColor: string;
}

export const theme = {
  primaryColor: "#000011"
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
