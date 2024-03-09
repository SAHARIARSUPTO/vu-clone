import {
  FaBus,
  FaMoneyCheckAlt,
  FaMoneyBillAlt,
  FaDollarSign,
} from "react-icons/fa";

const BusInformation = () => {
  // Sample data for the cards
  const busData = [
    {
      title: "Total Bus Trips",
      value: 50,
      icon: <FaBus className="text-blue-500 text-3xl" />,
    },
    {
      title: "Total Amount Deducted",
      value: 500,
      icon: <FaMoneyBillAlt className="text-red-500 text-3xl" />,
    },
    {
      title: "Recharged Amount",
      value: 300,
      icon: <FaMoneyCheckAlt className="text-green-500 text-3xl" />,
    },
    {
      title: "Remaining Balance",
      value: 300,
      icon: <FaDollarSign className="text-yellow-500 text-3xl" />,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-8">Bus Information</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {busData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <div className="text-center">
              <h2 className="text-lg lg:text-xl font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-2xl lg:text-3xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusInformation;
