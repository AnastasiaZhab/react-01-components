import Profile from './components/Profile/Profile';
import user from './data/user.json'

function App() {
  return (
    <div className="container">
      <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
       />
    </div>
  );
}

export default App;
