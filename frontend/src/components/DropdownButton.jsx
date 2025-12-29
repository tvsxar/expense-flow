import { useState } from "react";
import arrowIcon from "../assets/chevron-down-outline.svg";

function DropdownButton({ handleSelect, selected }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const options = [
    { value: "24h", label: "Last 24 hours" },
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "3m", label: "Last 3 months" },
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl 
                hover:bg-gray-200 transition shadow-sm cursor-pointer"
      >
        <span className="font-medium text-gray-900 text-xs md:text-sm">
          {selected}
        </span>
        <img
          src={arrowIcon}
          alt="arrow"
          className={`w-4 h-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-34 md:w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                handleSelect(opt.value, opt.label);
                toggleDropdown();
              }}
              className={`block w-full text-left px-4 py-2 text-xs md:text-sm hover:bg-gray-100 ${
                idx == 0
                  ? "hover:rounded-t-lg"
                  : idx == options.length - 1
                  ? "hover:rounded-b-lg"
                  : ""
              } ${
                selected === opt.label
                  ? "font-semibold text-gray-900"
                  : "text-gray-700"
              } cursor-pointer`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
