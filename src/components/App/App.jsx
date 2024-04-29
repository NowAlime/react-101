import "modern-normalize";
import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import Friends from "../../friends.json";


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
       
      </>
    );
  };
  export default App;