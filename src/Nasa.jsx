import React, { useState, useEffect } from 'react';
import NasaModal from './NasaModal';
import LoadingAtom from './Loading';
import ApodDate from './Date';
import { LuArrowRight } from "react-icons/lu";
import { subDays } from "date-fns";
import ApodSort from './Sort';

export default function Nasa() {
  // Store API data, loading state, selected card and date filters
  let [apod, setApod] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApod, setSelectedApod] = useState(null);
  const [startDate, setStartDate] = useState(subDays(new Date(), 30));
  const [endDate, setEndDate] = useState(new Date());
  const [sortOrder, setSortOrder] = useState('newest');

  // Fetch APOD entries whenever the selected date range changes
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}&start_date=${startDate.toISOString().split('T')[0]}&end_date=${endDate.toISOString().split('T')[0]}`)
      .then(response => response.json())
      .then(data => {
        setApod(data);
        setLoading(false);
      });

  }, [startDate, endDate]);

  // Create a sorted copy so we don't mutate the API data
  const sortedApod = [...apod].sort((currentApod, nextApod) => {
    if (sortOrder === 'newest') {
      return new Date(nextApod.date) - new Date(currentApod.date);
    } else if (sortOrder === 'oldest') {
      return new Date(currentApod.date) - new Date(nextApod.date);
    }
  }); 

  return (
    <>
      {loading ? (
        <LoadingAtom />
      ) : (
        <div>
          <ApodDate
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <ApodSort
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {sortedApod.map(item => {
              let media;

              // Shorten long explanations to keep cards consistent
              const shortDesc = item.explanation.substring(0, 100) + '...';

              if (item.media_type === "image") {
                media = (
                  <div
                    style={{ backgroundImage: `url(${item.url})` }}
                    className="aspect-square w-full bg-cover bg-center"
                  />
                );
              } else if (item.media_type === "video") {
                media = (
                  <div className="aspect-square w-full overflow-hidden">
                    <video
                      src={item.url}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              } else {
                media = (
                  <div className="aspect-square w-full flex items-center justify-center">
                    <p>Unsupported media type</p>
                  </div>
                );
              }

              // Open the modal with the selected APOD entry
              const handleClickCard = () => {
                setSelectedApod(item);
              };

              return (
                <li
                  className="overflow-hidden rounded-lg shadow transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  key={item.title}
                  onClick={handleClickCard}
                >
                  {media}

                  <div className="p-4">
                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>

                    <h1 className="text-lg font-medium py-2">
                      {item.title}
                    </h1>

                    <p className="text-sm text-gray-500">
                      {shortDesc}
                    </p>

                    <div className="text-base text-gray-500 flex items-center gap-1 ml-auto w-fit">
                      <span>Read more</span>
                      <LuArrowRight />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {selectedApod && (
        <NasaModal item={selectedApod} onClose={() => setSelectedApod(null)} />
      )}
    </>
  );
}