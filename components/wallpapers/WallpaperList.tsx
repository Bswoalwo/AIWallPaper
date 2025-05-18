"use client";

import { Wallpaper } from "@/types/wallpaper";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props{
  wallpapers:Wallpaper[];
}

export default function ({wallpapers}:Props) {
  // const fetchWallpapers = async function () {
  //   const result = await fetch("/api/get-wallpapers");
  //   const { data } = await result.json();

  //   if (data){
  //     setWallpapers(data);
  //   }
  // };
  // useEffect(() => {
  //   fetchWallpapers();
  // }, []);



  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Heading Container */}
        <div className="mb-8 text-center md:mb-12 ">
          {/* Heading */}
          <h2 className="text-3xl font-bold md:text-5xl text-primary">
            全部壁纸
          </h2>
          {/* Subeading */}
          <p className="mt-4 text-gray-500 text-base">
            一共100张由AI生成的壁纸
          </p>
        </div>
        {/* Contents */}
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-16 md:grid-cols-3 md:gap-4 ">
          {wallpapers &&
            wallpapers.map((wallpaper: Wallpaper, idx: number) => {
              return (
                <div key={idx} className="mx-auto w-full max-w-md gap-4 rounded-md bg-gray-100 p-8 text-black sm:px-4 sm:py-8">
                  
                  <img
                    // src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64772c025e9047a330ad448e_Rectangle%2034.png"
                    src={wallpaper.img_url}
                    alt=""
                    className="inline-block h-60 w-full rounded-md object-cover  m-2 mx-auto"
                  />
                  <div className="mb-3 flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <img
                        // src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64772e4ec124557640300fd8_Column.png"
                        // src={wallpaper.img_url}
                        src={wallpaper.created_user?.avatar_url}
                        alt=""
                        className="mr-4 inline-block h-8 w-8 rounded-full"
                      />
                    </div>
                      <span>{wallpaper.img_size}</span>
                  </div>
                  <div className="flex w-full flex-col items-start gap-5 p-0">
                    <div>
                      {wallpaper.img_description}
                    </div>
                    <div className="h-px w-full bg-gray-300"></div>
                    <div className="flex">
                      <img
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg"
                        alt=""
                        className="mr-1.5 inline-block w-4 flex-none"
                      />
                      <img
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg"
                        alt=""
                        className="mr-1.5 inline-block w-4 flex-none"
                      />
                      <img
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg"
                        alt=""
                        className="mr-1.5 inline-block w-4 flex-none"
                      />
                      <img
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg"
                        alt=""
                        className="mr-1.5 inline-block w-4 flex-none"
                      />
                      <img
                        src="https://assets.website-files.com/6458c625291a94a195e6cf3a/647e390253503e4d887918ea_Star%201.svg"
                        alt=""
                        className="mr-1.5 inline-block w-4 flex-none"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          {/* Content */}

          {/* Content */}

          {/* Content */}
        </div>
        {/* Button */}
        <div className="w-full flex justify-center">
          <a
            href="#"
            className="bg-primary px-6 py-3 text-center font-semibold text-white"
          >
            查看更多
          </a>
        </div>
      </div>
    </section>
  );
}
