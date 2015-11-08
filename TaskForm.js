import React from 'react-native';

let {
    Text,
    TextInput,
    View,
    TouchableHighlight,
} = React;

class TaskForm extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            todo: ''
        }
    }

    addPressed(){
        if(this.props.onAdd){
            this.props.onAdd(this.state.todo);
        }

        this.props.navigator.pop();
    }

    render(){
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    paddingTop: 150,
                    backgroundColor: '#F7F7F7'
                }}
            >
                <TextInput
                    style={{
                        height: 50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginLeft: 10,
                        marginRight: 10,
                        padding: 15,
                        borderRadius: 3,
                        borderColor: '#D7D7D7'
                    }}
                    placeholder="Enter task"
                    onChangeText={(todo) => this.setState({todo})}
                />

                <TouchableHighlight
                    onPress={this.addPressed.bind(this)}
                    style={styles.button}>

                    <Text style={styles.buttonText}>
                        Add one
                    </Text>

                </TouchableHighlight>
            </View>
        );
    }
}

var styles = React.StyleSheet.create({
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: "#FAFAFA",
        textAlign: 'center',
    },
    button: {
        height: 60,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05A5D1',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 3
    },
});


export default TaskForm;
