import * as React from 'react';
import { hot } from 'react-hot-loader';

import Hello from '../../components/Hello/Hello';

import { Wrapper, Headline } from './Styles';

const App = () => (
  <Wrapper>
    <Headline>I am App!</Headline>
    <Hello compiler="Typescript with Webpack" framework="React" />
  </Wrapper>
)

export default hot(module)(App);
