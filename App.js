/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Navigation/>
    );
  }
}
