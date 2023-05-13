import React from "react";

export const Success = ({ onClickBack, count }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>An invitation has been sent to all {count} users.</p>
      <button className="send-invite-btn" onClick={() => onClickBack()}>
        Back
      </button>
    </div>
  );
};
