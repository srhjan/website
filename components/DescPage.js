import React from "react";

export default ({ children }) => {
  return (
    <div>
      <div className="flex flex-col" style={{ height: 140 }}>
        {children}
      </div>
    </div>
  );
};
