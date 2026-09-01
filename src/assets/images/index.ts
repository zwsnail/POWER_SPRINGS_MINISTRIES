/**
 * 图片资源配置文件 (Image Assets Configuration)
 * 
 * 💡 提示：当前使用温馨卡通插画作为示例。
 * 以后如果您有真实的活动照片，只需在此处替换对应图片的路径或 URL 即可全站自动更新！
 * 
 * Tip: Currently using warm cartoon illustrations.
 * When you have real community photos, simply update the file paths or URLs below!
 */

import heroCommunityImg from './hero_community_1788301806468.jpg';
import counselingImg from './counseling_care_1788301818537.jpg';
import foodPantryImg from './food_pantry_1788301830293.jpg';
import carRoadsideImg from './car_roadside_1788301840866.jpg';
import englishTaxImg from './english_tax_1788301851307.jpg';
import housingShelterImg from './housing_shelter_1788301862128.jpg';

export const APP_IMAGES = {
  hero: heroCommunityImg,
  housing: housingShelterImg,
  meals: foodPantryImg,
  mobility: carRoadsideImg,
  englishTax: englishTaxImg,
  counseling: counselingImg,
  // 额外图集占位或备用
  communityPantry: foodPantryImg,
  shelterCozy: housingShelterImg,
  zoomCounseling: counselingImg,
  vehicleRescue: carRoadsideImg,
  englishClub: englishTaxImg,
};
