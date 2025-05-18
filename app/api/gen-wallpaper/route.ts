import { insertWallpaper } from "@/models/wallpaper";
import { getOpenAIClient } from "@/service/openai";
import { Wallpaper } from "@/types/wallpaper";
import { ImageGenerateParams } from "openai/resources.mjs";
import { User } from "@/types/user";
import { currentUser } from "@clerk/nextjs/server";
import { insertUser } from "@/models/user";
import { saveUser } from "@/service/user";

export async function POST(req: Request) {
  const { description } = await req.json();

  //检查用户登录态
  const user = await currentUser();
  if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
    return Response.json({
      code: -1,
      message: "use not login",
    });
  }
  const user_email = user.emailAddresses[0].emailAddress;
  console.log(user_email);
  
  const nickname = user.firstName;
  const avatarUrl = user.imageUrl;
  const userInfo: User = {
    email: user_email,
    nickname: nickname || "",
    avatar_url: avatarUrl,
  };

  await saveUser(userInfo);

  console.log("description: ", description);

  const client = getOpenAIClient();
  const llm_name = "dall-e-2";
  const img_size = "1024x1024";
  const llm_params: ImageGenerateParams = {
    prompt: `generate a wallpaper about: ${description}`,
    model: llm_name,
    n: 1,
    quality: "standard",
    response_format: "url",
    size: img_size,
  };
  const created_at = new Date().toISOString();
  const result = await client.images.generate(llm_params);
  // console.log("generate wallpaper result: ", result);
  if (!result?.data?.[0]?.url) {
    // 可选链操作符逐层校验
    return Response.json(
      {
        code: -1,
        msg: "generate wallpaper failed",
      },
    );
  }
  const img_url = result.data[0].url;
  console.log(img_url);
  
  const wallpaper: Wallpaper = {
    user_email: user_email,
    img_description: description,
    img_size: img_size,
    img_url: img_url,
    llm_name: llm_name,
    llm_params: JSON.stringify(llm_params),
    created_at: created_at,
    created_user:userInfo,
  };
  await insertWallpaper(wallpaper);
  return Response.json({
    code: 0,
    msg: "ok",
    data: wallpaper,
  });
}
