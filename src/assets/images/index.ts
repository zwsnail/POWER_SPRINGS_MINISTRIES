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
  // 核心事工：暖心餐饮与查经聚会（真实照片：为访问学者家属及医学博士包水饺聚餐）
  meals: '/images/gallery/power-spring-visiting-scholars-fellowship-dumpling-meal.jpg',
  mobility: carRoadsideImg,
  englishTax: englishTaxImg,
  // 核心事工与周六讲座：心灵关怀与辅导研讨会（真实照片：同工研讨餐会策划心灵辅导体系）
  counseling: '/images/gallery/power-spring-pastoral-counseling-development-meeting.jpg',
  // 额外图集占位或备用
  communityPantry: '/images/gallery/power-spring-visiting-scholars-fellowship-dumpling-meal.jpg',
  shelterCozy: housingShelterImg,
  zoomCounseling: '/images/gallery/power-spring-pastoral-counseling-development-meeting.jpg',
  vehicleRescue: carRoadsideImg,
  englishClub: englishTaxImg,

  // 爱心图集真实照片与占位对照
  galleryEntrepreneurshipForum: '/images/gallery/entrepreneurship_forum.svg',
  // 已替换为真实社区活动照片 (美东自驾游与学者家庭借宿接待)
  galleryRoadTrips: '/images/gallery/power-spring-east-coast-tour-pastor-home-lodging.jpg',
  galleryBusinessSeminar: '/images/gallery/business_seminar.svg',
  // 已替换为真实社区活动照片 (团长老家欢送聚会与团契相聚)
  galleryMaumeeRetreat: '/images/gallery/power-spring-community-fellowship-farewell-gathering.jpg',
  galleryChristmasParty: '/images/gallery/christmas_party.svg',
  galleryAiSeminar: '/images/gallery/ai_seminar.svg',
  // 已替换为真实社区活动照片 (密歇根大湖户外圣洁洗礼)
  galleryLakeMichiganBaptism: '/images/gallery/power-spring-lake-michigan-great-lake-baptism.jpg',
  galleryHunanVisit: '/images/gallery/hunan_visit.svg',
  // 已替换为真实社区活动照片 (冬季佛罗里达温暖之旅)
  galleryFloridaTrip: '/images/gallery/power-spring-florida-winter-sunshine-trip.jpg',
  // 已替换为真实社区活动照片 (美籍资深同工带领沉浸式英文查经与生活对话)
  galleryBibleStudy: '/images/gallery/power-spring-cross-cultural-bible-study.jpg',
  // 已替换为真实社区活动照片 (华人妈妈与家庭温馨互助支持聚会)
  galleryBeautifulMoms: '/images/gallery/power-spring-beautiful-moms-mutual-support.jpg',
  galleryPlaceholder: '/images/gallery/placeholder_blank.svg',
};
