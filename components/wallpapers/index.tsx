"use client";
import { Wallpaper } from "@/types/wallpaper";
import WallpaperList from "./WallpaperList";

interface Props{
  wallpapers:Wallpaper[];
}

export default function ({wallpapers}:Props) {

  return (
    <section className="max-w-6xl mx-auto">
    <WallpaperList wallpapers={wallpapers} />
      {/* <div className="flex items-center">
        {wallpapers &&
          wallpapers.map((v: Wallpaper, idx: number) => {
            return (
              <div key={v.img_url+(v.img_size || "")+idx} className="mx-4">
                <h2 className="text-lg font-bold">{v.img_description}</h2>
                <img className="rounded-lg" src={v.img_url} alt="" />
                <p>{v.img_size}</p>
              </div>
            );
          })}
      </div> */}
    </section>
  );
}
