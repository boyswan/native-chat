
import React from 'react-native';
import Main from './Main';

const {
  StyleSheet,
  Component,
  NavigatorIOS,
  AppRegistry,
} = React;

export default class play extends Component {

  render() {
    return (
      <NavigatorIOS
        navigationBarHidden={true}
        style={styles.container}
        initialRoute={{
          title: 'Main',
          component: Main,
        }}/>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

})
