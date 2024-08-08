/** @format */

import React from "react";
import { termsAndConditionsContent } from "../constants/termsAndConditions";
const TermsAndConditions = () => {
  return (
    <div
      
      dangerouslySetInnerHTML={{ __html: termsAndConditionsContent }}
    />
  );
};

export default TermsAndConditions;
