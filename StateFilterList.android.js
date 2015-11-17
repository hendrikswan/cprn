import React from 'react-native';

let {
    ListView,
    TouchableHighlight,
    View,
    StyleSheet,
    Text,
} = React;

let StateFilterList = React.createClass({
    getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource: ds.cloneWithRows([
            'Pending',
            'Done',
        ]),
      };
    },

    render: function() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    },

    pressRow: function(rowID: number) {
        console.log(rowID);
    },

    renderRow: function(rowData: string, sectionID: number, rowID: number) {
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
    },
});

var styles = StyleSheet.create({
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

export default StateFilterList;
