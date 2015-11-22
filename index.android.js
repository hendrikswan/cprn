/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule UIExplorerApp
 * @flow
 */

const React = require('react-native');
const {
  AppRegistry,
  Dimensions,
  DrawerLayoutAndroid,
  StyleSheet,
  View,
  ToolbarAndroid,
  Navigator,
  Text,
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        backgroundColor: '#E9EAED',
        height: 56,
    },
});

import SideBar from './SideBar.android';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const DRAWER_WIDTH_LEFT = 50;

class CrossTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    task: 'Buy a car',
                    isDone: false,
                },
                {
                    task: 'Take it to the car wash',
                    isDone: false,
                },
                {
                    task: 'Get some insurance',
                    isDone: true,
                },
            ],
        };
    }

    addNew() {
        this.drawer.closeDrawer();
        console.log('adding a new todo item!');
        this.navigator.push({
            name: 'taskform',
            onAdd: this.onAdd.bind(this),
        });

    }

    onAdd(task) {
        const cloned = this.state.todos.slice(0);
        cloned.push({
            task: task,
            isDone: false,
        });
        this.setState({todos: cloned});
    }

    renderNavigationView() {
        return (
            <View style={{
                backgroundColor: '#fff',
            }}
            >
                <SideBar onAddNew={this.addNew.bind(this)} />
            </View>
        );
    }


    renderScene(route, nav) {
        switch (route.name) {
        case 'taskform':
            return (
                <TaskForm
                    nav={nav}
                    route={route}
                />
            );
        default:
            return (
                <TaskList
                    nav={nav}
                    route={route}
                    todos={this.state.todos}
                />
            );
        }
    }

    getRememberHandler(id) {
        return (component) => {
            this[id] = component;
        };
    }

    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    render() {
        return (
        <DrawerLayoutAndroid
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
            keyboardDismissMode="none"
            ref={this.getRememberHandler.bind(this)('drawer')}
            renderNavigationView={this.renderNavigationView.bind(this)}
        >
            <View style={styles.container}>
                <ToolbarAndroid
                    // logo={require('./images/gear.png')}
                    navIcon={require('./images/menu.png')}
                    onIconClicked={() => this.drawer.openDrawer()}
                    ref={this.getRememberHandler.bind(this)('toolbar')}
                    style={styles.toolbar}
                    title="My list"
                />

                <Navigator
                    configureScene={this.configureScene}
                    initialRoute={{name: 'tasklist', index: 0}}
                    ref={this.getRememberHandler.bind(this)('navigator')}
                    renderScene={this.renderScene.bind(this)}
                />
            </View>
        </DrawerLayoutAndroid>
        );
    }
}


AppRegistry.registerComponent('CrossTodo', () => CrossTodo);
