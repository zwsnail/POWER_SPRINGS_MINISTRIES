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
};
