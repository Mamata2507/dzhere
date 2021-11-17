import React, { createContext,useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
  
const UserContext = createContext({
  user: { data: '' },
  dispatch: () => {},
});

AsyncStorage.setItem('u_phone', '01023454710');


const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getStorage() {
      if (await AsyncStorage.getItem("u_phone")) {
        let LocalData = await AsyncStorage.getItem("u_phone");
        //console.log(LocalData);
        setData(LocalData);
      }
    }
    getStorage();
  }, []);
  const value = {user: { data }, dispatch: setData};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};


const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;

