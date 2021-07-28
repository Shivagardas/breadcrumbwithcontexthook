import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './Products.js';
import Settings from './Settings.js';
import Home from './Home';
// const nameContext = React.createContext();
// const [name, setName] = useState({FirstName: "Shiva", LastName:"Gardas"});
const Main = () => (
  <div>
    <Switch>
      {/* <nameContext.Provider value={name}> */}
        <Route path='/home' component={Home} />
      {/* </nameContext.Provider> */}
      <Route path='/products' component={Products} />
      <Route path='/settings' component={Settings} />
    </Switch>
  </div>
)

export default Main;