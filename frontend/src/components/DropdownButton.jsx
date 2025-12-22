import arrowIcon from "../assets/chevron-down-outline.svg";

function DropdownButton({ isOpen, toggleDropdown }) {
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl 
                hover:bg-gray-200 transition shadow-sm cursor-pointer"
      >
        <span className="font-medium text-sm text-gray-900">Last 24 hours</span>
        <img
          src={arrowIcon}
          alt="arrow"
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <button
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-t-lg cursor-pointer`}
          >
            Last 24 hours
          </button>

          <button
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100  cursor-pointer`}
          >
            Last 7 days
          </button>

          <button
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100  cursor-pointer`}
          >
            Last 30 days
          </button>

          <button
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:rounded-b-lg cursor-pointer`}
          >
            Last 3 months
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
