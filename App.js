import React,{Component} from 'react';
import {StatusBar} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import {Home, Suggest} from './src/pages';

class App extends Component {
  render(){
    return (
      <>
        <StatusBar barStyle="light-content"/>
        <Router>
          <Scene key='root' hideNavBar>
            <Scene key='home' component={Home} initial/>
            <Scene key='suggest' component={Suggest}/>
          </Scene>
        </Router>
      </>
    );
  }
};

export default App;