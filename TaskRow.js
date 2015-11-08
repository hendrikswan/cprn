import React from 'react-native';
let {
    Text,
    View,
    PanResponder,
} = React;

class TaskRow extends React.Component {
    constructor(props, context){
        super(props, context);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: this.highlight.bind(this),
            onPanResponderMove: this.handlePanResponderMove.bind(this),
            onPanResponderRelease: this.handlePanResponderEnd.bind(this),
            onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
        });

        this.startLeft = 0;

        this.rowPosition = {
            style: {
                left: this.startLeft,
            }
        }
    }

    updatePosition() {
      this.row && this.row.setNativeProps(this.rowPosition);
    }

    handlePanResponderEnd(e, gestureState){
        this.rowPosition.style.left = this.startLeft;
        this.updatePosition();
    }

    handlePanResponderMove(e, gestureState){
        this.rowPosition.style.left = this.startLeft
            + gestureState.dx;
        this.updatePosition();
    }

    highlight(){
        this.row && this.row.setNativeProps({
            style: {
                backgroundColor: 'blue'
            }
        });
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
            }}

            ref={((row)=> {
                this.row = row;
            }).bind(this)}

            {...this.panResponder.panHandlers}

            >
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
