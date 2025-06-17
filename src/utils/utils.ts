import api from "./api";
import type { BingImageResponse } from "../types/types";

export function getBingImage() {
  const randomDay = Math.floor(Math.random() * 8);
  return api
    .get<BingImageResponse>(
      `/HPImageArchive.aspx?format=js&idx=${randomDay}&n=1&mkt=zh-CN`
    )
    .then((res) => {
      return `https://www.bing.com${res.data["images"][0]["url"]}_1920x1080.jpg`;
    });
}
