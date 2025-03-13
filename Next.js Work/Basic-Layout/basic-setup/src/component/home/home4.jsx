'use client'

import { toggleTheme } from "@/redux-counter/theme/themeSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const home4 = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`${theme} min-h-screen`}>
      <button onClick={() => dispatch(toggleTheme())} className="p-2 bg-gray-300 rounded hover:bg-gray-400 transition">
        {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
};

export default home4;

