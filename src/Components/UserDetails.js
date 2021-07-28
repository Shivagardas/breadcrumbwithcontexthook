import React,{ useState, createContext, useMemo } from 'react';

const UserContext = createContext(); 

const UserProvider = (props) => {
// the state that we'll be storing the username into

/* because we will be providing an object to the provider, it is better to put the value inside a useMemo so that the component will only re-render when there's a change in the value. */

const [userInfo, setUserInfo] = useState({firstName: 'some thing', lastName: "Gardas"});

const setInfo = (data) => setUserInfo(prevData => ({...prevData, ...data}));

    return (
        <UserContext.Provider
            value={{userInfo, setUserInfo: setInfo}}
        >
            {props.children}
        </UserContext.Provider>
    );
}
export { UserContext, UserProvider };