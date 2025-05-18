
import { getWallpapers } from "@/models/wallpaper";
import { Wallpaper } from "@/types/wallpaper";

export async function GET(request: Request) {
  const wallpapers: Wallpaper[] = (await getWallpapers(1,50)) ?? [];
  return Response.json({
    code: 0,
    message: "ok",
    data: wallpapers,
  });
}



// import { Wallpaper } from "@/types/wallpaper";

// export function GET(request: Request) {
//   const wallpapers: Wallpaper[] = [
//     {
//       img_description: "两只可爱的小猫在公园的草坪里玩耍",
//       img_url: "https://s3.ffire.cc/cdn/20250517/BKegS7iacmfPy5wwKxyUga",
//       user_avatar:
//         "https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c001/ogIPaAsHQEAefgK5A1AA9MKzYQLfYfcGfD1nmo~noop.jpeg?biz_tag=pcweb_cover&card_type=303&column_n=0&from=327834062&lk3s=138a59ce&s=PackSourceEnum_SEARCH&se=false&x-expires=1748494800&x-signature=VX3yeB62I7w9nFolOiV4dVDR1Ag%3D",
//       user_nickname: "张三",
//       img_size: "1024x1024",
//     },
//     {
//       img_description: "happy new year 1",
//       img_url: "https://s3.ffire.cc/cdn/20250514/cMbn8ojTDSxMSjrUxKJTYQ",
//       user_avatar:
//         "https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c001/ogIPaAsHQEAefgK5A1AA9MKzYQLfYfcGfD1nmo~noop.jpeg?biz_tag=pcweb_cover&card_type=303&column_n=0&from=327834062&lk3s=138a59ce&s=PackSourceEnum_SEARCH&se=false&x-expires=1748494800&x-signature=VX3yeB62I7w9nFolOiV4dVDR1Ag%3D",
//       user_nickname: "张三",
//       img_size: "1024x1024",
//     },
//     {
//       img_description: "happy new year 2",
//       img_url: "https://s3.ffire.cc/cdn/20250514/cMbn8ojTDSxMSjrUxKJTYQ",
//       user_avatar:
//         "https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c001/ogIPaAsHQEAefgK5A1AA9MKzYQLfYfcGfD1nmo~noop.jpeg?biz_tag=pcweb_cover&card_type=303&column_n=0&from=327834062&lk3s=138a59ce&s=PackSourceEnum_SEARCH&se=false&x-expires=1748494800&x-signature=VX3yeB62I7w9nFolOiV4dVDR1Ag%3D",
//       user_nickname: "李四",
//       img_size: "1024x1024",
//     },
//   ];
//   return Response.json({
//     code: 0,
//     message: "ok",
//     data: wallpapers,
//   });
// }
