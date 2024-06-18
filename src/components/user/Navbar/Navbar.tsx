import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducer/reducer';
import showToast from '../../../utils/toaster';
import { clearUser } from '../../../redux/slices/UserSlice';
import logo from '../../../assets/images/logo.png'; // Import the logo image

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.UserSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    showToast("Logged out successfully", "success");
    navigate('/user/login');
  };

  return (
    <nav className="bg-white shadow-lg w-full">
      <div className="px-4">
        <div className="flex justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="logo" className="h-8 mr-2" />
            <Link to="/" className="text-fuchsia-950 font-bold text-xl">MediBuddy</Link>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center">
          <div className="absolute top-1/2 ml-72 transform -translate-x-1/2 -translate-y-1/2 text-left animate-fadeInOut">
  <h1 className="text-3xl font-bold text-white mb-4 mr-9">Your Trusted</h1>
  <h2 className="text-3xl font-bold text-white mb-4">Buddy For Better Health</h2>
  {/* <h3 className="text-3xl font-bold text-white mb-8 ml-14">For Better Health</h3> */}
</div>



            {/* Profile and Login/Logout */}
            <div className="flex items-center">
              {user.isAuthenticated && user.role === 'user' ? (
                <>
                  <Link to="/user/profile" className="text-fuchsia-950 hover:bg-fuchsia-200 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
                  <Link to="/user/doctor" className="text-fuchsia-950 hover:bg-fuchsia-200 px-3 py-2 rounded-md text-sm font-medium">Doctors</Link>
                  <Link
                  to="/user/appoinmentlist"
                  className="px-3 py-2 rounded-md text-sm font-medium text-fuchsia-950 hover:bg-fuchsia-200 md:ml-2"
                >
                  Appointments
                </Link>
                  <button onClick={handleLogout} className="text-fuchsia-950 px-3 py-2  text-sm font-medium bg-gray-100 hover:bg-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:ring-opacity-50 rounded-md ml-2">Logout</button>
                </>
              ) : (
                <Link to="/user/login" className="text-white px-3 py-2  text-sm font-medium bg-fuchsia-950 hover:bg-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:ring-opacity-50 rounded-md ml-2">Login</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
