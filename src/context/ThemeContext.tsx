import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemePalette } from '../types';

export const THEME_PRESETS: ThemePalette[] = [
  {
    id: 'jilan-gold',
    nameZh: '霁蓝·宣和泥金 (明宣德霁蓝 · 庄严殿堂 ★推荐)',
    nameEn: 'Sacrificial Blue & Gold (Xuande Imperial)',
    primary: '#163b65',
    primaryHover: '#0f2846',
    primaryLight: '#f0f4f8',
    accent: '#c89b3c',
    accentHover: '#b0852e',
    accentLight: '#fdf8ee',
    accentBorder: '#e6c888',
    accentText: '#8a6214',
    accentNameZh: '宣和泥金',
    bgWarm: '#fbfbf8',
  },
  {
    id: 'canglang-water',
    nameZh: '沧浪·清泉碧波 (孟子沧浪水 · 清润活泉)',
    nameEn: 'Canglang Blue & Jade Spring (Clear Waters)',
    primary: '#20556f',
    primaryHover: '#143c50',
    primaryLight: '#ecf4f7',
    accent: '#267d6c',
    accentHover: '#1c6254',
    accentLight: '#eef8f5',
    accentBorder: '#8bd1c2',
    accentText: '#155649',
    accentNameZh: '翠微玉泉',
    bgWarm: '#f8faf9',
  },
  {
    id: 'dailan-bronze',
    nameZh: '远山黛·古铜墨韵 (文人水墨 · 历史厚重)',
    nameEn: 'Distant Mountain Indigo & Bronze (Archive)',
    primary: '#243447',
    primaryHover: '#162230',
    primaryLight: '#f1f4f6',
    accent: '#b8743b',
    accentHover: '#9c5f2d',
    accentLight: '#fcf6ef',
    accentBorder: '#deb58e',
    accentText: '#7b4417',
    accentNameZh: '汉柏古铜',
    bgWarm: '#faf8f4',
  },
  {
    id: 'tianqing-silk',
    nameZh: '天青·雨过云破 (宋徽宗汝窑 · 温润如玉)',
    nameEn: 'Song Ru Sky Cyan & Amber Silk (Serene)',
    primary: '#34617e',
    primaryHover: '#234459',
    primaryLight: '#eef5f8',
    accent: '#d49e42',
    accentHover: '#ba862d',
    accentLight: '#fdf9f0',
    accentBorder: '#eccb86',
    accentText: '#8e6215',
    accentNameZh: '汝窑落晖',
    bgWarm: '#f9f9f5',
  },
  {
    id: 'jingtai-blue',
    nameZh: '景泰蓝·矿物群青 (传统掐丝珐琅 · 端庄典雅)',
    nameEn: 'Cloisonné Blue & Cinnabar Vermilion (Vibrant)',
    primary: '#175185',
    primaryHover: '#103c64',
    primaryLight: '#eff5fa',
    accent: '#b93a2b',
    accentHover: '#982c1f',
    accentLight: '#fdf2f0',
    accentBorder: '#eea69d',
    accentText: '#8a2012',
    accentNameZh: '朱砂茜红',
    bgWarm: '#fdfdfc',
  },
];

interface ThemeContextType {
  currentTheme: ThemePalette;
  setThemeById: (id: string) => void;
  setCustomPrimary: (hex: string) => void;
  setCustomAccent: (hex: string) => void;
  isThemeModalOpen: boolean;
  setIsThemeModalOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemePalette>(THEME_PRESETS[0]);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  // Apply CSS variables to root element
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', currentTheme.primary);
    root.style.setProperty('--color-primary-hover', currentTheme.primaryHover);
    root.style.setProperty('--color-primary-light', currentTheme.primaryLight);
    root.style.setProperty(
      '--color-primary-ring',
      currentTheme.primary.startsWith('#')
        ? `${currentTheme.primary}40`
        : 'rgba(22, 59, 101, 0.25)'
    );

    const accent = currentTheme.accent;
    const accentHover = currentTheme.accentHover || accent;
    const accentLight = currentTheme.accentLight || `${accent}18`;
    const accentBorder = currentTheme.accentBorder || `${accent}45`;
    const accentText = currentTheme.accentText || accent;

    root.style.setProperty('--color-accent', accent);
    root.style.setProperty('--color-accent-hover', accentHover);
    root.style.setProperty('--color-accent-light', accentLight);
    root.style.setProperty('--color-accent-border', accentBorder);
    root.style.setProperty('--color-accent-text', accentText);
    root.style.setProperty(
      '--color-accent-ring',
      accent.startsWith('#') ? `${accent}40` : 'rgba(200, 155, 60, 0.3)'
    );

    root.style.setProperty('--color-bg-base', currentTheme.bgWarm);
  }, [currentTheme]);

  const setThemeById = (id: string) => {
    const found = THEME_PRESETS.find((p) => p.id === id);
    if (found) {
      setCurrentTheme(found);
    }
  };

  const setCustomPrimary = (hex: string) => {
    setCurrentTheme((prev) => ({
      ...prev,
      id: 'custom',
      nameZh: '自定义主色',
      nameEn: 'Custom Theme Color',
      primary: hex,
      primaryHover: hex,
      primaryLight: `${hex}15`,
    }));
  };

  const setCustomAccent = (hex: string) => {
    setCurrentTheme((prev) => ({
      ...prev,
      id: 'custom',
      nameZh: '自定义辅色',
      nameEn: 'Custom Accent Color',
      accent: hex,
      accentHover: hex,
      accentLight: `${hex}18`,
      accentBorder: `${hex}50`,
      accentText: hex,
    }));
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setThemeById,
        setCustomPrimary,
        setCustomAccent,
        isThemeModalOpen,
        setIsThemeModalOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
