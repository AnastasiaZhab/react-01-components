import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { Component } from 'react';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 'id-1', text: 'запустити збір',  completed: false},
      {id: 'id-2', text: 'відправити лист',  completed: false},
      {id: 'id-3', text: 'купити квіти',  completed: false}

    ],
  };

  deleteTodo = (index) => {
     this.setState(prevState => ({
          todos: prevState.todos.filter(todo => todo.id !== index)
     }))
  }
  
  render() {
    const {todos} = this.state;
    return (
    <div className="container">
      <h1>Заплановані завдання</h1>
      <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
      <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
       />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
    }
}

export default App;
