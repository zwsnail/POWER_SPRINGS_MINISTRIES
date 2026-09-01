export type Language = 'zh' | 'en';

export type NavTab = 'home' | 'ministries' | 'gallery' | 'about' | 'contact';

export interface ImpactStat {
  id: string;
  number: string;
  labelZh: string;
  labelEn: string;
  descZh: string;
  descEn: string;
  icon: string;
}

export interface MinistryItem {
  id: string;
  titleZh: string;
  titleEn: string;
  tagZh: string;
  tagEn: string;
  summaryZh: string;
  summaryEn: string;
  detailsZh: string[];
  detailsEn: string[];
  icon: string;
  image: string;
  keyStatZh: string;
  keyStatEn: string;
}

export interface GalleryItem {
  id: string;
  titleZh: string;
  titleEn: string;
  category: 'housing' | 'meals' | 'mobility' | 'counseling' | 'community';
  categoryZh: string;
  categoryEn: string;
  descZh: string;
  descEn: string;
  image: string;
  dateZh?: string;
  dateEn?: string;
}

export interface LeadershipMember {
  nameZh: string;
  nameEn: string;
  roleZh: string;
  roleEn: string;
  bioZh: string;
  bioEn: string;
  avatarPlaceholder: string;
  contactNoteZh?: string;
  contactNoteEn?: string;
}

export interface ThemePalette {
  id: string;
  nameZh: string;
  nameEn: string;
  primary: string;
  primaryHover: string;
  primaryLight: string;
  accent: string;
  bgWarm: string;
}
