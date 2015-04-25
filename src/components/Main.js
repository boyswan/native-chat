
import React from 'react-native';
import MessageList from './MessageList';
import Dimensions from 'Dimensions';
var {width, height} = Dimensions.get('window');


const {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Component,
  Image,
} = React;

const query = 'http://localhost:3000/messages'

export default class Main extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	userName: 'Default',
		  userMessage: ''
	  };
	}

	componentDidMount(){
		this._fetchData();
	}

	_fetchData(){
		fetch(query)
		  .then(response => response.json())
		  .then(response => this._handleResponse(response))
		  .catch(error => 
		    this.setState({
		     	message: 'Something bad happened ' + error
		 		}));
	}

	_handleResponse(response){
		this.setState({messageData: response})
	}

 	_handleInput(input){
	  this.setState({userMessage: input});
 	}

 	_handleSubmit(){

	  if (this.state.userMessage.length === 0){ alert('You need to write something!') } else {

			fetch(query, {
			  method: 'post',
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({
			    "userName": this.state.userName,
			    "userMessage": this.state.userMessage})
				})
				.then(this.setState({userMessage: ''}))
				.then(this.nextPage())

		}		

 	}

 	nextPage(){
	 	this.props.navigator.push({
	    title: "MessageList",
	    component: MessageList,
	    passProps:{messageData: this.state.messageData}
	  })

 	}

	render(){

	    return (

	    	<View style={styles.mainWrap}>

		    	<View style={navStyles.navWrap}>
		    		<TouchableOpacity style={navStyles.icon}
					    onPress={this.nextPage.bind(this)}>
				      <Image
			        style={navStyles.icon}
			        source={require('image!icon1')}
					      />
		    		</TouchableOpacity>
		    	</View>


		    	<View style={styles.contentWrap}>

					<TextInput
						style={styles.searchInput}
						value={this.state.userMessage}
						onChange={event => this._handleInput(event.nativeEvent.text)}
						onSubmitEditing={this._handleSubmit.bind(this)}
						placeholder='Enter'/>

					  <TouchableHighlight style={styles.button}
					      onPress={this._handleSubmit.bind(this)}>
					    <Text style={styles.buttonText}>Go</Text>
					  </TouchableHighlight>
				  </View>



	    	</View>

	    );
	}
}

const navStyles = StyleSheet.create({

	navWrap: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		margin: 30,
	},

	icon: {
		width: 40,
		height: 40,
	},

})


const styles = StyleSheet.create({

	mainWrap: {
		backgroundColor: '#48BBEC',
		height: 1000,
	},

	contentWrap: {
		margin: 30
	},

	searchInput: {
	  height: 200,
	  padding: 10,
	  borderWidth: 1,
	  borderColor: '#fff',
	  borderRadius: 8,
	  marginBottom: 30,
	},

	button: {
	  height: 36,
	  flexDirection: 'row',
	  backgroundColor: '#48BBEC',
	  borderColor: '#fff',
	  borderWidth: 1,
	  borderRadius: 8,
	  justifyContent: 'center',

	},


});