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

    componentWillMount() {
        // BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress);
    }

    addNew() {
        this.drawer.closeDrawer();
        console.log('adding a new todo item!');
        this.navigator.push({
            name: 'taskform',
            onAdd: (todo) => {
                console.log(todo);
                // this.todos.push(todo);
                // this.updateDataSource();
            },
        });
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
        debugger;
        return Navigator.SceneConfigs.FloatFromBottom;
    }


    renderNavigation() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    navIcon={require('./images/menu.png')}
                    onIconClicked={() => this.drawer.openDrawer()}
                    ref={this.getRememberHandler.bind(this)('toolbar')}
                    style={styles.toolbar}
                    title="List of tasks"
                />
                <Navigator
                    configureScene={this.configureScene}
                    initialRoute={{name: 'tasklist', index: 0}}
                    ref={this.getRememberHandler.bind(this)('navigator')}
                    renderScene={this.renderScene}
                />
            </View>
        );
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
            {this.renderNavigation()}
        </DrawerLayoutAndroid>
        );
    }
}


AppRegistry.registerComponent('CrossTodo', () => CrossTodo);
