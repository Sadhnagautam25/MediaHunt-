import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../../redux/features/searchSlice";

const TabsSlice = () => {
  const btns = ["photos", "videos", "gif"];

  const dispatch = useDispatch();
  const activeBtn = useSelector((state) => state.search.activeTab);

  return (
    <div className="w-full pt-22 px-10">
          <div className="flex items-center gap-4">
            {btns.map((item, index) => (
              <button
                onClick={() => {
                  dispatch(setActiveTabs(item));
                }}
                key={index}
                className={`rounded-[5px] ${activeBtn === item ? "bg-[#5465ff] text-white" : "bg-[#bfd7ff]/50"}
                px-5 py-2 text-sm font-medium text-gray-700 cursor-pointer
                shadow-sm
                hover:bg-[#a9c9ff]
                hover:shadow-md
                active:scale-95
                transition-all duration-200 capitalize`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
  )
}

export default TabsSlice
