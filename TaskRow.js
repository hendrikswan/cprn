import React from 'react-native';
let {
    Text,
    View,
    PanResponder,
} = React;
import Swipeout from 'react-native-swipeout';


class TaskRow extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {};

    }

    handleDonePress(){
        this.props.onTaskDone && this.props.onTaskDone(this.props.task);
        this.setState({deleted: true});
    }

    render(){
        var swipeoutBtns = [
          {
            text: 'Done',
            backgroundColor: '#05A5D1',
            underlayColor: '#273539',
            onPress: this.handleDonePress.bind(this),
          }
        ];

        return (

                <View style={{
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20,
                }}>
                    <Swipeout
                        right={swipeoutBtns}
                        backgroundColor='#fff'
                        style={{
                            marginBottom: 20,
                        }}
                        close={this.state.deleted}
                    >

                        <View style={{
                            //padding: 20,
                            borderColor: '#E7E7E7',
                            borderWidth: 1,
                            backgroundColor: '#fff',
                            // marginBottom: 20,
                            // marginLeft: 10,
                            // marginRight: 10,
                            // shadowOffset: {
                            //     width: 0,
                            //     height: 1
                            // },
                            // shadowOpacity: 0.6,
                            // shadowColor: '#000',
                            padding: 20,

                        }}>

                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '600',
                                }}>
                                    {this.props.todo.task}
                                </Text>
                        </View>
                    </Swipeout>
                </View>

        );

    }
}

export default TaskRow;
