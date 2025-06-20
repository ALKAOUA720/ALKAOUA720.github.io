import { BingImages } from "../config/config";

export function getBingImage() {
  const len = BingImages.length;
  const randomIdx = Math.floor(Math.random() * len); // 生成 0 到 len 之间的随机数
  return BingImages[randomIdx];
}
