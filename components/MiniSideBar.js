import { AddMoreIcon, FigmaIcon, LinkedInIcon } from "@/assets/Icons";
import React from "react";

export const MiniSideBar = () => {
  return (
    <aside className="w-18 bg-violet-900 sticky">
      <nav className="mt-2">
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center text-white py-2 px-4 rounded-lg hover:bg-purple-800"
            >
              <span>
                <LinkedInIcon />
              </span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center text-white py-2 px-4 rounded-lg hover:bg-purple-800"
            >
              <span>
                <FigmaIcon />
              </span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center text-white py-2 px-4 rounded-lg hover:bg-purple-800"
            >
              <span>
                <FigmaIcon />
              </span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center text-white py-2 px-4 rounded-lg hover:bg-purple-800"
            >
              <span>
                <AddMoreIcon />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
