/** @format */

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setShowBanner(false);
  };

  const handleReject = () => {
    Cookies.set("cookie_consent", "rejected", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-teal text-white p-6 z-50 rounded-t-lg shadow-lg">
      <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left mb-4 sm:mb-0 lg:text-[17px] font-montserrat ">
          We use cookies to improve your experience. By using our site, you
          agree to our{" "}
          <Link to="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleReject}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition duration-300 ease-in-out font-montserrat"
          >
            I Reject
          </button>
          <button
            onClick={handleAccept}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition duration-300 ease-in-out font-montserrat"
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
