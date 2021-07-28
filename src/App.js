// import * as React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
// } from 'react-router-dom'


// const routes = [
//   {
//     path: '/Home',
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: '/bubblegum',
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: '/shoelaces',
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ]

// export default function App () {
//   return (
//     <Router>
//       <div style={{ display: 'flex' }}>
//         <div style={{
//           padding: '10px',
//           width: '40%',
//         }}>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             <li><Link to="/Home">Home</Link></li>
//             <li><Link to="/bubblegum">Bubblegum</Link></li>
//             <li><Link to="/shoelaces">Shoelaces</Link></li>
//           </ul>
//           {routes.map((route) => (
//             <Route
//               key={route.path}
//               path={route.path}
//               exact={route.exact}
//             >
//               <route.sidebar />
//             </Route>
//           ))}
//         </div>
//         <div style={{ flex: 1, padding: '10px' }}>
//           {routes.map((route) => (
//             <Route
//               key={route.path}
//               path={route.path}
//               exact={route.exact}
//             >
//               <route.main />
//             </Route>
//           ))}
//         </div>
//       </div>
//     </Router>
//   )
// }

import React from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';

const App = () => {
  return (
    <div>
    <Header />
    <Main />
    </div>
  );
}

export default App;