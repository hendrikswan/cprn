import React from 'react-native';
import StateFilterList from './StateFilterList.android';


const {
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
        // backgroundColor: '#F6F6F6',
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
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FAFAFA',
        textAlign: 'center',
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
    },
    heading: {
        fontSize: 25,
        color: '#444',
    },
});

class SideBar extends React.Component {
    constructor(props){
        super(props);
    }

    addPressed() {
        console.log('add was pressed');
        if (this.props.onAddNew) {
            this.props.onAddNew();
        }
    }

    render() {
        return (
            <View>

                <StateFilterList
                    todos={this.props.todos}
                />
                <TouchableHighlight
                    onPress={this.addPressed.bind(this)}
                    style={styles.button}
                >

                    <Text style={styles.buttonText}>
                        Add a task
                    </Text>

                </TouchableHighlight>
            </View>
        );
    }
}

SideBar.propTypes = {
    onAddNew: React.PropTypes.func.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.object),
};


export default SideBar;
