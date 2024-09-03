import React from "react";
import { SideBar } from "./SideBar";
import TopBar from "./TobBar";

export function MainPage() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold">Welcome, Susan</h1>
            <p className="text-xl mt-2">
              Get ready to complete your research processes on Zadwax.
            </p>
          </header>

          {/* Sections */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
              <ul>
                <li>Step 1: Create your project</li>
                <li>Step 2: Invite your teammates</li>
                <li>Step 3: Setup your research process</li>
              </ul>
              <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-lg">
                Create project
              </button>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Research Tips and Tricks
              </h2>
              <ul>
                <li>Don't start from scratch, use a template</li>
                <li>Add steps and set milestones</li>
                <li>Track changes in your documents over time</li>
              </ul>
            </div>
          </section>

          {/* Resources */}
          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Academic literature review</h3>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Data analysis templates</h3>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold">UX Heuristic template</h3>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Affinity mapping template</h3>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
