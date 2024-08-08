/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  HeroSection,
  AboutUs,
  Contact,
  Footer,
  Download,
  After,
  ConnectPay,
  Bar,
} from "./components";
import PreLoader2 from "./components/Loader2";
import { useEffect, useState } from "react";
import PrivacyPolicyConnectPlus from "./components/PrivacyPolicy";
import TermsAndConditionsConnectPlus from "./components/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import BlogSection from "./components/BlogSection";
import BlogPage from "./components/BlogPage";
import { processPosts } from "./utils/blogApi";
import BlogDetails from "./components/BlogDetails";

const App = () => {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const processedPosts = await processPosts();
      setPosts(processedPosts);
    };

    getPosts();
  }, []);

  return (
    <BrowserRouter >
      <div
        className={`relative z-0 bg-white ${
          isPreloaderComplete ? "" : "overflow-hidden h-screen"
        }`}
      >
        {!isPreloaderComplete && (
          <PreLoader2 onComplete={() => setIsPreloaderComplete(true)} />
        )}
        {isPreloaderComplete && (
          <>
            <div className="overflow-hidden">
              <ScrollToTop>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Navbar />
                        <div className="overflow-hidden">
                          <HeroSection />
                          <AboutUs />
                          <Download />
                          <After />
                          <ConnectPay />
                          <Bar />
                          {/* <BlogSection posts={posts} /> */}
                          <Contact />
                          <Footer />
                          {/* <CookieConsent /> */}
                        </div>
                      </>
                    }
                  />
                  <Route
                    path="/blogs"
                    element={
                      <>
                        <BlogPage posts={posts} />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="/blog/:id"
                    element={
                      <>
                        <BlogDetails />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="/privacy-policy"
                    element={<PrivacyPolicyConnectPlus />}
                  />
                  <Route
                    path="/terms-and-conditions"
                    element={<TermsAndConditionsConnectPlus />}
                  />
                </Routes>
                <CookieConsent />
              </ScrollToTop>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
