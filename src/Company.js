import * as React from 'react'
import {
  useParams
} from "react-router-dom";

const Company = () => {
  let { companyId } = useParams();

  return (
    <div>company: {companyId}</div>
  );
};

export default Company;
