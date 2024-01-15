import React, { useState } from "react";
import { AccordionSeasonCaps } from "./accordionSeasonCaps";

export const AccordionSeason = ({ idSerie, seasonData }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <div className="container p-5 mx-auto">
        <div className="lg:w-4/5 mx-auto">
          <h3 className="text-3xl font-bold dark:text-white tracking-wider mb-4">
            Seasons and Episodes
          </h3>
          <div id="accordion-collapse" data-accordion="collapse">
            {seasonData
              ?.filter((season) => season.name !== "Specials")
              .map((season, index) => (
                <div key={index}>
                  <h2 id={`accordion-collapse-heading-${index}`}>
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 ${
                        activeAccordion === index ? "rounded-t-xl" : ""
                      } focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                      data-accordion-target={`#accordion-collapse-body-${index}`}
                      aria-expanded={activeAccordion === index}
                      aria-controls={`accordion-collapse-body-${index}`}
                      onClick={() => handleAccordionClick(index)}
                    >
                      <span className="text-white">
                        {season.name} - {`(${season.episode_count} Episodes)`}
                      </span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 transform ${
                          activeAccordion === index ? "rotate-0" : "rotate-180"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id={`accordion-collapse-body-${index}`}
                    className={`p-1 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
                      activeAccordion === index ? "" : "hidden"
                    }`}
                    aria-labelledby={`accordion-collapse-heading-${index}`}
                  >
                    <AccordionSeasonCaps
                      idSerie={idSerie}
                      seasonNumber={season.season_number}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
