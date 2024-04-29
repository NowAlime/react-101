
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./userData.json";
import transactions from "./transactions.json";
import friends from "./friends.json";



export const App = () => {
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
       
      </>
    );
  };
  export default App;