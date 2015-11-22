import React from 'react-native';
const {
    Text,
    View,
} = React;
import Swipeout from 'react-native-swipeout';


class TaskRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    handleDonePress() {
        if (this.props.onTaskDone) {
            this.props.onTaskDone(this.props.todo);
        }
        this.setState({deleted: true});
    }

    render() {
        const swipeoutBtns = [{
            text: 'Done',
            backgroundColor: '#05A5D1',
            underlayColor: '#273539',
            onPress: this.handleDonePress.bind(this),
        }];

        return (

                <View style={{
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20,
                }}
                >
                    <Swipeout
                        backgroundColor="#fff"
                        close={this.state.deleted}
                        right={swipeoutBtns}
                        style={{
                            marginBottom: 20,
                        }}
                    >

                        <View style={{
                            borderColor: '#E7E7E7',
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            padding: 20,
                        }}
                        >

                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '600',
                                }}
                                >
                                    {this.props.todo.task}
                                </Text>
                        </View>
                    </Swipeout>
                </View>

        );
    }
}

TaskRow.propTypes = {
    onTaskDone: React.PropTypes.func.isRequired,
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.required,
    }).isRequired,
};

export default TaskRow;
