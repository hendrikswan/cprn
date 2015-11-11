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
  Navigator
} = React;


import TaskList from './TaskList';
import TaskForm from './TaskForm';



class CrossTodo extends Component {
    constructor(props){
        super(props);
    }

    renderScene(route, nav){

        switch(route.name){
            case 'tasklist':
                return (
                    <TaskList
                        nav={nav}
                        route={route}
                    />
                );
            case 'taskform':
                return (
                    <TaskForm
                        nav={nav}
                        route={route}
                    />
                );
        }
    }

    render(){
        return (
            <Navigator
              initialRoute={{name: 'tasklist', index: 0}}
              renderScene={this.renderScene}
            />
        );
    }
}

AppRegistry.registerComponent('CrossTodo', () => CrossTodo);
