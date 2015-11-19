import {
    React,
} from 'react-native';


const styles = React.StyleSheet.create({
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FAFAFA',
        textAlign: 'center',
    },
    button: {
        height: 60,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#05A5D1',
        borderBottomWidth: 3,
        backgroundColor: '#333',
    },
});

const AddTaskButton = React.createClass({
    render: ()=> {
        return (
            <TouchableHighlight
                onPress={this.addPressed.bind(this)}
                style={styles.button}>

                <Text style={styles.buttonText}>
                    Add one
                </Text>

            </TouchableHighlight>

        );
    },
});


export default AddTaskButton;
