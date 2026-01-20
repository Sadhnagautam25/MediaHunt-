import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CollectionCard from "../components/CollectionPageComp/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collections = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currtheme = useSelector((state) => state.theme.currentTheme);

  return (
    <div
      className={`w-full min-h-screen px-4 sm:px-8 py-6 transition-colors duration-300 ${
        currtheme === "dark"
          ? "bg-linear-to-br from-[#0d1b2a] to-[#1b263b] text-gray-100"
          : "bg-linear-to-br from-slate-50 to-slate-100 text-slate-800"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1
            className={`text-3xl font-bold ${
              currtheme === "dark"
                ? "text-gray-100"
                : "text-slate-800"
            }`}
          >
            My Collections
          </h1>
          <p
            className={`text-sm mt-1 ${
              currtheme === "dark"
                ? "text-gray-400"
                : "text-slate-500"
            }`}
          >
            Your saved inspirations, Pinterest style ✨
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/")}
            className={`px-4 py-2 rounded-full border transition ${
              currtheme === "dark"
                ? "border-white/20 text-gray-200 hover:bg-white/10"
                : "border-slate-300 text-slate-700 hover:bg-white"
            }`}
          >
            Go Home
          </button>

          {collections.length > 0 && (
            <button
              onClick={() => dispatch(clearCollection())}
              className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {collections.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[65vh] text-center">
          <h2
            className={`text-xl font-semibold ${
              currtheme === "dark"
                ? "text-gray-200"
                : "text-slate-600"
            }`}
          >
            Nothing saved yet
          </h2>

          <p
            className={`mt-2 ${
              currtheme === "dark"
                ? "text-gray-400"
                : "text-slate-400"
            }`}
          >
            Save images & videos to create your own inspiration wall
          </p>

          <button
            onClick={() => navigate("/")}
            className={`mt-5 px-6 py-2 rounded-full font-medium transition ${
              currtheme === "dark"
                ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            Explore Now
          </button>
        </div>
      ) : (
        /* Pinterest Masonry Layout */
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-6 space-y-6">
          {collections.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              <CollectionCard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;

