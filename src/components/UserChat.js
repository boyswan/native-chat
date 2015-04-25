import React from 'react-native';
import Carousel from './Carousel'



import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

const {
  StyleSheet,
  View,
  Text,
  Component,
  Image,
  TouchableOpacity,
  Navigator,
} = React;

export default class UserChat extends Component {

  constructor(props) {
    super(props);
  }

  prevPage(){

    this.props.navigator.pop()

  }

  render(){

      let selectedId = this.props.selectedRow.id



      return (
        <View style={styles.mainWrap}>
           <View style={navStyles.navWrap}>
            <TouchableOpacity style={navStyles.icon}
              onPress={this.prevPage.bind(this)}>
              <Image
              style={navStyles.icon}
              source={require('image!icon2')}
                />
            </TouchableOpacity>
          </View>

          <Carousel width={width}>
            <View style={styles.containerz}>
              <Text> {selectedId} </Text>
            </View>
            <View style={styles.containerz}>
              <Text>Page 2</Text>
            </View>
            <View style={styles.containerz}>
              <Text>Page 3</Text>
            </View>
          </Carousel>

        </View>

      );
  }
}

let navStyles = StyleSheet.create({

  navWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 30,
    marginBottom: 0
  },

  icon: {
    width: 40,
    height: 40,
  },

})

let styles = StyleSheet.create({
  containerz: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  mainWrap:{
    backgroundColor: '#48BBEC',
    height: height,
  },

  line: {
    width: 500,
    height: 1,
    backgroundColor: '#48BBEC',
    marginBottom: 5,
  },

  description: {
    margin: 30,
    marginTop: 0,
    fontFamily: 'Helvetica',
    fontWeight: '800',
    fontSize: 38,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  container: {
    marginTop: 50,
    padding: 30,
    height: 600,
  },

});
