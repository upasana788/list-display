import React, { useEffect, useState } from "react";
import axios from "axios";
import { Media } from "../model";
import InfoCard from "../components/InfoCard";
import SideNav from "../components/SideNav";

const Home: React.FC = () => {
  const [data, setData] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setData(response.data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex">
      <SideNav />
      <div className="ml-0 lg:ml-64 p-4 w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center"> </h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {data.slice(0, visibleCount).map((item) => (
                <InfoCard key={item.id} media={item} />
              ))}
            </div>
            {visibleCount < data.length && (
              <div className="flex justify-center items-center mt-8">
                <button
                  onClick={loadMore}
                  className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
