import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ExhibitionsContext } from "../contexts/ExhibitionsContext";
import axios from "axios";

export default function SingleExhibition() {
  const { name } = useParams();
  const [exhibition, setExhibition] = useState(null);
  const [cars, setCars] = useState([]);
  const { REACT_APP_API_ENDPOINT } = process.env;

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_ENDPOINT}/api/exhibition/${name}/`)
      .then((response) => {
        setExhibition(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exhibition details:", error);
      });

    axios
      .get(`${REACT_APP_API_ENDPOINT}/api/exhibition/${name}/cars/`)
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cars for the exhibition:", error);
      });
  }, [name]);

  return (
    <div className="bg-white">
      {exhibition && (
        <div className="pt-6">
          <h1>{exhibition.title}</h1>

          {/* Image gallery */}
          <div class="bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div class="flex items-center gap-12">
                  <h2 class="text-2xl font-light text-gray-800 lg:text-3xl dark:text-white">
                    {exhibition.title}
                  </h2>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                {[...Array(4)].map((_, index) => (
                  <a
                    href="#"
                    class={`group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${
                      index === 1 || index === 2 ? "md:col-span-2" : ""
                    }`}
                    key={index}
                  >
                    {cars[index] && (
                      <img
                        src={`${REACT_APP_API_ENDPOINT}${cars[index].image}`}
                        loading="lazy"
                        alt={cars[index].name}
                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Exhibition info */}
          <div className="mx-auto max-w-screen-2xl px-4 pb-16 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-18">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-light tracking-tight text-gray-900 sm:text-3xl">
                Exhibition Highlights
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <p className="text-3xl tracking-tight text-gray-900">
                ${exhibition.ticket_price}
              </p>

              <form className="mt-10">
                {/* Tickets */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Tickets
                    </h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Location info
                    </a>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Start Date
                    </h3>
                    <p className="text-sm font-semibold text-green-800">
                      {exhibition.start_date}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">
                      End Date
                    </h3>
                    <p className="text-sm font-semibold text-red-800">
                      {exhibition.end_date}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Buy Ticket
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-6 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <div className="space-y-6">
                  <p className="text-base font-light text-gray-900">
                    {exhibition.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
