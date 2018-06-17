import * as React from "react";
import { Greeting } from './Styles';

export interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => <Greeting>Hello from {props.compiler} and {props.framework}!</Greeting>;

export default Hello;
