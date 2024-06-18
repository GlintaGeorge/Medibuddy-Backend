import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosJWT from '../../utils/axiosService';
import { USER_API } from '../../constants';
import { DepartmentInterface } from '../../types/departmentInterface';
import styled from 'styled-components';

// Styled components for setting overflow-x hidden
const Container = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

const Body: React.FC = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [departments, setDepartments] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axiosJWT.get(`${USER_API}/doctors`);
        const approvedDoctors = response.data.doctors.filter((doctor: { status: string; }) => doctor.status === 'approved');
        setDoctors(approvedDoctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <Container>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl text-fuchsia-800 font-bold mb-5">Our Services</h1>
        
        {/* Online and Offline Consultation Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* Online Consultation Card */}
          <Link to="/user/online-consultation" className="max-w-xs w-full">
            <div className="bg-gray-100 rounded-lg shadow-2xl border border-gray-300 flex flex-col justify-center items-center cursor-pointer">
              <img src="https://plus.unsplash.com/premium_photo-1661671883217-0b7e7dd5003a?q=80&w=1770&auto=format&fi" alt="Online Consultation" className="h-72 w-full object-cover rounded-t-lg mt-7" />
              <div className="p-4 text-center">
                <h2 className="text-lg text-fuchsia-800 font-semibold mb-2">Online Consultation</h2>
                <p className="text-fuchsia-500 mb-4">Book an appointment for online consultation.</p>
              </div>
            </div>
          </Link>
          
          {/* Offline Consultation Card */}
          <Link to="/user/offline-consultation" className="max-w-xs w-full">
            <div className="bg-gray-100 rounded-lg shadow-2xl border border-gray-300 flex flex-col justify-center items-center cursor-pointer">
              <img src="https://plus.unsplash.com/premium_photo-1661699717204-82c08926c77a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Offline Consultation" className="h-72 w-full object-cover rounded-t-lg mt-7" />
              <div className="p-4 text-center">
                <h2 className="text-lg text-fuchsia-800 font-semibold mb-2">24/7 Health Support</h2>
                <p className="text-fuchsia-500 mb-4">Reliable medical advice and assistance whenever you need it</p>
              </div>
            </div>
          </Link>

          {/* Offline Consultation Card */}
          <Link to="/user/offline-consultation" className="max-w-xs w-full">
            <div className="bg-gray-100 rounded-lg shadow-2xl border border-gray-300 flex flex-col justify-center items-center cursor-pointer">
              <img src="https://media.istockphoto.com/id/1473559425/photo/female-medical-practitioner-reassuring-a-patient.jpg?s=612x612&w=0&k=20&c=kGbm-TE5qdppyyiteyip7_CzKLktyPrRuWD4Zz2EcqE=" alt="Offline Consultation" className="h-72 w-full object-cover rounded-t-lg mt-7" />
              <div className="p-4 text-center">
                <h2 className="text-lg text-fuchsia-800 font-semibold mb-2">Offline Consultation</h2>
                <p className="text-fuchsia-500 mb-4">Book an appointment for offline consultation.</p>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Doctors Section */}
        <h1 className="text-2xl text-fuchsia-800 font-bold mb-5">Our Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <Link key={doctor._id} to={`/user/doctor/${doctor._id}`}>
              <div className="bg-fuchsia-100 rounded-lg shadow-xl border border-gray-300 flex flex-col justify-center items-center cursor-pointer">
                <img src={doctor.profileImage} alt="Doctor" className="h-52 w-full object-cover rounded-t-lg mt-7" />
                <div className="p-4 text-center">
                  <h2 className="text-lg text-fuchsia-800 font-semibold mb-2">{doctor.doctorName}</h2>
                  <p className="text-fuchsia-500 mb-2">{doctor.department}</p>
                  <p className="text-fuchsia-500 mb-4">{doctor.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Body;
