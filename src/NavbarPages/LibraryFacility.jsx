import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBuilding,
  faClipboard,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const LibraryFacility = () => {
  const facilities = [
    {
      icon: faBuilding,
      title: "Wide Area",
      description:
        "The library has a vast area accommodating hundreds of students with comfortable seating arrangements.",
    },
    {
      icon: faBook,
      title: "Large Collection of Books",
      description:
        "We have a large collection of books covering all departments and disciplines, regularly updated with new editions.",
    },
    {
      icon: faClipboard,
      title: "Research Materials",
      description:
        "A dedicated section for research materials, including journals, theses, and dissertations, is available for students and faculty.",
    },
    {
      icon: faBookmark,
      title: "Borrowing Facility",
      description:
        "Students can borrow books and other materials for extended periods, with easy renewal options.",
    },
  ];

  return (
    <>
      <div className="container mx-auto p-4 min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-[#c44c2c]">
          Library Facilities
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-4"
            >
              <FontAwesomeIcon
                icon={facility.icon}
                className="text-[#c44c2c] text-3xl"
              />
              <h2 className="text-xl font-semibold">{facility.title}</h2>
              <p className="text-center">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LibraryFacility;
