import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './app/components/Header'
import SubTitle from './app/components/subTitle'
import Input from './app/components/Input'
import TodoItem from './app/components/Todo'

export default class App extends React.Component {

  state = {
    todos : [
      {
        title : "물 3잔 마시기",
        isComplete: false
      },
      {
        title : "30분 이상 걷기",
        isComplete: false
      }
    ]
  }

  _makeTodoItem = ({ item, index }) => {
    return (
      <TodoItem text={item.title} isComplete={item.isComplete} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
            <Header/>
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="To-Do 입력"/>
          <Input/>
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="To-Do List"/>
          <TodoItem text={this.state.todos[0].title} isComplete={this.state.todos[0].isComplete}/>
          <TodoItem text={this.state.todos[0].title} isComplete={this.state.todos[0].isComplete}/>
          <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoItem}
            keyExtractor={(item, index) => { return `${index}`}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 //앱이 모바일 화면 크기만큼
  },
  centered: {
    alignItems: 'center', //가로가운데.. 마지막에 콤마 꼭 써야함
  },
  inputContainer: {
    marginTop: 20,
    marginLeft: 20
  }
});