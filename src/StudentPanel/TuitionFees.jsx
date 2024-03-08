import React from "react";

const TuitionFees = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-blue-200">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Standard Program</div>
          <ul className="text-gray-700 text-base">
            <li>Amount Due: $10,800</li>
            <li>Total Amount: $12,500</li>
            <li>Last Date: March 31, 2024</li>
          </ul>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-green-200">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Advanced Program</div>
          <ul className="text-gray-700 text-base">
            <li>Amount Due: $12,900</li>
            <li>Total Amount: $15,000</li>
            <li>Last Date: March 31, 2024</li>
          </ul>
        </div>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-yellow-200">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Premium Program</div>
          <ul className="text-gray-700 text-base">
            <li>Amount Due: $15,600</li>
            <li>Total Amount: $18,000</li>
            <li>Last Date: March 31, 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TuitionFees;
