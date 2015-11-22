import React from 'react-native';

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
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'Pending',
                'Done',
            ]),
        };
    }

    componentWillReceiveProps(nextProps) {
        this.todos = nextProps.todos;
        this.updateDataSource();
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

export default StateFilterList;
