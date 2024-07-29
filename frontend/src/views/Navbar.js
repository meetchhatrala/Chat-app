import { useContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
// import QrScanner from 'react-qr-scanner'; // Import a QR scanner library


function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [QrScannerComponent, setShowQrScannerModal] = useState(false);
  let user_id = null;
  if (token) {
    const decoded = jwt_decode(token);
    user_id = decoded.user_id;
  }

  const handleShowModal = () => setShowModal(true); // Function to show the modal
  const handleCloseModal = () => setShowModal(false); // Function to close the modal

  const handleShowQrScannerModal = () => setShowQrScannerModal(true); // Function to show QR scanner modal
  const handleCloseQrScannerModal = () => setShowQrScannerModal(false); // Function to close QR scanner modal

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{ width: "120px", padding: "6px" }} src="../src/views/style/logo.png" alt="ChatWeb" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/"> <i className='fas fa-home'></i> Home</Link>
              </li>
              {token === null &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login"><i className='fas fa-sign-in-alt'></i> Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
                  </li>
                </>
              }

              {token !== null &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/inbox"> <i className='fas fa-envelope'></i> Inbox</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/qr-scanner">
                      <i className="fas fa-qrcode"></i> QR Scanner
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleShowModal} style={{ cursor: "pointer" }}>
                      <i className="fas fa-user-circle"></i> My QR
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={logoutUser} style={{ cursor: "pointer" }}> <i className='fas fa-sign-out-alt'></i> Logout</a>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your QR Code</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center">
                <QRCode value={user_id} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* QR Scanner Modal */}
      {QrScannerComponent && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">QR Scanner</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCloseQrScannerModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center">
                <QrScanner
                  delay={300}
                  onScan={(result) => console.log(result)}
                  onError={(error) => console.error(error)}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseQrScannerModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    {/* </div> */}
    </div>
  );
}


export default Navbar;
