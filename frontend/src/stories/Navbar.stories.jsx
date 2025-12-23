import Navbar from "../components/Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

export const Default = () => (
  <Navbar
    isDropdownOpen={false}
    toggleDropdown={() => {}}
    handleOpenModal={() => {}}
  />
);

export const DropdownOpen = () => (
  <Navbar
    isDropdownOpen={true}
    toggleDropdown={() => {}}
    handleOpenModal={() => {}}
  />
);
