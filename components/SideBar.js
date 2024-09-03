import React from "react";
import { MiniSideBar } from "./MiniSideBar";
import {
  HomeIcon,
  ProjectsIcon,
  RecentsIcon,
  SettingsIcon,
  StarredIcon,
  SupportIcon,
  ZadwaxIcon,
} from "@/assets/Icons";

export const SideBar = () => {
  return (
    <>
      <MiniSideBar />
      <aside className="w-64 p-4 border-solid border-2 border-gray-200">
        <div className="text-2xl mb-6">
          <ZadwaxIcon />
        </div>
        <nav>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-black text-sm py-2 px-4 rounded-lg bg-violet-100"
              >
                <span>
                  <HomeIcon />
                </span>{" "}
                <span className="ml-6">Home</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-black text-sm py-2 px-4 rounded-lg hover:bg-violet-100"
              >
                <span>
                  <RecentsIcon />
                </span>{" "}
                <span className="ml-6">Recents</span>
              </a>
            </li>
            <li className="mb-=2">
              <a
                href="#"
                className="flex items-center text-black text-sm py-2 px-4 rounded-lg hover:bg-violet-100"
              >
                <span>
                  <StarredIcon />
                </span>{" "}
                <span className="ml-6">Starred</span>
              </a>
            </li>
            <div class="divide-y mt-0 p-0 divide-gray-200">
              <div>01</div>
              <div>02</div>
            </div>{" "}
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center text-black text-sm py-2 px-4 rounded-lg hover:bg-violet-100"
              >
                <span>
                  <ProjectsIcon />
                </span>{" "}
                <span className="ml-6">Projects</span>
              </a>
            </li>
            <div className="absolute bottom-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center text-black text-sm py-2 px-4 rounded-lg hover:bg-violet-100"
                >
                  <span>
                    <SupportIcon />
                  </span>{" "}
                  <span className="ml-6">Support</span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center text-black text-sm py-2 px-4 rounded-lg hover:bg-violet-100"
                >
                  <span>
                    <SettingsIcon />
                  </span>{" "}
                  <span className="ml-6">Settings</span>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </aside>
    </>
  );
};
