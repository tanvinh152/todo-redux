import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  return (
    <View style={{padding: 20}}>
      {todos.map((todo) => (
        <View
          key={todo.id}
          style={{
            backgroundColor: '#f1f1f1',
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            margin:2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
            <Text
              style={{
                fontSize: 24,
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}>
              {todo.text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
            <Image source={require('../images/close.png')} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TodoList;
