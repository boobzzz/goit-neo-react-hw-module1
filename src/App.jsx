import './App.css';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';
import Profile from './components/Profile.jsx';
import FriendList from './components/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory.jsx';

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
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </>
  )
}

export default App;
