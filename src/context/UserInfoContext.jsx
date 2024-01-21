import { createContext, useState } from 'react';

export const UserContext = createContext(null);
UserContext.displayName = "UserContext";

const UserInfoContext = ({ children }) => {
  const [user, setUser] = useState({username: ''});
  const userInfo = {
    user,
    setUser
  };
  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  )
}

export default UserInfoContext;