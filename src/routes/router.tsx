import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoutes";
import ProtectedRoute from "./ProtectedRoute";
// import App from "../App";


import {Suspense, lazy} from "react";
//User
const Register = lazy(()=>import("../pages/user/Register"));
const VerifyOtp = lazy(()=>import("../pages/user/VerifyOTP"));
const Login = lazy(()=>import("../pages/user/Login"));
const Home = lazy(() => import("../pages/user/Home"));
const ForgotPassword = lazy(() => import("../pages/user/forgotPassword"));
const ResetPassword = lazy(()=>import("../pages/user/resetPassword"));
const ProfileUser = lazy(()=>import("../pages/user/profile"));
const DoctorDetailsUser = lazy(()=>import("../pages/user/singleDoctorDetails"));
const DoctorList = lazy(()=>import("../pages/user/DoctorPage"));
const AppoinmentBookingPage = lazy(()=>import("../pages/user/Appointment"));
const AppoinmentOnlineBookingPage = lazy(()=>import("../pages/user/OnlineAppointment"));
const PaymentCompleted = lazy(() => import("../pages/user/paymentCompleted"));
const AppoinmentDetails = lazy(()=>import("../pages/user/appoinmentDetails"));
const AppoinmentListPage = lazy(()=>import("../pages/user/getAppointmentsAll"));



//Doctor
const DoctorSignup = lazy(()=>import("../pages/doctor/doctorSignup"))
const EmailVerificationPage = lazy(() => import("../pages/doctor/emailVerification")); 
const DoctorLogin = lazy(()=>import("../pages/doctor/doctorLogin"))
const DoctorhomePage = lazy(()=>import("../pages/doctor/doctordashbord"))
const ProfileDoctor = lazy(()=>import("../pages/doctor/profile"));
const DoctorSlotPage = lazy(()=>import("../pages/doctor/slotPage"));
const DoctorStatus = lazy(()=>import("../pages/doctor/doctorStatus"));
//admin
const AdminLogin = lazy(()=>import("../pages/admin/AdminLogin"));
const AdminDashboard = lazy(()=>import ("../pages/admin/AdminDashboard"));
const AdminUserList = lazy(()=>import ("../pages/admin/userList"));
const AdminDoctorList = lazy(()=>import ("../pages/admin/doctorList"));
const AdminDoctorDetails = lazy(()=>import ("../pages/admin/doctorDetails"));
const VerificationDoctor = lazy(()=>import("../pages/admin/verificationDoctor"));
const RequestedDoctors = lazy(()=>import("../pages/admin/requestedDoctors"))
const AdminDepartmentList = lazy(()=>import ("../pages/admin/departmentList"));
const AddDepartmentList = lazy(()=>import ("../pages/admin/AddDepartmentPage"));
const EditDepartment = lazy(()=>import("../pages/admin/editDepartment"))
export const MainRouter = () => {
    return (
        <>
            <Suspense fallback={<h1>Loading. . . </h1>}> 
                <Routes>
                    
                    
                    {/* userRoutes */}
                    
                    <Route path="/" element={<Home />} />
                    <Route path="" element={<PublicRoute />}/>
                    <Route path="/user/register" element={<Register />} />
                    <Route path ="user/verify_otp" element={<VerifyOtp/>}/>
                    <Route path="/user/login" element={<Login/>}/>
                    <Route path="/user/forgot-password" element ={<ForgotPassword/>} />
                    <Route path="/user/reset_password/:id" element ={<ResetPassword/>}/>
                    

                     {/* Protected user  route */}

                    <Route path="" element={<ProtectedRoute />}/>
                    <Route path="/user/profile" element={<ProfileUser />} />
                    <Route path="/user/doctor/:id" element={<DoctorDetailsUser />} />
                    <Route path="/user/doctor" element={<DoctorList />} />
                    <Route path="/user/appoinmentOffline/:id" element={<AppoinmentBookingPage />} />
                    <Route path="/user/appoinmentOnline/:id" element={<AppoinmentOnlineBookingPage />} />
                    <Route path="/payment_status/:id" element={<PaymentCompleted />} />
                    <Route path="/appoinmentDetails/:id" element={<AppoinmentDetails/>} />
                    <Route path ="/user/appoinmentlist" element={<AppoinmentListPage/>}/>

                   


                    {/*Doctor Routes*/ }
                 
                    <Route path="/doctor/signup" element={<DoctorSignup/>}/>
                    <Route path="/doctor/verify_token/:token" element ={<EmailVerificationPage/>}/>
                    <Route path="/doctor/login" element={<DoctorLogin/>}/>
                 
                    <Route path="/doctor" element={<DoctorhomePage/>}/>
                    <Route path="/doctor/profile" element ={<ProfileDoctor/>}/>
                    <Route path="/doctor/slot" element ={<DoctorSlotPage/>}/>
                    <Route path="/doctor/status/:doctorId" element={<DoctorStatus/>}/>
                    

                    {/*Admin Routes*/}

                    <Route path="/admin/login" element={<AdminLogin/>}/>
                    <Route path="/admin" element={<AdminDashboard/>}/>
                    <Route path="/admin/users" element={<AdminUserList/>}/>
                    <Route path="/admin/doctors" element={<AdminDoctorList/>}/>
                    <Route path="/admin/requesteddoctors" element={<RequestedDoctors/>}/>
                    <Route path="/admin/doctors/:id" element={<AdminDoctorDetails/>}/>
                    <Route path="/admin/doctors/:id/verification" element={<VerificationDoctor/>}/>
                    <Route path="/admin/department" element ={<AdminDepartmentList/>}/>
                    <Route path="/admin/addDepartment" element ={<AddDepartmentList/>}/>
                    <Route path="/admin/department/:id" element={<EditDepartment/>} />


                    </Routes>
            </Suspense> 
        </>
    );
};