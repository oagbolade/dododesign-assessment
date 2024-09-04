"use client";
import React, { useState } from "react";
import { NotificationIcon } from "@/assets/Icons";
import { FiSearch } from "react-icons/fi";
import Avatar from "./../assets/avatar.png";
import Image from "next/image";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between bg-white p-4 border-solid border-2 border-gray-200 border-l-0">
      <div className="flex-1"></div>

      <div className="relative mr-16">
        <input
          type="text"
          placeholder="Search"
          className="text-black h-10 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-gray-400 transition w-64"
        />
        <FiSearch className="absolute text-sm left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="flex items-center space-x-4 mr-6 sm:ml-4">
        <div className="mx-8">
          <NotificationIcon />
        </div>
        <Image src={Avatar} alt="Avatar" />
      </div>
    </header>
  );
}
