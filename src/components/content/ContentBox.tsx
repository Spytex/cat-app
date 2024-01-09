"use client";

import React from "react";

interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
  return (
    <div className="flex flex-col space-y-[20px] p-[20px] rounded-[20px] bg-white dark:bg-gray-300 h-full">
      {children}
    </div>
  );
};

export default ContentBox;
