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



// import React, { useContext, useEffect, useState } from 'react';
// import jwt_decode from 'jwt-decode';
// import AuthContext from '../context/AuthContext';
// import useAxios from '../utils/useAxios';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const { user, logoutUser } = useContext(AuthContext);
//   const [profile, setProfile] = useState(null);
//   const axios = useAxios();
//   const token = localStorage.getItem('authTokens');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (token) {
//         const decoded = jwt_decode(token);
//         const user_id = decoded.user_id;
//         try {
//           const response = await axios.get(`http://127.0.0.1:8000/api/profile/${user_id}/`);
//           setProfile(response.data);
//         } catch (error) {
//           console.error('Error fetching profile:', error);
//         }
//       }
//     };
//     fetchProfile();
//   }, [token, axios]);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <img style={{ width: '120px', padding: '6px' }} src="..\src\views\style\logo.png" alt="ChatWeb" />
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/"> <i className='fas fa-home'></i> Home</Link>
//               </li>
//               {!token &&
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
//                   </li>
//                 </>
//               }
//               {token &&
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Inbox</Link>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" onClick={logoutUser} style={{ cursor: 'pointer' }}> <i className='fas fa-sign-out-alt'></i>Logout</a>
//                   </li>
//                   {profile && (
//                     <li className="nav-item">
//                       <div className="nav-link">
//                         <img src={profile.qr_code} className="rounded-circle" alt={profile.full_name} style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
//                         <span className="ml-2">{profile.full_name}</span>
//                       </div>
//                     </li>
//                   )}
//                 </>
//               }
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
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



// import React, { useContext, useEffect, useState } from 'react';
// import jwt_decode from 'jwt-decode';
// import AuthContext from '../context/AuthContext';
// import useAxios from '../utils/useAxios';
// import { Link } from 'react-router-dom';



// function Navbar() {
//   const { user, logoutUser } = useContext(AuthContext);
//   const [profile, setProfile] = useState(null);
//   const axios = useAxios();
//   const token = localStorage.getItem('authTokens');

//   const [showModal, setShowModal] = useState(false); // State for modal visibility
//   const handleShowModal = () => setShowModal(true); // Function to show the modal
//   const handleCloseModal = () => setShowModal(false); // Function to close the modal
//   const baseURL = 'http://127.0.0.1:8000/api/profile/'

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (token) {
//         const decoded = jwt_decode(token);
//         const user_id = decoded.user_id;
//         try {
//           const response = await axios.get(${baseURL}${user_id}/);
//           setProfile(response.data);
//         } catch (error) {
//           console.error('Error fetching profile:', error);
//         }
//       }
//     };
//     fetchProfile();
//   }, [token, axios]);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <img style={{ width: '120px', padding: '6px' }} src="..\src\views\style\logo.png" alt="ChatWeb" />
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/"> <i className='fas fa-home'></i> Home</Link>
//               </li>
//               {!token &&
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
//                   </li>
//                 </>
//               }
//               {token &&
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Inbox</Link>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" onClick={handleShowModal} style={{ cursor: "pointer" }}>
//                       <i className="fas fa-user-circle"></i> My QR
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" onClick={logoutUser} style={{ cursor: 'pointer' }}> <i className='fas fa-sign-out-alt'></i>Logout</a>
//                   </li>
                  
//                 </>
//               }
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {showModal && (
//         <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Your QR Code</h5>
//                 <button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body d-flex justify-content-center align-items-center">
//                 {/* <QRCode value={qrCodeUrl} /> */}
//                 {profile.qr_code ? (
//                 <img src={profile.qr_code} alt="QR Code" />
//                 ) : (
//                 <p>No QR Code available.</p>
//                  )}
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;

// import React, { useContext, useEffect, useState } from 'react';
// import jwt_decode from 'jwt-decode';
// import AuthContext from '../context/AuthContext';
// import useAxios from '../utils/useAxios';
// import { Link } from 'react-router-dom';


// function Navbar() {
//   const { user, logoutUser } = useContext(AuthContext);
//   const [profile, setProfile] = useState(null);
//   const axios = useAxios();
//   const token = localStorage.getItem('authTokens');

 

//   const [showProfileModal, setShowProfileModal] = useState(false); // State for profile modal visibility
//   const handleShowProfileModal = () => setShowProfileModal(true); // Function to show profile modal
//   const handleCloseProfileModal = () => setShowProfileModal(false); // Function to close profile modal

//   const baseURL = 'http://127.0.0.1:8000/api/profile/';

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (token) {
//         const decoded = jwt_decode(token);
//         const user_id = decoded.user_id;
//         try {
//           const response = await axios.get(`${baseURL}${user_id}/`);
//           setProfile(response.data);
//         } catch (error) {
//           console.error('Error fetching profile:', error);
//         }
//       }
//     };
//     fetchProfile();
//   }, [token, axios]);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <img style={{ width: '120px', padding: '6px' }} src="..\src\views\style\logo.png" alt="ChatWeb" />
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/"> <i className='fas fa-home'></i> Home</Link>
//               </li>
//               {!token &&
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
//                   </li>
//                 </>
//               }
//               {token &&
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Inbox</Link>
//                   </li>
                 
//                   <li className="nav-item">
//                     <a className="nav-link" onClick={handleShowProfileModal} style={{ cursor: "pointer" }}>
//                       <i className="fas fa-user-circle"></i> My QR
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" onClick={logoutUser} style={{ cursor: 'pointer' }}> <i className='fas fa-sign-out-alt'></i>Logout</a>
//                   </li>
//                 </>
//               }
//             </ul>
//           </div>
//         </div>
//       </nav>

      

//       {/* Profile QR Code Modal */}
//       {showProfileModal && (
//         <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Your QR Code</h5>
//                 <button type="button" className="close" aria-label="Close" onClick={handleCloseProfileModal}>
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body d-flex justify-content-center align-items-center">
//                 {profile && profile.qr_code ? (
//                   <img src={profile.qr_code} alt="QR Code" />
//                 ) : (
//                   <p>No QR Code available.</p>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleCloseProfileModal}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;

// import React, { useContext, useEffect, useState } from 'react';
// import jwt_decode from 'jwt-decode';
// import AuthContext from '../context/AuthContext';
// import useAxios from '../utils/useAxios';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const { logoutUser } = useContext(AuthContext);
//   const [profile, setProfile] = useState(null);
//   const axios = useAxios();
//   const token = localStorage.getItem('authTokens');

//   const [showProfileModal, setShowProfileModal] = useState(false); // State for profile modal visibility
//   const handleShowProfileModal = () => setShowProfileModal(true); // Function to show profile modal
//   const handleCloseProfileModal = () => setShowProfileModal(false); // Function to close profile modal

//   const baseURL = 'http://127.0.0.1:8000/api/profile/';

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (token) {
//         const decoded = jwt_decode(token);
//         const user_id = decoded.user_id;
//         try {
//           const response = await axios.get(`${baseURL}${user_id}/`);
//           setProfile(response.data);
//         } catch (error) {
//           console.error('Error fetching profile:', error);
//         }
//       }
//     };
//     fetchProfile();
//   }, [token, axios]);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="#">
//             <img style={{ width: '120px', padding: '6px' }} src="..\src\views\style\logo.png" alt="ChatWeb" />
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/"> <i className='fas fa-home'></i> Home</Link>
//               </li>
//               {!token &&
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
//                   </li>
//                 </>
//               }
//               {token &&
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Inbox</Link>
//                   </li>
//                   <li className="nav-item">
//                     <button className="nav-link btn btn-link" onClick={handleShowProfileModal} style={{ cursor: "pointer" }}>
//                       <i className="fas fa-user-circle"></i> My QR
//                     </button>
//                   </li>
//                   <li className="nav-item">
//                     <button className="nav-link btn btn-link" onClick={logoutUser} style={{ cursor: 'pointer' }}> <i className='fas fa-sign-out-alt'></i> Logout</button>
//                   </li>
//                 </>
//               }
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Profile QR Code Modal */}
//       {showProfileModal && (
//         <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Your QR Code</h5>
//                 <button type="button" className="close" aria-label="Close" onClick={handleCloseProfileModal}>
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body d-flex justify-content-center align-items-center">
//                 {profile && profile.qr_code ? (
//                   <img src={profile.qr_code} alt="QR Code" />
//                 ) : (
//                   <p>No QR Code available.</p>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={handleCloseProfileModal}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;


import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import useAxios from '../utils/useAxios';
import { Link } from 'react-router-dom';
import { BrowserQRCodeReader } from '@zxing/browser';

function Navbar() {
  const { logoutUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showScannerModal, setShowScannerModal] = useState(false);
  const [qrCodeResult, setQrCodeResult] = useState(null);
  const axios = useAxios();
  const token = localStorage.getItem('authTokens');

  const handleShowProfileModal = () => setShowProfileModal(true);
  const handleCloseProfileModal = () => setShowProfileModal(false);
  const handleShowScannerModal = () => setShowScannerModal(true);
  const handleCloseScannerModal = () => setShowScannerModal(false);

  const baseURL = 'http://127.0.0.1:8000/api/profile/';

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        const decoded = jwt_decode(token);
        const user_id = decoded.user_id;
        try {
          const response = await axios.get(`${baseURL}${user_id}/`);
          setProfile(response.data);
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      }
    };
    fetchProfile();
  }, [token, axios]);

  useEffect(() => {
    if (showScannerModal) {
      const codeReader = new BrowserQRCodeReader();
      const videoElement = document.getElementById('video');

      const startScanner = async () => {
        try {
          await codeReader.decodeFromVideoDevice(undefined, videoElement, (result, error) => {
            if (result) {
              setQrCodeResult(result.text);
              console.log('QR Code Result:', result.text); // Print QR code result to console

              // Stop the video stream
              const stream = videoElement.srcObject;
              if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                videoElement.srcObject = null;
              }

              // Clean up
              codeReader.reset();
              handleCloseScannerModal();
            }
            if (error) {
              console.error(error);
              // Optional: handle error case if needed
            }
          });
        } catch (error) {
          console.error('Error starting QR code reader:', error);
          handleCloseScannerModal();
        }
      };

      startScanner();
    }
  }, [showScannerModal]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img style={{ width: '120px', padding: '6px' }} src="..\src\views\style\logo.png" alt="ChatWeb" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
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
                    <button className="nav-link btn btn-link" onClick={handleShowProfileModal} style={{ cursor: "pointer" }}>
                      <i className="fas fa-user-circle"></i> My QR
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={handleShowScannerModal} style={{ cursor: "pointer" }}>
                      <i className="fas fa-qrcode"></i> Scan QR
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={logoutUser} style={{ cursor: 'pointer' }}>
                      <i className='fas fa-sign-out-alt'></i> Logout
                    </button>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile QR Code Modal */}
      {showProfileModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your QR Code</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCloseProfileModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center">
                {profile && profile.qr_code ? (
                  <img src={profile.qr_code} alt="QR Code" />
                ) : (
                  <p>No QR Code available.</p>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseProfileModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Scanner Modal */}
      {showScannerModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Scan QR Code</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCloseScannerModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center">
                <video id="video" style={{ width: '100%' }}></video>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseScannerModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Display QR Code Result */}
      {qrCodeResult && (
        <div className="alert alert-success" role="alert">
          QR Code Result: {qrCodeResult}
        </div>
      )}
    </div>
  );
}

export default Navbar;
