/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS
} = React;

import TaskList from './TaskList';

class CrossTodo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <NavigatorIOS
                style={{
                    flex: 1
                }}
                initialRoute={{
                    component: TaskList,
                    title: 'List of tasks'
                }}
            />
        );
    }
}

AppRegistry.registerComponent('CrossTodo', () => CrossTodo);
