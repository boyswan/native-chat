
import React from 'react-native';
import Main from './Main';
import UserChat from './UserChat';
import Carousel from './Carousel'
import Dimensions from 'Dimensions';

let {width, height} = Dimensions.get('window');

const {StyleSheet, Image, View, TouchableOpacity, ListView, Text, ScrollView, Component} = React;

export default class SearchResults extends Component {

  constructor(props) {
    super(props);
  }

  prevPage(){
    this.props.navigator.pop()
  }

  render(){

    let createMessage = (data, i) => <Thumb key={i} data={data} />;

      return (
        <View style={styles.mainWrap}>

          <View style={navStyles.navWrap}>
            <TouchableOpacity style={navStyles.icon}
              onPress={this.prevPage.bind(this)}>
              <Image
              style={navStyles.icon}
              source={require('image!icon2')}/>
            </TouchableOpacity></View>

          <ScrollView ref="scrollview"
            contentContainerStyle={styles.scrollWrap}
            onPress={this.onPress}
            automaticallyAdjustContentInsets={false}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            bounces={true}
            onMomentumScrollEnd={this.onAnimationEnd}>
          {this.props.messageData.map(createMessage)}
          </ScrollView>

        </View>
      );
  }

  onAnimationEnd(e) {
    let activePage = e.nativeEvent.contentOffset.x / width;
  }

}

class Thumb extends Component {

  rowPressed(id){
    this.setState({userId: id})
    this.props.navigator.push({
      title: "User",
      component: UserChat,
      passProps: {userId: this.state.userId}
    })
  }

  render() {
    return (
      <View style={styles.textWrap}>
        <TouchableOpacity onPress={()=>this.rowPressed(this.props.data.id)}>
          <Text style={styles.description}> {this.props.data.userMessage}</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
      </View>
    );
  }

};

const navStyles = StyleSheet.create({

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

const styles = StyleSheet.create({

  textWrap: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: width,
    paddingLeft: 30,
    paddingRight: 30,
  },

  mainWrap: {
    backgroundColor: '#48BBEC',
    height: height,
  },

  line: {
    width: width-60,
    height: 1,
    backgroundColor: '#fff',
    marginRight: 90,
  },

  description: {
    marginBottom: 20,
    fontFamily: 'Helvetica',
    fontWeight: '800',
    fontSize: 38,
    color: '#fff',
    backgroundColor: 'transparent',
  },

});