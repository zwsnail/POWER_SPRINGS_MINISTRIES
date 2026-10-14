import React from 'react';

/**
 * 🌊 泉水与祥云简笔画矢量线描组件 (Chinese Traditional Spring Water & Auspicious Cloud Line-Art Motifs)
 * 采用极简清雅的中国古典线描白描手法，勾勒泉涌、水涡、水波与祥云纹样，
 * 仅作虚淡点缀，衬托「涌泉润泽」的文化意境，不喧宾夺主。
 */

interface MotifProps {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

/**
 * 1. 泉涌清泉纹 (Spring Plume Motif)
 * 简笔画：中心活泉向上涌跃，左右水波涟漪层层荡开，伴随几点轻盈水滴。
 */
export const SpringPlumeMotif: React.FC<MotifProps> = ({
  className = "w-48 h-32 text-accent-theme/20",
  strokeWidth = 1.3,
}) => {
  return (
    <svg
      viewBox="0 0 200 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 底部基底波纹 (Base Ripple Curves) */}
      <path
        d="M20 115 C55 105, 85 118, 100 115 C115 112, 145 105, 180 115"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M38 123 C68 116, 92 124, 100 122 C108 120, 132 116, 162 123"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        strokeDasharray="1 0"
        opacity="0.75"
      />

      {/* 左右外侧回旋泉纹 (Outer water swirls) */}
      <path
        d="M30 98 C45 92, 60 96, 75 88 C82 84, 85 75, 78 68 C72 62, 63 65, 62 72 C61 78, 66 84, 74 86"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M170 98 C155 92, 140 96, 125 88 C118 84, 115 75, 122 68 C128 62, 137 65, 138 72 C139 78, 134 84, 126 86"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 中心泉涌主束 (Central Gushing Spring Streams) */}
      <path
        d="M93 115 C92 85, 84 55, 78 40 C75 32, 80 24, 88 24 C97 24, 98 34, 98 46"
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.15}
        strokeLinecap="round"
      />
      <path
        d="M107 115 C108 85, 116 55, 122 40 C125 32, 120 24, 112 24 C103 24, 102 34, 102 46"
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.15}
        strokeLinecap="round"
      />
      <path
        d="M100 115 C100 70, 96 35, 100 15 C101 12, 102 12, 103 14 C105 20, 101 32, 100 45"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />

      {/* 泉跃水滴 (Rising Water Droplets - Minimalist dots) */}
      <circle cx="100" cy="8" r="2.2" fill="currentColor" opacity="0.85" />
      <circle cx="86" cy="16" r="1.6" fill="currentColor" opacity="0.75" />
      <circle cx="114" cy="16" r="1.6" fill="currentColor" opacity="0.75" />
      <circle cx="70" cy="48" r="1.4" fill="currentColor" opacity="0.6" />
      <circle cx="130" cy="48" r="1.4" fill="currentColor" opacity="0.6" />
    </svg>
  );
};

/**
 * 2. 祥云流水纹 (Cloud & Stream Wave Motif)
 * 简笔画：传统回形如意祥云与自然奔流泉水融为一体，寓意「祥云霖雨，化为甘泉」。
 */
export const CloudWaterMotif: React.FC<MotifProps> = ({
  className = "w-40 h-20 text-accent-theme/20",
  strokeWidth = 1.3,
}) => {
  return (
    <svg
      viewBox="0 0 160 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 祥云如意卷头 + 延伸水波 (Cloud Spiral into Water Ripple) */}
      <path
        d="M25 45 C15 45, 10 36, 15 28 C20 20, 32 20, 36 28 C40 18, 54 18, 58 28 C62 24, 72 24, 75 32 C85 32, 95 38, 105 38 C120 38, 135 34, 150 36"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 内部回转卷纹 (Internal cloud scroll) */}
      <path
        d="M24 38 C21 35, 23 30, 27 30 C31 30, 33 34, 30 37"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />

      {/* 下方流淌水纹 (Underflowing Water Currents) */}
      <path
        d="M10 55 C30 52, 45 60, 65 56 C85 52, 105 58, 125 54 C138 52, 148 55, 155 55"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M35 66 C55 63, 75 68, 95 65 C115 62, 130 66, 145 65"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* 泉花微沫 (Droplets) */}
      <circle cx="82" cy="24" r="1.3" fill="currentColor" opacity="0.65" />
      <circle cx="92" cy="28" r="1.0" fill="currentColor" opacity="0.5" />
    </svg>
  );
};

/**
 * 3. 简笔细泉中轴浪纹 (Delicate Spring Wave Divider / Ornament)
 * 简笔画：中央有两朵相向轻挽的泉浪纹，两旁延伸如丝流水细线。
 * 非常适合置于标题下方、横线中央，作为古典精致的标点饰条。
 */
export const SpringWaveDivider: React.FC<{
  className?: string;
  lineWidth?: string;
}> = ({ className = "my-3", lineWidth = "w-16" }) => {
  return (
    <div className={`flex items-center justify-center gap-2 text-accent-theme ${className}`}>
      {/* 左侧微澜细线 */}
      <div className={`h-px bg-gradient-to-r from-transparent via-accent-theme/40 to-accent-theme/80 ${lineWidth}`} />

      {/* 中央泉水纹简笔微标 (Micro Wave Icon) */}
      <svg
        viewBox="0 0 36 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-3.5 shrink-0 opacity-80"
        aria-hidden="true"
      >
        <path
          d="M2 9 C6 9, 8 5, 12 5 C16 5, 17 9, 21 9 C25 9, 26 5, 30 5 C32 5, 34 7, 34 8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="3" r="1.1" fill="currentColor" opacity="0.9" />
      </svg>

      {/* 右侧微澜细线 */}
      <div className={`h-px bg-gradient-to-l from-transparent via-accent-theme/40 to-accent-theme/80 ${lineWidth}`} />
    </div>
  );
};

/**
 * 4. 泉水角花小点缀 (Corner Spring Wave Accent)
 * 简笔画：轻柔的直角浪花回纹，用于卡片或浮层的右上角/左下角微弱烘托。
 */
export const CornerWaveAccent: React.FC<{ className?: string }> = ({
  className = "w-14 h-14 text-accent-theme/25",
}) => {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M58 4 C38 4, 25 12, 16 22 C8 32, 4 45, 4 58"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M58 14 C44 14, 32 20, 24 28 C16 36, 14 46, 14 58"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="34" cy="18" r="1.3" fill="currentColor" opacity="0.7" />
    </svg>
  );
};

/**
 * 5. 圣爱活水十字架简笔画 (Christian Cross with Living Water & Radiance Motif)
 * 简笔画：修长庄严的圣十字架，底部连接生命涌泉之涟漪波纹，十字交会处带有清雅微芒与甘露水滴。
 */
export const ChristianCrossMotif: React.FC<MotifProps> = ({
  className = "w-40 h-52 text-accent-theme/20",
  strokeWidth = 1.3,
}) => {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 圣架光芒微芒 (Subtle Radiant Burst from Cross Center) */}
      <circle cx="60" cy="52" r="14" stroke="currentColor" strokeWidth={strokeWidth * 0.7} strokeDasharray="2 3" opacity="0.45" />
      <path d="M60 32 L60 26 M60 72 L60 78 M40 52 L34 52 M80 52 L86 52" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinecap="round" opacity="0.55" />
      <path d="M47 39 L42 34 M73 65 L78 70 M47 65 L42 70 M73 39 L78 34" stroke="currentColor" strokeWidth={strokeWidth * 0.7} strokeLinecap="round" opacity="0.4" />

      {/* 经典圣十字架主体线条 (Classical Slender Latin Cross) */}
      {/* 竖柱 (Vertical Post) */}
      <path
        d="M60 14 L60 124"
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.5}
        strokeLinecap="round"
      />
      {/* 横梁 (Horizontal Beam) */}
      <path
        d="M32 52 L88 52"
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.5}
        strokeLinecap="round"
      />
      
      {/* 十字架端头典雅小短线 (Classical Serifs) */}
      <path d="M57 14 L63 14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.8" />
      <path d="M32 49 L32 55" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.8" />
      <path d="M88 49 L88 55" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.8" />

      {/* 十字架基底承托的「活水涟漪」 (Living Water Spring Ripples at the Base) */}
      <path
        d="M36 130 C46 124, 74 124, 84 130"
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.1}
        strokeLinecap="round"
      />
      <path
        d="M24 138 C42 131, 78 131, 96 138"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M16 147 C38 140, 82 140, 104 147"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* 左右回转的小水花浪线 (Delicate Swirls at Base) */}
      <path
        d="M34 128 C26 128, 22 122, 26 116 C30 110, 36 114, 34 120"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M86 128 C94 128, 98 122, 94 116 C90 110, 84 114, 86 120"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* 圣洁水珠甘霖 (Sacred Dew / Water Droplets) */}
      <circle cx="60" cy="6" r="1.8" fill="currentColor" opacity="0.85" />
      <circle cx="50" cy="116" r="1.3" fill="currentColor" opacity="0.75" />
      <circle cx="70" cy="116" r="1.3" fill="currentColor" opacity="0.75" />
      <circle cx="60" cy="122" r="1.5" fill="currentColor" opacity="0.9" />
    </svg>
  );
};

/**
 * 6. 圣灵白鸽与橄榄枝简笔画 (Holy Spirit Dove & Olive Branch Motif)
 * 简笔画：一笔而就的飞翔白鸽衔橄榄枝，象征平安、纯全、信望爱与圣灵同在。
 */
export const ChristianDoveMotif: React.FC<MotifProps> = ({
  className = "w-36 h-28 text-accent-theme/20",
  strokeWidth = 1.3,
}) => {
  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 上展之翼 (Upper Wing Feather Strokes) */}
      <path
        d="M62 48 C56 34, 46 18, 30 12 C36 22, 40 32, 38 42 C30 40, 22 42, 14 48 C22 48, 30 46, 36 48"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 鸽身与头部 (Dove Silhouette & Head) */}
      <path
        d="M36 48 C42 54, 50 58, 60 58 C74 58, 88 50, 98 42 C106 36, 114 34, 120 36 C118 40, 112 43, 108 45 C96 52, 85 66, 74 74 C66 80, 54 82, 44 80"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 尾羽 (Tail Feathers) */}
      <path
        d="M44 80 C34 84, 22 86, 12 84 C22 80, 28 74, 32 68"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />
      {/* 鸽眼微点 (Eye) */}
      <circle cx="114" cy="38" r="1.1" fill="currentColor" opacity="0.85" />

      {/* 鸽喙中所衔橄榄枝 (Olive Branch) */}
      <path
        d="M120 36 C126 34, 131 30, 135 28"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />
      {/* 橄榄叶片 (Olive Leaves) */}
      <path
        d="M127 33 C128 29, 132 28, 133 31 C133 34, 129 35, 127 33 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M132 29 C135 25, 139 26, 138 29 C137 31, 134 31, 132 29 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M135 28 C138 31, 137 35, 134 35 C132 34, 133 30, 135 28 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        fill="currentColor"
        fillOpacity="0.3"
      />

      {/* 下方微澜流水痕 (Gentle Water Wave under Dove) */}
      <path
        d="M30 92 C50 88, 70 94, 90 90 C105 87, 115 90, 125 90"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
};

/**
 * 7. 圣洁十字架与橄榄枝典雅中轴线 (Cross & Olive Branch Divider)
 * 简笔画：中心为极简基督教圣十字，两侧环绕橄榄枝叶与流水细线，
 * 专为经文展板、重要使命愿景或篇章分割设计，庄严圣洁。
 */
export const CrossOliveDivider: React.FC<{
  className?: string;
  lineWidth?: string;
}> = ({ className = "my-3.5", lineWidth = "w-12 sm:w-16" }) => {
  return (
    <div className={`flex items-center justify-center gap-2 text-accent-theme ${className}`}>
      {/* 左侧渐变细线 */}
      <div className={`h-px bg-gradient-to-r from-transparent via-accent-theme/40 to-accent-theme/80 ${lineWidth}`} />

      {/* 左侧橄榄枝叶微线描 (Left Olive Sprig) */}
      <svg
        viewBox="0 0 24 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-2.5 shrink-0 opacity-75"
        aria-hidden="true"
      >
        <path d="M22 6 C16 6, 8 7, 2 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M16 6 C14 3, 10 3, 11 6 Z" fill="currentColor" opacity="0.6" />
        <path d="M9 7 C8 4, 4 5, 5 8 Z" fill="currentColor" opacity="0.6" />
      </svg>

      {/* 中央圣十字架简笔微标 (Center Cross Micro Emblem) */}
      <svg
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-5 shrink-0 opacity-90"
        aria-hidden="true"
      >
        {/* 光环圆环 */}
        <circle cx="10" cy="8" r="4.5" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.6" />
        {/* 竖柱 */}
        <line x1="10" y1="2" x2="10" y2="22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* 横梁 */}
        <line x1="4" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* 底部微点 */}
        <circle cx="10" cy="23" r="0.8" fill="currentColor" opacity="0.8" />
      </svg>

      {/* 右侧橄榄枝叶微线描 (Right Olive Sprig) */}
      <svg
        viewBox="0 0 24 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-2.5 shrink-0 opacity-75 rotate-180"
        aria-hidden="true"
      >
        <path d="M22 6 C16 6, 8 7, 2 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M16 6 C14 3, 10 3, 11 6 Z" fill="currentColor" opacity="0.6" />
        <path d="M9 7 C8 4, 4 5, 5 8 Z" fill="currentColor" opacity="0.6" />
      </svg>

      {/* 右侧渐变细线 */}
      <div className={`h-px bg-gradient-to-l from-transparent via-accent-theme/40 to-accent-theme/80 ${lineWidth}`} />
    </div>
  );
};

/**
 * 8. 耶稣鱼活水简笔微印 (Ichthys & Living Water Micro Emblem)
 * 简笔画：基督教早期伊克图斯（Ichthys）圣鱼纹，尾部化为涌流泉水与微小十字印。
 */
export const IchthysWaterMotif: React.FC<MotifProps> = ({
  className = "w-28 h-16 text-accent-theme/25",
  strokeWidth = 1.3,
}) => {
  return (
    <svg
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 耶稣鱼流线 (Classic Ichthys Curved Stroke) */}
      <path
        d="M92 12 C72 16, 42 12, 18 25 C42 38, 72 34, 92 38"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M92 38 C72 34, 42 38, 18 25 C42 12, 72 16, 92 12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* 鱼眼中微小十字 (Small Cross Eye) */}
      <line x1="30" y1="23" x2="30" y2="27" stroke="currentColor" strokeWidth={strokeWidth * 0.9} strokeLinecap="round" />
      <line x1="28" y1="25" x2="32" y2="25" stroke="currentColor" strokeWidth={strokeWidth * 0.9} strokeLinecap="round" />

      {/* 伴随的涌水微纹 (Spring ripples trailing) */}
      <path
        d="M4 35 C14 32, 24 36, 36 33"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="12" cy="28" r="1.2" fill="currentColor" opacity="0.6" />
    </svg>
  );
};
