import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import BusInformation from "./BusInformation";

const BusRoutes = () => {
  const [pickupPoint, setPickupPoint] = useState("");
  const [route, setRoute] = useState("");
  const [mainTime, setMainTime] = useState("");
  const [result, setResult] = useState("");

  const handlePickupPointChange = (event) => {
    setPickupPoint(event.target.value);
  };

  const handleRouteChange = (event) => {
    setRoute(event.target.value);
    setPickupPoint("");
    setMainTime("");
    setResult("");
  };

  const handleTimeChange = (event) => {
    setMainTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pickupPoint && route && mainTime) {
      setResult(getBusArrivalTime(pickupPoint, route, mainTime));
    } else {
      setResult("Please select pickup point, route, and time.");
    }
  };

  const getBusArrivalTime = (pickupPoint, route, mainTime) => {
    let arrivalTime;
    if (route === "1") {
      // Route 1 logic
      switch (pickupPoint) {
        case "Police Line":
          arrivalTime = 8.2;
          break;
        case "C & B":
          arrivalTime = 8.25;
          break;
        case "Jadughor Mor":
          arrivalTime = 8.3;
          break;
        case "Moni Chottor":
          arrivalTime = 8.35;
          break;
        case "Alupotti":
          arrivalTime = 8.4;
          break;
        case "Talaimari":
          arrivalTime = 8.45;
          break;
        case "VARENDRA UNIVERSITY":
          arrivalTime = 9.0;
          break;
        default:
          return "Invalid pickup point";
      }
    } else if (route === "2") {
      // Route 2 logic
      switch (pickupPoint) {
        case "Court Station":
          arrivalTime = 8.2;
          break;
        case "Bohorompur Mor":
          arrivalTime = 8.25;
          break;
        case "City Bypass":
          arrivalTime = 8.3;
          break;
        case "Bornali Mor":
          arrivalTime = 8.35;
          break;
        case "Railgate":
          arrivalTime = 8.4;
          break;
        case "Amchottor":
          arrivalTime = 8.5;
          break;
        case "VU Campus":
          arrivalTime = 9.0;
          break;
        default:
          return "Invalid pickup point";
      }
    }
    if (mainTime < 8 || mainTime >= 9) {
      return "Bus service is not available at this time";
    } else if (arrivalTime - mainTime < 0) {
      return `Your Bus has left. Next stop: ${getNextStop(pickupPoint, route)}`;
    } else {
      return `Bus arriving in ${parseFloat(arrivalTime - mainTime).toFixed(
        2
      )} Hours`;
    }
  };

  const getNextStop = (pickupPoint, route) => {
    const stopsRoute1 = [
      "Police Line",
      "C & B",
      "Jadughor Mor",
      "Moni Chottor",
      "Alupotti",
      "Talaimari",
      "VARENDRA UNIVERSITY",
    ];
    const stopsRoute2 = [
      "Court Station",
      "Bohorompur Mor",
      "City Bypass",
      "Bornali Mor",
      "Railgate",
      "Amchottor",
      "VU Campus",
    ];
    const currentIndex =
      route === "1"
        ? stopsRoute1.indexOf(pickupPoint)
        : stopsRoute2.indexOf(pickupPoint);
    return route === "1"
      ? stopsRoute1[currentIndex + 1]
      : stopsRoute2[currentIndex + 1];
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mt-5">
        <BusInformation></BusInformation>
      </div>
      <div className="container mx-auto p-4 bg-green-200 rounded-xl mt-10 w-full md:w-1/2 lg:w-1/4">
        <h1 className="text-center text-3xl font-bold mb-8">
          Varendra University Bus Service
        </h1>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-4">
            <label htmlFor="route" className="block font-medium">
              Select Route:
            </label>
            <select
              id="route"
              value={route}
              onChange={handleRouteChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
              required
            >
              <option value="">Select</option>
              <option value="1" className="bg-blue-200">
                Route 1
              </option>
              <option value="2" className="bg-green-200">
                Route 2
              </option>
            </select>
          </div>
          {route && (
            <div className="mb-4">
              <label htmlFor="pickupPoint" className="block font-medium">
                Select Pickup Point:
              </label>
              <select
                id="pickupPoint"
                value={pickupPoint}
                onChange={handlePickupPointChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
                required
              >
                <option value="">Select</option>
                {route === "1" ? (
                  <>
                    <option value="Police Line" className="bg-blue-200">
                      Police Line
                    </option>
                    <option value="C & B" className="bg-blue-200">
                      C & B
                    </option>
                    <option value="Jadughor Mor" className="bg-blue-200">
                      Jadughor Mor
                    </option>
                    <option value="Moni Chottor" className="bg-blue-200">
                      Moni Chottor
                    </option>
                    <option value="Alupotti" className="bg-blue-200">
                      Alupotti
                    </option>
                    <option value="Talaimari" className="bg-blue-200">
                      Talaimari
                    </option>
                    <option value="VARENDRA UNIVERSITY" className="bg-blue-200">
                      VARENDRA UNIVERSITY
                    </option>
                  </>
                ) : (
                  <>
                    <option value="Court Station" className="bg-green-200">
                      Court Station
                    </option>
                    <option value="Bohorompur Mor" className="bg-green-200">
                      Bohorompur Mor
                    </option>
                    <option value="City Bypass" className="bg-green-200">
                      City Bypass
                    </option>
                    <option value="Bornali Mor" className="bg-green-200">
                      Bornali Mor
                    </option>
                    <option value="Railgate" className="bg-green-200">
                      Railgate
                    </option>
                    <option value="Amchottor" className="bg-green-200">
                      Amchottor
                    </option>
                    <option value="VU Campus" className="bg-green-200">
                      VU Campus
                    </option>
                  </>
                )}
              </select>
            </div>
          )}
          {pickupPoint && (
            <div className="mb-4">
              <label htmlFor="time" className="block font-medium">
                Enter Current Time (8 to 9 AM):
              </label>
              <input
                type="number"
                id="time"
                value={mainTime}
                onChange={handleTimeChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
                min={8}
                max={8.99}
                step={0.01}
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Check Bus Availability
          </button>
        </form>
        {result && (
          <div className="mt-8">
            <p className="text-lg font-medium text-center">{result}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BusRoutes;
