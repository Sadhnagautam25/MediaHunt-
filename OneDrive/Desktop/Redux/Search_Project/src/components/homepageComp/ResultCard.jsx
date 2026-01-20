import React from "react";
import { useDispatch } from "react-redux";
import { addCollection } from "../../redux/features/collectionSlice";
import { addToast } from "../../redux/features/tostifySlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addToast())
  };
  return (
    <div
      className="group relative w-[18vw] overflow-hidden rounded-2xl
      bg-gray-100 shadow-sm
      hover:shadow-xl
      transition-all duration-300"
    >
      {/* Media */}
      <a
        href={item.download_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {item.type === "photo" && (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-auto object-cover
            transition-transform duration-500
            group-hover:scale-105"
          />
        )}

        {item.type === "video" && (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            className="w-full h-auto object-cover"
          />
        )}

        {item.type === "gif" && (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-auto object-cover"
          />
        )}
      </a>

      {/* Hover Overlay */}
      <div
        className="pointer-events-none absolute inset-0
        bg-black/0 group-hover:bg-black/20
        transition"
      />

      {/* Bottom Slide Content */}
      <div
        className="absolute bottom-0 left-0 right-0
        translate-y-full group-hover:translate-y-0
        transition-transform duration-300 ease-out
        px-4 py-3"
      >
        <div className="flex items-center justify-between gap-3">
          <h2
            className="text-sm font-semibold text-white
            line-clamp-2 drop-shadow"
          >
            {item.title}
          </h2>

          <button
            onClick={() => {
              addToCollection(item);
            }}
            className="rounded-full bg-red-600 px-4 py-1.5
            text-xs font-semibold text-white
            hover:bg-red-700
            active:scale-95
            transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
