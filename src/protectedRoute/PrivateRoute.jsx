import React, { useState } from "react";

const PrivateRoute = ({ children }) => {
  const [loading] = useState(false);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex w-10/12 mx-auto flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }
  return children;
};

export default PrivateRoute;
