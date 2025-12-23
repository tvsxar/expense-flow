import addIcon from "../assets/add-outline.svg";
import DropdownButton from './DropdownButton';

function Navbar({ isDropdownOpen, toggleDropdown, handleOpenModal }) {

  return (
    <nav className="flex items-center justify-between bg-white select-none border-b-2 border-gray-200 py-4 px-4 sm:px-12 lg:px-25">
      <div className="font-bold text-lg sm:text-2xl">
        Spend
        <span className="text-[#E9D6EC] drop-shadow-[0_0_4px_rgba(233,214,236,0.7)]">
          ly
        </span>
      </div>

      <div className="flex items-center gap-4">
        <DropdownButton isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />

        <button onClick={handleOpenModal}
          className="flex items-center gap-2 cursor-pointer text-gray-900 bg-[#E9D6EC] rounded-xl p-2
         hover:bg-[#E0C2E6] hover:drop-shadow-[0_0_4px_rgba(233,214,236,0.7)]
         active:scale-102 font-semibold"
        >
          <img src={addIcon} alt="add" className="w-6 h-6" />
          <p className="hidden md:flex">Add expense</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
