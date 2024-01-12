import React from "react";
import { searchTabArray } from "../../config/searchTabs";

export const SearchTabs = ({ tabActive, setTabActive }) => {
  return (
    <>
      <div className="mt-8 mx-4">
        <ul className="flex flex-wrap justify-center text-base font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
          {searchTabArray.map((tab, index) => (
            <li
              className="me-2"
              key={`tab-${index + 1}`}
              onClick={() => setTabActive(tab.tabIndex)}
            >
              <a
                className={
                  tab.tabIndex === tabActive ? tab.active : tab.notActive
                }
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
