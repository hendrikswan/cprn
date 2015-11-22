import React from 'react-native';
const {
    Text,
    ListView,
    View,
    TouchableHighlight,
} = React;
import _ from 'lodash';

import TaskRow from './TaskRow';
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');


class TaskList extends React.Component {
    constructor(props, context){
        super(props, context);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.cloneDataSource(ds, this.props),
        };
    }

    cloneDataSource(dataSource, props) {
        debugger;
        const filteredTodos = _.where(props.todos, {state: props.selectedState});
        return dataSource.cloneWithRows(filteredTodos);
    }

    componentWillReceiveProps(nextProps){
        const dataSource = this.cloneDataSource(this.state.dataSource, nextProps);
        this.setState({dataSource});
    }



    renderRow(task){
        return  (
            <TaskRow
                id={task}
                todo={task}
            />
        );

    }


    addPressed(task){
        this.props.nav.push({
            name: 'taskform',
            onAdd: (todo) => {
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
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

TaskList.propTypes = {
    selectedState: React.PropTypes.string.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
