import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import axiosJWT from '../../utils/axiosService';
import { CHAT_API} from '../../constants';
import { useParams } from 'react-router-dom';

interface Notification {
  senderName: string;
  content: string;
  createdAt: string;
}

interface UserNotificationProps {
  setNotification: (value: boolean) => void;
}

const UserNotification: React.FC<UserNotificationProps> = ({ setNotification }) => {
  const [messages, setMessages] = useState<Notification[]>([]);
  const [clear, setClear] = useState(false);
//   const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  


  useEffect(() => {
    const fetchNotification = async () => {
    
        try {
            const res = await axiosJWT.post(`${CHAT_API}/getUserNotifications`, {
              userId: id // Replace `id` with the actual user ID
            });

        console.log(res,"response in fetch notification.........")
      
        
        setMessages(res.data);
      } catch (error) {
        console.log("Error occurred:", error);
      }
    };

    fetchNotification();
  }, [clear, id]);

  const clearNotification = async () => {
    try {
      const res = await axiosJWT.post(`${CHAT_API}/clearNotification`);

      console.log(res)
    //   const result = await res.json();
    //   if (!res.ok) {
    //     throw new Error(result.message);
    //   }

      setClear(!clear);
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  return (
    <div>
      <div
        className="w-full absolute z-10 right-0 h-full transform translate-x-0 transition ease-in-out duration-700"
        id="notification"
      >
        <div className="2xl:w-4/12 bg-gray-50 h-screen overflow-y-auto p-8 absolute right-0">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold leading-6 text-gray-800">
              Notifications
            </p>
            <div
              className="cursor-pointer"
              onClick={() => setNotification(false)}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {messages.length > 0 ? (
            <>
              {messages.map((el, index) => (
                <div
                  key={index}
                  className="w-full p-3 mt-4 bg-white rounded flex"
                >
                  <div className="w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.30325 12.6667L1.33325 15V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V12C14.6666 12.1768 14.5963 12.3464 14.4713 12.4714C14.3463 12.5964 14.1767 12.6667 13.9999 12.6667H4.30325ZM5.33325 6.66667V8H10.6666V6.66667H5.33325Z"
                        fill="#4338CA"
                      />
                    </svg>
                  </div>
                  <div className="pl-3">
                    <p className="text-sm leading-none">
                      <span className="text-indigo-700">{el.senderName}</span>{" "}
                      messaged you :{" "}
                      <span className="text-indigo-700" title={el.content}>
                        {el.content.length > 10
                          ? `${el.content.slice(0, 10)}...`
                          : el.content}
                      </span>{" "}
                    </p>
                    <p className="text-xs leading-3 pt-1 text-gray-500">
                      {/* {dayjs(el.createdAt).format("h:mm A")} */}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex justify-end text-[12px]">
                <button
                  onClick={clearNotification}
                  className="bg-blue-400 text-white p-1 rounded-sm mt-5 hover:scale-105 transition duration-100 ease-in-out"
                  style={{ lineHeight: "normal" }}
                >
                  Clear all
                </button>
              </div>
            </>
          ) : (
            <div className="text-sm text-gray-500 mt-4">No notifications</div>
          )}
          <div className="flex items-center justify-between">
            <hr className="w-full" />
            <p className="text-sm flex flex-shrink-0 leading-normal px-3 py-16 text-gray-500">
              That's it for now :
            </p>
            <hr className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotification;
