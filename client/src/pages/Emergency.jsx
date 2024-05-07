import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/emergency.css";

const Emergency = () => {
  const [locationPermission, setLocationPermission] = useState(false);
  const [clientLocation, setClientLocation] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [doctorMessage, setDoctorMessage] = useState("");
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState("");
  const [timer, setTimer] = useState(10); // Timer set to 10 seconds
  const navigate = useNavigate();

  useEffect(() => {
    requestLocationPermission();
    checkLoggedIn();
    startTimer();
  }, []);

  // Function to request location permission
  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setClientLocation({ latitude, longitude });
          setLocationPermission(true);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationPermission(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLocationPermission(false);
    }
  };

  // Function to check if user is logged in
  const checkLoggedIn = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  // Function to start timer
  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      if (locationPermission) {
        if (isLoggedIn) {
          sendEmergencyNotification();
        } else {
          sendLocationToTeam();
          alert("Please log in to start a chat.");
        }
      } else {
        if (isLoggedIn) {
          sendUserIdToTeam();
        } else {
          // give an option to call 108
          setEmergencyPhoneNumber("108");
        }
      }
    }, 10000); // 10 seconds
  };

  // Function to send emergency notification to doctor
  const sendEmergencyNotification = async () => {
    try {
      // Send location to backend
      await axios.post("/emergency/sendLocation", {
        latitude: clientLocation.latitude,
        longitude: clientLocation.longitude,
      });
    } catch (error) {
      console.error("Error sending emergency notification:", error);
    }
  };

  // Function to send user id to team
  const sendUserIdToTeam = async () => {
    try {
      // Send user id to backend
      const userId = "123456"; //
      // Send userId to backend
      await axios.post("/emergency/sendUserId", { userId });
    } catch (error) {
      console.error("Error sending user id:", error);
    }
  };

  // Function to send location to team
  const sendLocationToTeam = async () => {
    try {
      // Send location to backend
      await axios.post("/emergency/sendLocation", {
        latitude: clientLocation.latitude,
        longitude: clientLocation.longitude,
      });
    } catch (error) {
      console.error("Error sending location:", error);
    }
  };

  // Function to handle doctor's message to the client
  const handleDoctorMessage = (e) => {
    setDoctorMessage(e.target.value);
  };

  // Function to send message from doctor to client
  const sendMessageToClient = () => {
    // Logic to send message to client
    // You can use any messaging service or backend API here
    alert(`Message sent to client: ${doctorMessage}`);
    setDoctorMessage(""); // Clear message input after sending
  };

  return (
    <>
      <div className="top-bar">
        <NavLink to={"/"} className="btn">
          Home
        </NavLink>
        {!isLoggedIn && (
          <NavLink to={"/login"} className="btn">
            Login
          </NavLink>
        )}
      </div>
      <section className="emergency-section flex-center">
        <div className="emergency-container flex-center">
          <h2>Emergency Assistance</h2>
          <p>Time remaining: {timer} seconds</p>
          {locationPermission && (
            <>
              {isLoggedIn && (
                <>
                  <button onClick={sendEmergencyNotification} className="btn">
                    Call Emergency
                  </button>
                  {/* <button onClick={navigateToChat} className="btn">
                    Start Chat
                  </button> */}
                </>
              )}
              {emergencyPhoneNumber && (
                <p>Call emergency number: {emergencyPhoneNumber}</p>
              )}
              <div>
                <h3>Doctor's Console</h3>
                <textarea
                  value={doctorMessage}
                  onChange={handleDoctorMessage}
                  placeholder="Type your message to the client..."
                />
                <button onClick={sendMessageToClient} className="btn">
                  Send Message to Client
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Emergency;
