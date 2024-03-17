// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Profile } from './components/Profile/Profile'
import userData from './components/Data/userData.json'


// const App = () => {
//   return (
//     <>
//       <Profile
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
//       />
//     </>
//   );
// };

import friends from "./components/Data/Friends.json"
const App = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};


export default App
