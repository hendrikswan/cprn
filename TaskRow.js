import React from 'react-native';
let {
    Text,
    View
} = React;

class TaskRow extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    render(){
        return (
            <View style={{
                padding: 20,
                borderColor: '#E7E7E7',
                borderWidth: 1,
                backgroundColor: '#fff',
                marginBottom: 20,
                marginLeft: 10,
                marginRight: 10,
                // shadowOffset: {
                //     width: 0,
                //     height: 1
                // },
                // shadowOpacity: 0.6,
                // shadowColor: '#000',
                borderRadius: 3
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '600'
                }}>
                    {this.props.task}
                </Text>
            </View>
        )
    }
}

export default TaskRow;
