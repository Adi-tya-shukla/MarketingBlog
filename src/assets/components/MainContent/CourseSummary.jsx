import { useState } from "react";

export default function CourseSummary() {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (index) => {
    setOpenSection(index === openSection ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <p className="text-green-600 uppercase text-sm font-semibold">Course Summary</p>
      <h1 className="text-3xl font-bold mt-2 leading-tight">
        Navigating The Marketing Landscape: <br /> Your Roadmap to Success
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <div
          className={`p-6 rounded-xl cursor-pointer transition-all text-center ${openSection === 1 ? "bg-green-800 text-white" : "bg-green-100"
            }`}
          onClick={() => toggleSection(1)}
        >
          <span
            className={`text-lg font-bold ${openSection === 1 ? "text-white rotate-180" : "text-green-800"
              } transition-all`}
            style={{ transformOrigin: "center", transition: "transform 0.3s" }}
          >
            01
          </span>
          <p
            className={`font-medium ${openSection === 1 ? "text-white" : "text-green-700"
              }`}
          >
            Fundamentals of Marketing
            </p>
          {openSection === 1 && (
            <div className="mt-4 p-4 bg-green-800 text-white rounded-lg transition-all">
              <p className="text-sm">
                Delve into the foundational pillars of marketing, where you'll explore the
                core principles that underpin successful marketing strategies. Explore in-depth
                the critical aspects of marketing that will serve as a foundation for all other
                areas of your marketing journey.
              </p>
            </div>
          )}
        </div>

        <div
          className={`p-6 rounded-xl cursor-pointer transition-all text-center ${openSection === 2 ? "bg-green-800 text-white" : "bg-green-100"
            }`}
          onClick={() => toggleSection(2)}
        >
          <span
            className={`text-lg font-bold ${openSection === 2 ? "text-white rotate-180" : "text-green-800"
              } transition-all`}
            style={{ transformOrigin: "center", transition: "transform 0.3s" }}
          >
            02
          </span>
          <p
            className={`font-medium ${openSection === 2 ? "text-white" : "text-green-700"
              }`}
          >
            Digital Marketing Essentials
          </p>
          {openSection === 2 && (
            <div className="mt-4 p-4 bg-green-800 text-white rounded-lg transition-all">
              <p className="text-sm">
                Learn the key digital marketing channels, including SEO, SEM, and social media, to build a comprehensive digital strategy.
              </p>
            </div>
          )}
        </div>
        <div
          className={`p-6 rounded-xl cursor-pointer transition-all text-center ${openSection === 3 ? "bg-green-800 text-white" : "bg-green-100"
            }`}
          onClick={() => toggleSection(3)}>
          <span
            className={`text-lg font-bold ${openSection === 3 ? "text-white rotate-180" : "text-green-800"
              } transition-all`}
            style={{ transformOrigin: "center", transition: "transform 0.3s" }}
          >
            03
          </span>
          <p
            className={`font-medium ${openSection === 3 ? "text-white" : "text-green-700"
              }`}
          >
            Data Analytics
          </p>
          {openSection === 3 && (
            <div className="mt-4 p-4 bg-green-800 text-white rounded-lg transition-all">
              <p className="text-sm">
                Dive deep into data analytics, learning how to measure and interpret marketing metrics to optimize strategies and ROI.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
