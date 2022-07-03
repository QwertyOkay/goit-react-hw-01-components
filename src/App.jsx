import Profile from './components/Profile/Profile';
import user from './data/user.json';

function App() {
  return ( 
<>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    
    </>
  );
}

export default App;
