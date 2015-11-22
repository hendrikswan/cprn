import React from 'react-native';
const {
    ListView,
    View,
} = React;
import _ from 'lodash';
import TaskRow from './TaskRow';


class TaskList extends React.Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.cloneDataSource(ds, this.props),
        };
    }


    componentWillReceiveProps(nextProps) {
        const dataSource = this.cloneDataSource(this.state.dataSource, nextProps);
        this.setState({dataSource});
    }

    cloneDataSource(dataSource, props) {
        const filteredTodos = _.where(props.todos, {state: props.selectedState});
        return dataSource.cloneWithRows(filteredTodos);
    }


    renderRow(task) {
        return (
            <TaskRow
                id={task}
                todo={task}
            />
        );
    }


    addPressed(task) {
        this.props.nav.push({
            name: 'taskform',
            onAdd: (todo) => {
                this.todos.push(todo);
                this.updateDataSource();
            },
        });
    }

    render() {
        console.log('rerendering the list of tasks');
        return (
            <View style={{
                backgroundColor: '#F7F7F7',
                flex: 1,
                justifyContent: 'flex-start',
                paddingTop: 20,
            }}
            >

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

TaskList.propTypes = {
    nav: React.PropTypes.shape({
        push: React.PropTypes.func,
    }).isRequired,
    selectedState: React.PropTypes.string.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
