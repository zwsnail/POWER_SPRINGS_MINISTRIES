# Google for Nonprofits Verification & Institutional Transparency Plan

This plan details the necessary website changes to verify domain ownership (`powerspring.org`) and fulfill Google for Nonprofits requirements for **POWER SPRING MINISTRIES INC**, explicitly displaying the registered Charity ID (EIN) and physical street address across the public platform.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following parameters were confirmed during clarification:
> - **Primary Canonical Domain**: `powerspring.org` is the official primary domain owned and operated by POWER SPRING MINISTRIES INC. All URLs, canonical tags, and schema definitions will align to `powerspring.org`.
> - **Display Scope**: Organization details will be placed across the Global Footer, Contact Page, About Page, and Schema.org JSON-LD structured data.
> - **Input Method for EIN and Address**: Centralized configuration will be created in a clean config module (`src/config/organization.ts`) with clear fields, allowing the exact IRS EIN (e.g. `12-3456789`) and registered physical street address to be populated seamlessly and reflected across the entire website.

- **Confirmed Decision 1**: Standardize on `powerspring.org` as the sole canonical domain across HTML metadata, OpenGraph tags, and Schema.org JSON-LD.
- **Confirmed Decision 2**: Introduce a dedicated, refined "Institutional Transparency & Legal Governance" card on the Contact and About pages, alongside a comprehensive legal footer ribbon.
- **Open Action for User**: Once the files are updated, the user will confirm the final 9-digit EIN and registered street address in the central config so it precisely matches the IRS determination letter submitted to Google.

---

### 1. Overview & Core Concept

- **What It Does**: Fulfills Google for Nonprofits transparency requirements by unambiguously proving that POWER SPRING MINISTRIES INC owns and operates `powerspring.org`, explicitly presenting the Charity ID (EIN), physical street address, and legal governance across all standard touchpoints.
- **Target Audience**: Google for Nonprofits / TechSoup domain verification reviewers, charity watchdogs, and community donors looking for verified legal accountability.
- **Key Value**: Guarantees fast approval for Google Workspace for Nonprofits activation while strengthening donor trust and institutional legitimacy.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Google Reviewer or Donor Visits Homepage / Footer**: Reviewer scrolls down and sees a clean, dignified institutional baseline containing the legal entity name, Charity ID (EIN), physical address, and domain ownership statement.
  2. **Reviewer Navigates to Contact (`/contact`)**: Finds a dedicated "Official Nonprofit Transparency & Office Details" plaque displaying the registered address, EIN, Director contact, and tax-exempt certification.
  3. **Reviewer Navigates to About (`/about`)**: Finds an "Institutional Governance & 501(c)(3) Charter" section validating corporate identity and public charity status.
  4. **Automated Search Crawlers / Rich Snippets**: Google's bot parses the updated `index.html` Schema.org `NGO` block with matching `name`, `taxID`, `url: https://powerspring.org`, and `address: PostalAddress`.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Institutional Archival elegance following `references/9_museum_editorial_institutional.md` — warm alabaster/stone structural surfaces, deep slate typography, delicate 1px hairline borders (`border-slate-200`), and zero-pill typography.
  - *Color Palette & Tokens*: Slate-900 typography, subtle Slate-50/Slate-100 backgrounds, subtle gold/bronze accents (`text-accent-theme`), no aggressive neon or unstyled badges.
  - *Typography & Hierarchy*: Serif headers (Cormorant Garamond) paired with clean geometric body type (Plus Jakarta Sans) and tabular monospace formatting (`font-mono`) for the Charity EIN and Postal ZIP code.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Centralized Configuration vs Hardcoded Text**
  - *Chosen Approach*: Centralize all legal entity data (`legalName`, `charityId`, `physicalAddress`, `officialDomain`, `irsStatus`) in a dedicated config file (`src/config/organization.ts`) and import it into Footer, Contact, About, Terms, and Donation configs.
  - *Why*: Prevents discrepancies between pages. Changing the EIN or address in one place updates the entire website instantly.
  - *Alternatives Considered*: Hardcoding strings in separate components was rejected because it easily leads to out-of-sync information that triggers Google rejections.

- **Decision 2: Domain Normalization to `powerspring.org`**
  - *Chosen Approach*: Update `index.html` Schema.org URL, OpenGraph links, and canonical domain references from the legacy `powerspringministries.org` to `https://powerspring.org`.
  - *Why*: Google specifically flagged that they couldn't confirm `powerspring.org`'s relationship to the registered nonprofit. The website must explicitly designate `powerspring.org` as the official primary domain.

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│               src/config/organization.ts                    │
│  - legalName: "POWER SPRING MINISTRIES INC"                 │
│  - brandName: "Power Spring Ministries (能量泉)"             │
│  - officialDomain: "powerspring.org"                        │
│  - charityId: "XX-XXXXXXX" (IRS EIN)                        │
│  - physicalAddress: Street, City, State, ZIP                │
│  - irsStatus: "501(c)(3) Public Charity"                   │
└──────────────────────────────┬──────────────────────────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
┌──────────────┐      ┌─────────────────┐     ┌────────────────┐
│  Footer.tsx  │      │ ContactPage.tsx │     │ AboutPage.tsx  │
│  Global      │      │ Transparency    │     │ Governance &   │
│  Legal Bar   │      │ Card & Address  │     │ 501(c)(3) Card │
└──────────────┘      └─────────────────┘     └────────────────┘
                               │
                               ▼
                      ┌─────────────────┐
                      │   index.html    │
                      │  Schema.org NGO │
                      │  taxID & Postal │
                      └─────────────────┘
```

- **Interactive Component & State Mapping**:
  - `src/config/organization.ts`: Exports structured `ORGANIZATION_DETAILS`.
  - `src/components/Footer.tsx`: Displays the official domain ownership declaration, registered Charity ID, and physical address at the base of every page.
  - `src/components/ContactSection.tsx`: Adds the physical office address block and copyable EIN to the contact card.
  - `src/components/AboutSection.tsx`: Adds corporate stewardship credentials and charity status.
  - `index.html`: Enriches the `<script type="application/ld+json">` tag with `taxID`, `PostalAddress`, and `https://powerspring.org`.
  - `src/locales/translations.ts`: Includes bilingual labels for Charity ID, Physical Address, and Domain Ownership.
