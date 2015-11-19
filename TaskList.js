import React from 'react-native';
let {
    Text,
    ListView,
    View,
    TouchableHighlight
} = React;

import TaskRow from './TaskRow';



class TaskList extends React.Component {
    constructor(props, context){
        super(props, context);
        this.todos = [
            'Buy a car',
            'Take car to the carwash',
            'Get insurance for the car',
        ];
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        })
        .cloneWithRows(this.todos);

        this.state = {
            dataSource: ds
        };

    }

    handleTaskDone(todo){
        setTimeout(()=> {
            this.todos = this.todos.filter((t) => t != todo);
            this.updateDataSource();
        }, 200);

    }

    updateDataSource(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.todos)
        });
    }

    renderRow(task){
        return <TaskRow
            task={task}
            id={task}
            onTaskDone={this.handleTaskDone.bind(this)}
         />
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

export default TaskList;
