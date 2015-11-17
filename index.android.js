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
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  BackAndroid,
  Dimensions,
  DrawerLayoutAndroid,
  StyleSheet,
  ToolbarAndroid,
  View,
  Text
} = React;

import StateFilterList from './StateFilterList.android.js';

var DRAWER_WIDTH_LEFT = 56;

var UIExplorerApp = React.createClass({
  getInitialState: function() {
    return {
      example: this._getUIExplorerHome(),
    };
  },

  _getUIExplorerHome: function() {
    return {
      title: 'UIExplorer',
      component: this._renderHome(),
    };
  },

  componentWillMount: function() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress);
  },

  render: function() {
    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="none"
        ref={(drawer) => { this.drawer = drawer; }}
        renderNavigationView={this._renderNavigationView}>
        {this._renderNavigation()}
      </DrawerLayoutAndroid>
      );
  },

  _renderNavigationView: function() {
    return (
      <View style={{
          backgroundColor: '#fff',
      }}>

<StateFilterList />
      </View>
    );
  },

  onSelectExample: function(example) {
    this.drawer.closeDrawer();
    // if (example.title === this._getUIExplorerHome().title) {
    //   example = this._getUIExplorerHome();
    // }
    // this.setState({
    //   example: example,
    // });
  },

  _renderHome: function() {
    var onSelectExample = this.onSelectExample;
    return React.createClass({
      render: function() {
        return (
            <Text>This is where we will show the tasks</Text>
        );
      }
    });
  },

  _renderNavigation: function() {
    var Component = this.state.example.component;
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          navIcon={require('./images/gear.png')}
          onIconClicked={() => this.drawer.openDrawer()}
          style={styles.toolbar}
          title={this.state.example.title}
        />
        <Component />
      </View>
    );
  },

  _handleBackButtonPress: function() {
    if (this.state.example.title !== this._getUIExplorerHome().title) {
      this.onSelectExample(this._getUIExplorerHome());
      return true;
    }
    return false;
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#E9EAED',
    height: 56,
  },
});

AppRegistry.registerComponent('CrossTodo', () => UIExplorerApp);

// module.exports = UIExplorerApp;
//
//
// AppRegistry.registerComponent('CrossTodo', () => CrossTodo);
