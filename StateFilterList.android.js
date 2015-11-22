import React from 'react-native';
import _ from 'lodash';

const {
    ListView,
    TouchableHighlight,
    View,
    StyleSheet,
    Text,
} = React;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    text: {
        flex: 1,
    },
});

class StateFilterList extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const todos = this.props.todos;
        this.state = {
            dataSource: this.cloneDataSource(ds, todos),
        };
    }

    componentWillReceiveProps(nextProps) {
        const todos = nextProps.todos;
        const dataSource = this.cloneDataSource(this.state.dataSource, todos);
        this.setState({dataSource});
    }

    cloneDataSource(dataSource, todos) {
        const doneCount = _.where(todos, {isDone: true}).length;
        const pendingCount = _.where(todos, {isDone: false}).length;

        return dataSource.cloneWithRows([
            `Pending (${pendingCount})`,
            `Done (${doneCount})`,
        ]);
    }

    pressRow(rowID: number) {
        console.log(rowID);
    }

    renderRow(rowData: string, sectionID: number, rowID: number) {
        return (
          <TouchableHighlight onPress={() => this.pressRow(rowID)}>
            <View>
              <View style={styles.row}>
                <Text style={styles.text}>
                  {rowData}
                </Text>
              </View>
              <View style={styles.separator} />
            </View>
          </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

StateFilterList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default StateFilterList;
