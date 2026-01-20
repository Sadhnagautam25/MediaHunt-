import React, { useEffect } from "react";
import TabsSlice from "./TabsSlice";
import { useDispatch, useSelector } from "react-redux";
import { fatchPhotos, fatchVideos, fetchGIF } from "../../api/mediApi";
import {
  setError,
  setLoading,
  setResults,
} from "../../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  const currtheme = useSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];

        if (activeTab === "photos") {
          const res = await fatchPhotos(query);
          data = res.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "photo",
            src: item.urls.regular,
            download_link: item.links.html,
          }));
        }

        if (activeTab === "videos") {
          const res = await fatchVideos(query);
          data = res.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            src: item.video_files[0]?.link,
            download_link: item.url,
          }));
        }

        if (activeTab === "gif") {
          const res = await fetchGIF(query);
          data = res.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "gif",
            src: item.images.original.url,
            download_link: item.bitly_gif_url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message || "Something went wrong"));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  return (
    <div
      className={`w-full min-h-screen relative transition-colors duration-300 ${
        currtheme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      {results.length > 0 ? (
        <>
          <TabsSlice />

          {/* LOADING */}
          {loading && (
            <div
              className={`absolute inset-0 z-20 flex items-center justify-center backdrop-blur ${
                currtheme === "dark"
                  ? "bg-black/60 text-gray-200"
                  : "bg-white/70 text-gray-700"
              }`}
            >
              <h1 className="text-xl font-semibold animate-pulse">
                Loading...
              </h1>
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div
              className={`absolute inset-0 z-20 flex items-center justify-center ${
                currtheme === "dark"
                  ? "bg-black/70"
                  : "bg-white/80"
              }`}
            >
              <h1 className="text-red-500 font-semibold">{error}</h1>
            </div>
          )}

          {/* GRID */}
          <div className="w-full columns-2 md:columns-3 lg:columns-5 gap-5 p-10">
            {results.map((item) => (
              <div key={item.id} className="mb-5 break-inside-avoid">
                <ResultCard item={item} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="pt-28 flex flex-col items-center justify-center px-6 text-center">
          {/* Heading */}
          <h1
            className={`text-4xl md:text-5xl font-bold tracking-tight ${
              currtheme === "dark"
                ? "text-gray-100"
                : "text-gray-900"
            }`}
          >
            Welcome to{" "}
            <span className="bg-linear-to-r from-[#5465ff] to-[#788bff] bg-clip-text text-transparent">
              MediaHunt
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-5 max-w-2xl text-sm md:text-base leading-relaxed ${
              currtheme === "dark"
                ? "text-gray-400"
                : "text-gray-500"
            }`}
          >
            Discover high-quality{" "}
            <span
              className={`font-medium ${
                currtheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"
              }`}
            >
              photos
            </span>
            ,{" "}
            <span
              className={`font-medium ${
                currtheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"
              }`}
            >
              videos
            </span>{" "}
            and{" "}
            <span
              className={`font-medium ${
                currtheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"
              }`}
            >
              GIFs
            </span>{" "}
            in one place. Start searching to explore unlimited creative media.
          </p>

          {/* Video Card */}
          <div className="mt-10 flex justify-center">
            <div
              className={`group relative h-90 w-180 max-w-full overflow-hidden rounded-3xl shadow-2xl transition-all ${
                currtheme === "dark"
                  ? "ring-1 ring-white/10"
                  : "ring-1 ring-indigo-200/60"
              }`}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source
                  src="https://www.pexels.com/download/video/7236874/"
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Explore
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  Photos · Videos · GIFs
                </h3>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultGrid;

