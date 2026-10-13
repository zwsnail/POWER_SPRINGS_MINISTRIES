// Configuration for Power Spring Ministries donations
// Replace stripeDonationUrl with your Stripe Payment Link once generated in your Stripe Dashboard.
export const DONATION_CONFIG = {
  // Example: 'https://donate.stripe.com/xxx' or 'https://buy.stripe.com/xxx'
  // When empty or placeholder, the donation modal informs the user and provides direct contact/check options.
  stripeDonationUrl: import.meta.env.VITE_STRIPE_DONATION_URL || '',
  organizationName: 'Power Spring Ministries INC',
  chineseName: '涌泉事工',
  contactEmail: 'peter.qu@powerspringministries.org',
  taxStatus: '501(c)(3) Non-Profit Public Charity',
  mailingAddress: 'Power Spring Ministries INC (Contact Director Peter Qu for mailing address)',
};
