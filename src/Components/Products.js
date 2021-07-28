// import React from 'react';

// const Products = () => {
//   return (
//     <div className="user-form">
//       <h1>this is the Products tab</h1>
//       {/* <FirstName/>
//       <LastName/> */}
//     </div>
//   );
// }

// export default Products;

import React, { useContext } from 'react';
import { UserContext } from './UserDetails';

const Form = () => {
 const { userInfo } = useContext(UserContext);

  return (
    <div className="user-form">
      <h1>this is the Products tab</h1>
      <p>first Name: {userInfo.firstName}</p>
      <p>Last Name: {userInfo.lastName}</p>
    </div>
  );
};

export default Form;