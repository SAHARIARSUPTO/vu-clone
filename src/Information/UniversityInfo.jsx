const InformationSection = ({ title, content, bgColor }) => (
  <div className={`${bgColor} p-4  mt-10 `}>
    <h2 className="text-xl font-bold mb-2 p-5 text-white">{title}</h2>
    <p className="text-white">{content}</p> {/* Apply text-white class here */}
  </div>
);

const UniversityInfo = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "> {/* Add gap for spacing */}
        <InformationSection
          title="Admission"
          content="We have students coming from different backgrounds, cultures are enrolled in various programs."
          bgColor="bg-[#c44c2c]"
        />
        <InformationSection
          title="Programs"
          content="We are offering 4 undergraduate and graduate programs under 14 departments."
          bgColor="bg-blue-900"
        />
        <InformationSection
          title="Tuition Fees"
          content="We offer affordable tuition fees for students with the option to pay them in multiple installments to create convenience for students."
          bgColor="bg-[#c44c2c]"
        />
        <InformationSection
          title="Scholarship"
          content="We Provides upto 100% Scholarship."
          bgColor="bg-blue-900"
        />
      </div>
    </div>
  );
};

export default UniversityInfo;
