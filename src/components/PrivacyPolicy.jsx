/** @format */

import React from "react";
import { privacyPolicyContent } from "../constants/privacyPolicyContent";

const PrivacyPolicy = () => {
  return <div dangerouslySetInnerHTML={{ __html: privacyPolicyContent }} />;
};

export default PrivacyPolicy;
