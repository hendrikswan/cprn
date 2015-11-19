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

const DRAWER_WIDTH_LEFT = 100;

class CrossTodo extends React.Component {

    componentWillMount() {
        // BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress);
    }

    renderNavigationView() {
        return (
            <View style={{
                backgroundColor: '#fff',
            }}>

                <SideBar />
            </View>
        );
    }

    renderNavigation() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                  navIcon={require('./images/menu.png')}
                  onIconClicked={() => this.drawer.openDrawer()}
                  style={styles.toolbar}
                  title="List of tasks"
                />
                <TaskList />
            </View>
        );
    }

    render() {
        return (
        <DrawerLayoutAndroid
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
            keyboardDismissMode="none"
            ref={(drawer) => { this.drawer = drawer; }}
            renderNavigationView={this.renderNavigationView}>
            {this.renderNavigation()}
        </DrawerLayoutAndroid>
        );
    }
}


AppRegistry.registerComponent('CrossTodo', () => CrossTodo);
