// components/UserContext.jsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();
  const storedUser = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  useEffect(() => {
    // Update localStorage whenever user state changes
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }

    // Check if token or user data is missing on mount
    if (!storedToken || !storedUser) {
      router.push("/login");
    }
  }, [user, storedToken, storedUser, router]);

  const login = async (token, email) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Fetched user data:", data); // Debug log
      if (data) {
        const userData = {
          displayName: data.username || data.email.split("@")[0],
          email: data.email,
          joined: data.createdAt || "April 1, 2025",
        };
        localStorage.setItem("token", token); // Store token
        setUser(userData);
      } else {
        throw new Error("Invalid user data");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      logout(); // Clear any existing data and redirect on error
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};