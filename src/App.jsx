import './App.css';
import userData from "./userData.json";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
        <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={userData.stats}
        />
    </>
  )
}

export default App;
