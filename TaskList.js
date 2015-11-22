import React from 'react-native';
const {
    Text,
    ListView,
    View,
    TouchableHighlight,
} = React;

import TaskRow from './TaskRow';
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');


class TaskList extends React.Component {
    constructor(props, context){
        super(props, context);

        this.todos = this.props.todos; //copying over to instance, because we need to hook into componentWillReceiveProps

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        })
        .cloneWithRows(this.todos);

        this.state = {
            dataSource: ds
        };

    }

    updateDataSource(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.todos)
        });
    }

    componentWillReceiveProps(nextProps){
        this.todos = nextProps.todos;
        this.updateDataSource();
    }



    renderRow(task){
        return  (
            <TaskRow
                id={task}
                task={task}
            />
        );

    }


    addPressed(task){
        this.props.nav.push({
            name: 'taskform',
            onAdd: (todo) => {
                console.log(todo);
                this.todos.push(todo);
                this.updateDataSource();
            }
        })
    }

    render(){
        console.log('rerendering the list of tasks');
        return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                paddingTop: 20,
                backgroundColor: '#F7F7F7'
            }}>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)} />
            </View>
        );
    }
}

TaskList.propTypes = {
    todos: React.PropTypes.array.isRequired,
};

export default TaskList;
