import './App.css';
import Profile from './components/Profile/Profile';
import user from '../user.json'

function App() {
  return (
    <div className="App">
      <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
       />
    </div>
  );
}

export default App;
