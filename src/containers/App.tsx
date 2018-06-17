import * as React from 'react'
import { hot } from 'react-hot-loader'
import Hello from '../components/Hello/Hello';

const App = () => (
  <div>
    <h1>I am App!</h1>
    <Hello compiler="Typescript with Webpack" framework="React" />
  </div>
)

export default hot(module)(App);
