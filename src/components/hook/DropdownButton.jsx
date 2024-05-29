import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const DropdownButton = ({ label, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative inline-block z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className=" text-black py-2 px-4 rounded">{label}</button>
      {isHovered && (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

DropdownButton.propTypes = {
  label: PropTypes.string.isRequired, // Validates that label is a required string
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropdownButton;
