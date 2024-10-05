import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './components/Navbar/Navbar';
import Dict from './components/Translate/dict';
import Translate from './components/Translate/Translate';
import Learn from './components/Learn/Learn';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import TypeIt from "typeit-react";
import About from './components/About/About';
import Test from './components/test/Test';
import Signup from './Signup';
import Login from './Login';

const Home = () => {

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loggedInPressed, setLoggedInPressed] = useState(false);
  const [signUpPressed, setSignUpPressed] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('userLoggedIn');
    if (loggedIn) {
      setUserLoggedIn(true);
    }

    const timeout = setTimeout(() => {
      handleLogout();
    }, 15 * 60 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLogon = () => {
    setLoggedInPressed(true);
    setSignUpPressed(false);
  };

  const handleSignUp = () => {
    setUserLoggedIn(false);
    setLoggedInPressed(false);
    setSignUpPressed(true);
  };

  const handleLogout = () => {
    setUserLoggedIn(false);
    setLoggedInPressed(false);
    localStorage.removeItem('userLoggedIn');
  };

  const handleUserLoggedIn = () => {
    setUserLoggedIn(true);
    setLoggedInPressed(true);
    setSignUpPressed(false);
    localStorage.setItem('userLoggedIn', 'true');
  };

  return (
    <>
      <Navbar LoggedOut={handleLogout} />
      <div id ="home" className="home-banner">
        <div className="home-banner-text">
          <p id="hdesc">
            <TypeIt
              options={{
                strings: ["मध्य प्रदेश के मालवा क्षेत्र की लोकप्रियता उसकी प्राचीन सांस्कृतिक विरासत और प्राकृतिक सौंदर्य के कारण बढ़ी है। यहां के ऐतिहासिक स्थल, प्राचीन मंदिर, विविध रसोईय विविधता, और प्राकृतिक विविधता लोगों को आकर्षित करते हैं। साथ ही, मालवा क्षेत्र की आर्थिक विकास और पर्यटन सुविधाएँ भी लोगों को आकर्षित करती हैं।"],
                speed: 20,
                waitUntilVisible: true,
              }}
            />
          </p>
        </div>
      </div>
      <About />
      <Learn />
      {/* <Translator/> */}
      <Test />
      <Translate />\
      <Dict />
      <Contact />
      <Footer />
      {!userLoggedIn && !loggedInPressed && <Signup onClose={handleLogon} />}
      {!userLoggedIn && !signUpPressed && loggedInPressed && <Login onClose={handleSignUp} LoggedIn={handleUserLoggedIn} />}
    </>
  );
}

export default Home;
