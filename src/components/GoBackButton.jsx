import React from "react";
import { useNavigate } from "react-router";

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button
        className="btn btn-outline btn-sm md:btn-wide"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default GoBackButton;
