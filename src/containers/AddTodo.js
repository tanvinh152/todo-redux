import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions'
class AddTodo extends Component {
  state = {
    text: '',
  };
  addTodo = (text) => {
    this.props.dispatch(addTodo(text));
    this.setState({text: ''});
  };
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
        }}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Create new"
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: '#3278bb',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../images/add.png')} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({});
