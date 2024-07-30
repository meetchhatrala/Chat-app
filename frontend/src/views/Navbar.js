// import {useContext} from 'react'
// import jwt_decode from "jwt-decode"
// import AuthContext from '../context/AuthContext'
// import { Link } from 'react-router-dom'

// function Navbar() {

//   const {user, logoutUser} = useContext(AuthContext)
//   const token = localStorage.getItem("authTokens")

//   if (token){
//     const decoded = jwt_decode(token) 
//     var user_id = decoded.user_id
//   }

//   return (
//     <div>
//         <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
//         <div class="container-fluid">
//           {/* <a class="navbar-brand" href="#"> */}
//           <a class="navbar-brand" href="#">
//             {/* <img style={{width:"120px", padding:"6px"}} src="https://i.imgur.com/juL1aAc.png" alt="" /> */}
//             <img style={{width:"120px", padding:"6px"}} src="..\src\views\style\logo.png" alt="ChatWeb" />

//           </a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav ">
//               <li class="nav-item">
//                 {/* <a class="nav-link active" aria-current="page" href="#"> <i className='fas fa-home'></i> Home</a> */}
//                 <Link class="nav-link"  to="/"> <i className='fas fa-home'></i> Home</Link>
//               </li>
//               {token === null && 
//               <>
//                 <li class="nav-item">
//                   <Link class="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
//                 </li>
//               </>
//               }

//             {token !== null && 
//               <>
//                 {/* <li class="nav-item">
//                   <Link class="nav-link" to="/dashboard"> <i className='fas fa-th'></i> Dashboard</Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link" to="/todo"> <i className='fas fa-pen'></i> Todo</Link>
//                 </li> */}
//                 <li class="nav-item">
//                   <Link class="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Inbox</Link>
//                 </li>
//                 {/* Added for qr scanner */}
//                 {/* <li className="nav-item">
//                     <Link className="nav-link" to="/qr-scanner">
//                       <i className="fas fa-qrcode"></i> QR Scanner
//                     </Link>
//                   </li> */}
                  
//                 <li class="nav-item">
//                   <a class="nav-link" onClick={logoutUser} style={{cursor:"pointer"}}> <i className='fas fa-sign-out-alt'></i>Logout</a>
//                 </li>
//               </>
//               }   
              
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar



import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import useAxios from '../utils/useAxios';
import { Link } from 'react-router-dom';

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const axios = useAxios();
  const token = localStorage.getItem('authTokens');

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        const decoded = jwt_decode(token);
        const user_id = decoded.user_id;
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/profile/${user_id}/`);
          setProfile(response.data);
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      }
    };
    fetchProfile();
  }, [token, axios]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{ width: '120px', padding: '6px' }} src="..\src\views\style\logo.png" alt="ChatWeb" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/"> <i className='fas fa-home'></i> Home</Link>
              </li>
              {!token &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
                  </li>
                </>
              }
              {token &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Inbox</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={logoutUser} style={{ cursor: 'pointer' }}> <i className='fas fa-sign-out-alt'></i>Logout</a>
                  </li>
                  {profile && (
                    <li className="nav-item">
                      <div className="nav-link">
                        <img src={profile.qr_code} className="rounded-circle" alt={profile.full_name} style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                        <span className="ml-2">{profile.full_name}</span>
                      </div>
                    </li>
                  )}
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
