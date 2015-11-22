import React from 'react-native';
import _ from 'lodash';

const {
    ListView,
    TouchableHighlight,
    View,
    StyleSheet,
    Text,
    Image,
} = React;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FDFDFD',
        paddingLeft: 20,
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
        fontSize: 18,
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
        const counted = _.countBy(todos, (todo) => todo.state);
        const countedArray = _(counted)
            .keys()
            .map((key)=> {
                return {
                    key: key,
                    count: counted[key],
                };
            })
            .value();

        return dataSource.cloneWithRows(countedArray);
    }

    pressRow(rowData: object) {
        this.props.onFilter && this.props.onFilter(rowData.key);
    }

    renderRow(rowData: object, sectionID: number, rowID: number) {
        return (
        <TouchableHighlight onPress={() => this.pressRow(rowData)}>
            <View>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {rowData.key}
                    </Text>
                    <Text style={{
                        fontWeight: '900',
                        fontSize: 18,
                        color: '#444',
                    }}>
                        {rowData.count}
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
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

StateFilterList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default StateFilterList;
