import React from "react";
import { SideBar } from "./SideBar";
import TopBar from "./TobBar";
import { BarGraphIcon, VectorIcon } from "@/assets/Icons";

export function MainPage() {
  const resources = [
    {
      title: "Academic literature review",
      description:
        "Organize your sources and synthesize information effectively.",
      image: "/path-to-your-bar-graph-image.png",
    },
    {
      title: "Data analysis templates",
      description:
        "Streamline patient data collection and analysis for medical research.",
      image: "/path-to-your-bar-graph-image.png",
    },
    {
      title: "UX Heuristic template",
      description:
        "Assess your interface against established usability principles.",
      image: "/path-to-your-bar-graph-image.png",
    },
    {
      title: "Affinity mapping template",
      description:
        "Assess your interface against established usability principles.",
      image: "/path-to-your-bar-graph-image.png",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          <header className="mb-8">
            <h1 className="text-2xl text-black font-bold">Welcome, Susan</h1>
            <p className="text-gray-700 mt-2 text-base">
              Get ready to complete your research processes on Zadwax.
            </p>
          </header>

          {/* Welcome Section */}
          <section
            style={{ height: "169px" }}
            className="rounded-lg grid grid-cols-1 md:grid-cols-1 mb-10 relative overflow-hidden"
          >
            <div className="bg-violet-100 p-6 shadow-lg rounded-lg">
              <p className="text-sm text-gray-700 mt-2 mb-2">
                Welcome to the cool kids club
              </p>
              <h1 className="w-4/6 text-2xl text-violet-700 font-bold">
                The new way designers revolutionize their work. See how others
                are using Zadwax to accelerate their design process.
              </h1>
            </div>
            {/* Vector Icon positioned at the bottom right */}
            <div className="absolute -bottom-7 -right-4 p-4 overflow-hidden">
              <VectorIcon />
            </div>
          </section>

          <section className="text-black grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className=" flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold">Getting Started</p>
                  <p className="text-sm text-gray-500">
                    Three simple steps to launch your first project
                  </p>
                </div>
                <div>
                  <button className="bg-purple-700 text-white py-2 px-4 rounded-lg">
                    Create project
                  </button>
                </div>
              </div>
              <div class="divide-y my-4 p-0 divide-gray-200">
                <div></div>
                <div></div>
              </div>{" "}
              <ul className="mt-4">
                <li className="mb-4">
                  <p className="text-base  text-gray-700 font-medium">
                    Step 1: Create your project
                  </p>
                  <p className="font-normal text-sm text-gray-500">
                    Give your project a name, add a description and your goals.{" "}
                  </p>
                </li>
                <li className="mb-4">
                  <p className="text-gray-700 text-base font-medium">
                    Step 2: Invite your teammates
                  </p>
                  <p className="font-normal text-sm text-gray-500">
                    Give your project a name, add a description and your goals.{" "}
                  </p>
                </li>
                <li>
                  <p className="text-gray-700 text-base font-medium">
                    Step 3: Setup your research process
                  </p>
                  <p className="font-normal text-sm text-gray-500">
                    Give your project a name, add a description and your goals.{" "}
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className=" flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold">Research Tips and Tricks</p>
                  <p className="text-sm text-gray-500">
                    Three simple steps to launch your first project
                  </p>
                </div>
              </div>
              <div class="divide-y my-4 p-0 divide-gray-200">
                <div></div>
                <div></div>
              </div>{" "}
              <ul className="mt-4">
                <li className="mb-4">
                  <p className="text-base  text-gray-700 font-medium">
                    Don’t start from scratch, use a template{" "}
                  </p>
                  <p className="font-normal text-sm text-gray-500">
                    Begin with field-tested frameworks adaptable to your
                    research.{" "}
                  </p>
                </li>
                <li className="mb-4">
                  <p className="text-gray-700 text-base font-medium">
                    Add steps and set milestones{" "}
                  </p>
                  <p className="font-normal text-sm text-gray-500">
                    Define key stages and monitor progress from hypothesis to
                    conclusion.{" "}
                  </p>
                </li>
                <li>
                  <p className="text-gray-700 text-base font-medium">
                    Track changes in your documents over time.{" "}
                  </p>
                  <p className="font-normal text-sm text-gray-500">
                    Capture every revision to ensure data integrity and
                    transparency.{" "}
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Resources Section */}
          <section className="mt-10 text-black">
            <h2 className="text-xl font-bold mb-6 text-gray-950">
              Resources for you
            </h2>
            <div
              style={{ height: "300px" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-40 justify-between"
            >
              {resources.map((resource, index) => (
                <div
                  key={index}
                  style={{ width: "265.75px", height: "227px" }}
                  className="bg-white shadow-lg rounded-lg overflow-hidden relative"
                >
                  <div className="absolute= inset-0= flex items-center= =justify-center">
                    <BarGraphIcon />
                  </div>
                  <div className="p-4 relative z-10 bg-white bg-opacity-90">
                    <h3 className="text-lg font-medium text-gray-700">
                      {resource.title}
                    </h3>
                    <p className="font-normal text-gray-500 text-sm">
                      {resource.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
