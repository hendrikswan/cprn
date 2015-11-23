/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
*/

const React = require('react-native');
const {
  AppRegistry,
  Component,
  NavigatorIOS,
} = React;

import TaskList from './TaskList';

import sayHello from './test';

sayHello();

class CrossTodo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: TaskList,
                    title: 'List of tasks',
                    passProps: {
                        todos: [
                            {
                                task: 'wazup',
                                state: 'Pending',
                            },
                        ],
                        selectedState: 'Pending',
                    },
                }}

                style={{
                    flex: 1,
                }}
            />
        );
    }
}

AppRegistry.registerComponent('CrossTodo', () => CrossTodo);
