import { ORGANIZATION_DETAILS } from './organization';

// Configuration for Power Spring Ministries donations
export const DONATION_CONFIG = {
  // Official Stripe Payment Link for Power Spring Ministries (Donor customizes amount)
  stripeDonationUrl: 'https://donate.stripe.com/4gM14n081bxO3MneAF2Nq00',
  organizationName: ORGANIZATION_DETAILS.legalName,
  chineseName: ORGANIZATION_DETAILS.chineseName,
  contactEmail: ORGANIZATION_DETAILS.contactEmail,
  taxStatus: ORGANIZATION_DETAILS.taxStatusEn,
  charityId: ORGANIZATION_DETAILS.charityId,
  mailingAddress: ORGANIZATION_DETAILS.address.fullFormatted,
  officialDomain: ORGANIZATION_DETAILS.officialDomain,
};

