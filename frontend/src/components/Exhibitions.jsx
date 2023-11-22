import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ExhibitionsContext } from "../contexts/ExhibitionsContext";

export default function Exhibitions() {
  const [exhibitions, setExhibitions] = useState([]);
  const exhibitionsContext = useContext(ExhibitionsContext);
  const { REACT_APP_API_ENDPOINT } = process.env;

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_ENDPOINT}/api/exhibitions/`)
      .then((response) => {
        setExhibitions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exhibitions:", error);
      });
  }, []);

  useEffect(() => {
    exhibitionsContext.setExhibitions(exhibitions);
  }, [exhibitions, exhibitionsContext]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl text-center font-light text-gray-900 mb-2">
            Ongoing Exhibitions
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6 lg:space-y-0">
            {exhibitions.map((exhibition) => (
              <div key={exhibition.title} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={`${REACT_APP_API_ENDPOINT}${exhibition.cover_image}`}
                    alt={exhibition.title}
                    className="h-full w-full object-cover object-center"
                  />
                  <h3 className="z-10 m-2 text-4xl text-center font-extralight text-white">
                    <Link to={`/exhibition/${exhibition.title}`}>
                      <span className="absolute inset-0" />
                      {exhibition.title}
                    </Link>
                  </h3>
                </div>
                <p className="mt-4 text-md font-light text-gray-500 line-clamp-3">
                  {exhibition.summary}
                </p>
                <div className="mt-4 items-center col-2 flex justify-between">
                  <a
                    href={`${REACT_APP_API_ENDPOINT}${exhibition.title}`}
                    className="text-blue-500 hover:text-blue-600 font-light text-sm"
                  >
                    Read more
                    <span className="ml-2">&#8594;</span>
                  </a>
                  <div className="inline-flex items-center gap-4">
                    <span className="rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {exhibition.start_date}
                    </span>
                    <span className="rounded-md bg-red-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                      {exhibition.end_date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
