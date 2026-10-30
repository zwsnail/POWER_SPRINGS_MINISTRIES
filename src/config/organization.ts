// Official Organization Configuration for POWER SPRING MINISTRIES INC
// Central source of truth for Google for Nonprofits, TechSoup, and IRS compliance.

export interface OrganizationAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  fullFormatted: string;
}

export interface OrganizationDetails {
  legalName: string;
  chineseName: string;
  brandSloganZh: string;
  brandSloganEn: string;
  officialDomain: string;
  officialUrl: string;
  charityId: string; // IRS Employer Identification Number (EIN)
  charityIdLabelZh: string;
  charityIdLabelEn: string;
  taxStatusZh: string;
  taxStatusEn: string;
  directorName: string;
  contactEmail: string;
  address: OrganizationAddress;
  domainOwnershipEn: string;
  domainOwnershipZh: string;
  missionStatementEn: string;
  missionStatementZh: string;
  ssfiAcronym: string;
  ssfiFullNameEn: string;
  ssfiFullNameZh: string;
  threePillarsEn: string[];
  threePillarsZh: string[];
}

export const ORGANIZATION_DETAILS: OrganizationDetails = {
  // Official Legal Entity Name exactly as registered with the IRS & State
  legalName: 'POWER SPRING MINISTRIES INC',
  chineseName: '能量泉',
  brandSloganZh: '伴您安居 · 爱中同行 · 扎根社区',
  brandSloganEn: 'Shelter · Care · Community',
  
  // Official Primary Domain (verified with Google for Nonprofits)
  officialDomain: 'powerspring.org',
  officialUrl: 'https://powerspring.org',

  // Registered Charity ID / IRS Employer Identification Number (EIN)
  // Exactly as verified in IRS Letter 947
  charityId: '39-4787111', 
  charityIdLabelZh: '免税慈善机构代码 (IRS EIN)',
  charityIdLabelEn: 'Charity ID / IRS EIN',

  // IRS Tax-Exempt Status
  taxStatusZh: '美国国内税收署 501(c)(3) 认定公共慈善机构 (IRC 170(b)(1)(A)(vi))',
  taxStatusEn: 'IRS-Recognized 501(c)(3) Public Charity (IRC 170(b)(1)(A)(vi))',

  directorName: 'Peter Qu',
  contactEmail: 'peterqu@powerspring.org',

  // Registered Physical Street Address exactly as listed in the IRS official determination letter
  address: {
    street: '3511 S Paulina St',
    city: 'Chicago',
    state: 'IL',
    zip: '60609',
    country: 'United States',
    fullFormatted: '3511 S Paulina St, Chicago, IL 60609, USA',
  },

  // Explicit Domain Ownership Declaration required by Google for Nonprofits
  domainOwnershipEn: 'powerspring.org is the official primary domain and online platform owned and operated by POWER SPRING MINISTRIES INC (a registered 501(c)(3) non-profit public charity).',
  domainOwnershipZh: 'powerspring.org 是由 POWER SPRING MINISTRIES INC（美国国税局 501(c)(3) 注册非营利公共慈善机构）全权拥有并运营的官方主域名及在线平台。',

  // Official Mission Statement
  missionStatementEn: 'Power Spring Ministries is dedicated to serve overseas Chinese students, scholars, families and immigrants(SSFI) with comprehensive support: airport pick up, temporary and long-term housing, foods, rides, career and health counseling to help individuals to settle down, to build up and thrive!',
  missionStatementZh: '能量泉（Power Spring Ministries）致力于为海外中国留学生、学者、家庭及新移民群体（SSFI）提供全方位的支持与关怀：涵盖机场接机、临时与长期安居、食物物资、爱心接送、职业发展及身心健康辅导，助力每一个人安居落脚、立足成长、蓬勃发展！',
  ssfiAcronym: 'SSFI',
  ssfiFullNameEn: 'Overseas Chinese Students, Scholars, Families and Immigrants',
  ssfiFullNameZh: '海外中国留学生、访问学者、华人家庭与新移民',
  threePillarsEn: ['Settle Down', 'Build Up', 'Thrive'],
  threePillarsZh: ['安居落脚', '立足成长', '蓬勃发展'],
};
