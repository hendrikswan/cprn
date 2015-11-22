import React from 'react-native';
const {
    Text,
    View,
    Image,
    TouchableHighlight,
} = React;


class TaskRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    handleDonePress() {
        if (this.props.onTodoDone) {
            this.props.onTodoDone(this.props.todo);
        }
        this.setState({deleted: true});
    }

    render() {
        return (

                <View style={{
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20,
                }}
                >

                    <View style={{
                        borderColor: '#E7E7E7',
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        padding: 20,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    >

                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                        }}
                        >
                            {this.props.todo.task}
                        </Text>

                        <TouchableHighlight
                            onPress={this.handleDonePress.bind(this)}
                        >
                            <Image
                                source={require('./images/done.png')}
                                style={{
                                    marginTop: 5,
                                }}
                            />
                        </TouchableHighlight>
                    </View>
                </View>

        );
    }
}

TaskRow.propTypes = {
    onTodoDone: React.PropTypes.func.isRequired,
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.required,
    }).isRequired,
};

export default TaskRow;
