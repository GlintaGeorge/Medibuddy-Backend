import { Routes, Route } from "react-router-dom";
import ProtectedRoute, { AdminProtectedRoute, DoctorProtectedRoute } from "./ProtectedRoute";
import { DoctorPublicRoute, PublicRoute } from "./PublicRoutes";
import Loader from "../components/Shimmers/Loader";
import {Suspense, lazy} from "react";




//User
const Register = lazy(()=>import("../pages/user/Register"));
const VerifyOtp = lazy(()=>import("../pages/user/VerifyOTP"));
const NotFoundPage = lazy(() => import("../pages/Error404"));
const Login = lazy(()=>import("../pages/user/Login"));
const Home = lazy(() => import("../pages/user/Home"));
const ForgotPassword = lazy(() => import("../pages/user/ForgotPassword"));
const ResetPassword = lazy(()=>import("../pages/user/ResetPassword"));
const ProfileUser = lazy(()=>import("../pages/user/Profile"));
const DoctorDetailsUser = lazy(()=>import("../pages/user/SingleDoctorDetails"));
const DoctorList = lazy(()=>import("../pages/user/DoctorPage"));
const AppoinmentBookingPage = lazy(()=>import("../pages/user/Appointment"));
const AppoinmentOnlineBookingPage = lazy(()=>import("../pages/user/OnlineAppointment"));
const CheckoutPage = lazy(()=>import('../pages/user/CheckOutPage'))
const PaymentCompleted = lazy(() => import("../pages/user/PaymentCompleted"));
const AppoinmentDetails = lazy(()=>import("../pages/user/AppoinmentDetails"));
const AppoinmentListPage = lazy(()=>import("../pages/user/GetAppointmentsAll"));
const WalletPage = lazy(()=>import("../pages/user/Wallet"));
const Transaction = lazy(()=>import("../pages/user/WalletTransation"));
const Chat = lazy(()=>import("../pages/user/Chat"));
const PatientRights = lazy(()=>import("../pages/user/PatientRights"));
const AboutPage = lazy (()=> import('../pages/user/AboutUs'))
const ContactPage = lazy (()=> import('../pages/user/contactPage'))

//Doctor
const DoctorSignup = lazy(()=>import("../pages/doctor/DoctorSignup"))
const EmailVerificationPage = lazy(() => import("../pages/doctor/EmailVerification")); 
const DoctorLogin = lazy(()=>import("../pages/doctor/DoctorLogin"))
const DoctorhomePage = lazy(()=>import("../pages/doctor/Doctordashbord"))
const ProfileDoctor = lazy(()=>import("../pages/doctor/Profile"));
const DoctorSlotPage = lazy(()=>import("../pages/doctor/SlotPage"));
const DoctorStatus = lazy(()=>import("../pages/doctor/DoctorStatus"));
const PatientListPage = lazy(()=>import("../pages/doctor/PatientListPages"));
const SinglePagePatient =lazy(()=>import("../pages/doctor/SinglePatientList"));
const DoctorChat=lazy(()=>import("../pages/doctor/Chat"));

//admin
const AdminLogin = lazy(()=>import("../pages/admin/AdminLogin"));
const AdminDashboard = lazy(()=>import ("../pages/admin/AdminDashboard"));
const AdminUserList = lazy(()=>import ("../pages/admin/UserList"));
const AdminDoctorList = lazy(()=>import ("../pages/admin/DoctorList"));
const AdminDoctorDetails = lazy(()=>import ("../pages/admin/DoctorDetails"));
const VerificationDoctor = lazy(()=>import("../pages/admin/VerificationDoctor"));
const RequestedDoctors = lazy(()=>import("../pages/admin/RequestedDoctors"))
const AdminDepartmentList = lazy(()=>import ("../pages/admin/DepartmentList"));
const AddDepartmentList = lazy(()=>import ("../pages/admin/AddDepartmentPage"));
const EditDepartment = lazy(()=>import("../pages/admin/EditDepartment"))
export const MainRouter = () => {
    return (
        <>
            <Suspense fallback={<Loader />}> 
                <Routes>
                    
                    
                    {/* public userRoutes */}
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/patientRights" element={<PatientRights />} />
                    <Route path="/aboutus" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    <Route path="" element={<PublicRoute />}>
                    <Route path="/register" element={<Register />} />
                    <Route path ="/verify_otp" element={<VerifyOtp/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/forgot-password" element ={<ForgotPassword/>} />
                    <Route path="/reset_password/:id" element ={<ResetPassword/>}/>
                    </Route>

                     {/* Protected user  route */}

                    <Route path="" element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<ProfileUser />} />
                    <Route path="/doctors/:id" element={<DoctorDetailsUser />} />
                    <Route path="/doctors" element={<DoctorList />} />
                    <Route path="/appoinmentOffline/:id" element={<AppoinmentBookingPage />} />
                    <Route path="/appoinmentOnline/:id" element={<AppoinmentOnlineBookingPage />} />
                    <Route path="/user/checkout/:id" element={<CheckoutPage />} />
                    <Route path="/payment_status/:id" element={<PaymentCompleted />} />
                    <Route path="/appoinmentDetails/:id" element={<AppoinmentDetails/>} />
                    <Route path ="/appoinmentlist" element={<AppoinmentListPage/>}/>
                    <Route path="/wallet" element={<WalletPage/>}/>
                     <Route path="/walletHistory" element={<Transaction/>}/>
                     <Route path="/chat" element={<Chat />} />
                    </Route>
                   
                    {/*Doctor Routes*/ }

                <Route path="/doctor" element={<DoctorhomePage/>}/>
                


                {/*Doctor Routes - public*/ }
                 <Route  element={<DoctorPublicRoute />}>
                 <Route path="/doctor/login" element={<DoctorLogin/>}/>
                {/* <Route path="/doctor" element={<DoctorhomePage/>}/> */}
                <Route path="/doctor/signup" element={<DoctorSignup/>}/>
                <Route path="/doctor/verify_token/:token" element ={<EmailVerificationPage/>}/>
                <Route path="/doctor/login" element={<DoctorLogin/>}/>
                 </Route>

                     {/*Doctor Routes - private*/ }
                    <Route path="" element={<DoctorProtectedRoute />}>
                    {/* <Route path="/doctor" element={<DoctorhomePage/>}/> */}
                    <Route path="/doctor/profile" element ={<ProfileDoctor/>}/>
                    <Route path="/doctor/slot" element ={<DoctorSlotPage/>}/>
                    <Route path="/doctor/status/:doctorId" element={<DoctorStatus/>}/>
                    <Route path="/doctor/patientList" element={<PatientListPage/>}/>
                    <Route path="/patient-details/:id" element={<SinglePagePatient/>} />
                    <Route path="/doctor/chat" element={<DoctorChat/>}/>
                    </Route>

                    {/*Admin Routes*/}

                    <Route path="" element={<PublicRoute />}>
                    <Route path="/admin/login" element={<AdminLogin/>}/>
                    </Route>

                    {/* admin protected Route  */}
                    <Route path="" element={<AdminProtectedRoute />}>
                    <Route path="/admin" element={<AdminDashboard/>}/>
                    <Route path="/admin/users" element={<AdminUserList/>}/>
                    <Route path="/admin/doctors" element={<AdminDoctorList/>}/>
                    <Route path="/admin/requesteddoctors" element={<RequestedDoctors/>}/>
                    <Route path="/admin/doctors/:id" element={<AdminDoctorDetails/>}/>
                    <Route path="/admin/doctors/:id/verification" element={<VerificationDoctor/>}/>
                    <Route path="/admin/department" element ={<AdminDepartmentList/>}/>
                    <Route path="/admin/addDepartment" element ={<AddDepartmentList/>}/>
                    <Route path="/admin/department/:id" element={<EditDepartment/>} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />


                    </Routes>
            </Suspense> 
        </>
    );
};