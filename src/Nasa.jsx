// 1. Import *useState* and *useEffect*
import React, {useState, useEffect} from 'react';
import NasaModal from './NasaModal';

export default function Nasa() {
    // 2. Create our apod variable as well as the setApod function via useState
    // We're setting the default value of apod to null, so that while we wait for the
    // fetch to complete, we dont attempt to render the image
  let [apod, setApod] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApod, setSelectedApod] = useState(null);
  
    // 3. Create out useEffect function
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}&start_date=2026-07-01`)
    .then(response => response.json())
        // 4. Setting apod the data that we received from the response above
    .then(data => {
        setApod(data)
        setLoading(false)
    })

  },[]);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {apod.map(item => {
                        let media;

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
                              const testing = () => {
                                    setSelectedApod(item);
                                    
                                }

                        return (
                            <li
                                className="overflow-hidden rounded-lg shadow"
                                key={item.title}
                                onClick={ testing }
                            >
                                {media}

                                <div className="p-4">
                                    <h1 className="text-lg font-medium">
                                        {item.title}
                                    </h1>

                                    <p className="text-sm text-gray-500">
                                        {item.date}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            {selectedApod && (
                <NasaModal item={selectedApod} onClose={() => setSelectedApod(null)} />
            )}
            
        </>
    )
}