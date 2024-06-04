import React from "react";
import "@styles/globals.css";

import Heading from "@components/Heading";
import SSbar from "@components/SSbar";

export const metadata = {
  title: "ai",
  description: "oil and gas",
};
const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex-row flex ">
          <SSbar />
          <div className="w-full  bg-stone-200">
            <Heading />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default layout;
