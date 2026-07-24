import React, { useState, useEffect } from 'react';
import NasaModal from './components/NasaModal';
import LoadingAtom from './components/Loading';
import ApodDate from './components/Date';
import { LuArrowRight } from "react-icons/lu";
import { subDays } from "date-fns";
import ApodSort from './components/Sort';
import Pagination from './components/Pagination';

export default function Nasa() {
  // Store API data, loading state, selected card and date filters
  let [apod, setApod] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApod, setSelectedApod] = useState(null);
  const [startDate, setStartDate] = useState(subDays(new Date(), 30));
  const [endDate, setEndDate] = useState(new Date());
  const [sortOrder, setSortOrder] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

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

  const itemsPerPage = 20;
  const paginatedApod = sortedApod.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const total = Math.ceil(sortedApod.length / itemsPerPage);

  return (
    <>
      {loading ? (
        <LoadingAtom />
      ) : (
        <div>
            <div className="filter bg-[#0b1527] py-4">
              <div className="max-w-[1440px] w-full m-auto text-[#5a6d87] flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex gap-4 items-end">
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
                </div>
                <div>
                  <p className="uppercase">30 Results</p>
                </div>
              </div>
            </div>
          

          <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1440px] w-full m-auto py-6">
            {paginatedApod.map(item => {
              let media;

              // Shorten long explanations to keep cards consistent
              const shortDesc = item.explanation.substring(0, 100) + '...';

              if (item.media_type === "image") {
                media = (
                  <div
                    style={{ backgroundImage: `url(${item.url})` }}
                    className="h-full w-full bg-cover bg-center"
                  />
                );
              } else if (item.media_type === "video") {
                media = (
                  <video
                    src={item.url}
                    className="h-full w-full object-cover pointer-events-none"
                  />
                );
              } else {
                media = (
                  <div className="flex h-full w-full items-center justify-center">
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
                  <div>
                    <div className='relative h-[200px] overflow-hidden'>
                      {media}
                      <p className="text-sm text-gray-500 absolute bottom-1 left-1">{item.date}</p>
                    </div>


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
      <Pagination page={currentPage} totalPages={total} onPageChange={setCurrentPage} />
      {selectedApod && (
        <NasaModal item={selectedApod} onClose={() => setSelectedApod(null)} />
      )}
    </>
  );
}