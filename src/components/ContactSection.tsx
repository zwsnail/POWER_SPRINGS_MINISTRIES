import React, { useState } from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { 
  Mail, 
  Check, 
  Copy, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  SendHorizontal,
  MapPin,
  Building2,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { CrossOliveDivider } from './WaterMotifs';
import { ORGANIZATION_DETAILS } from '../config/organization';

interface ContactSectionProps {
  language: Language;
  hideHeader?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  hideHeader = false,
}) => {
  const t = translations[language];
  const c = t.contact;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedEin, setCopiedEin] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const emailAddress = ORGANIZATION_DETAILS.contactEmail;
  const charityId = ORGANIZATION_DETAILS.charityId;
  const fullAddress = ORGANIZATION_DETAILS.address.fullFormatted;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyEin = () => {
    navigator.clipboard.writeText(charityId);
    setCopiedEin(true);
    setTimeout(() => setCopiedEin(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const faqs = language === 'zh' ? [
    {
      q: '能量泉提供的临时住宿和救助收费吗？',
      a: '完全免费！能量泉是一家非营利公益慈善机构（NGO），所有临时安置、爱心餐食、蔬果派发、道路急难救援、二手车捐赠及英语角交流均不收取任何服务费用。',
    },
    {
      q: '如遇车辆故障抛锚或临时住宿急难，如何联系救助？',
      a: '请直接发送邮件至 peterqu@powerspring.org 说明您的紧急需求与当前位置，负责人 Peter Qu 及义工同工收到后会尽快协同对接支援。',
    },
    {
      q: '我想向事工捐赠二手车或闲置家具物资，流程是怎样的？',
      a: '非常感谢您的爱心！请直接发送邮件至 peterqu@powerspring.org 与负责人 Peter Qu 联络，事工会与您对接车辆过户手续（Title Transfer）或物资交接，并可根据需要提供爱心捐赠收据。',
    },
  ] : [
    {
      q: 'Are services such as temporary lodging and meals completely free?',
      a: 'Yes, 100% free! Power Spring Ministries INC is a non-profit charity. All temporary shelter, hot meals, groceries, emergency roadside aid, and language support are provided free of charge.',
    },
    {
      q: 'How do I request emergency roadside assistance or urgent shelter?',
      a: 'Please send an email directly to peterqu@powerspring.org detailing your urgent situation and location. Director Peter Qu and our ministry volunteers will coordinate to assist you as promptly as possible.',
    },
    {
      q: 'How does the vehicle or in-kind donation process work?',
      a: 'Thank you for your generosity! Reach out via email to peterqu@powerspring.org to connect with Director Peter Qu. Our team will coordinate title transfer or item drop-off and provide tax donation receipts upon request.',
    },
  ];

  return (
    <section id="contact" className={`${hideHeader ? 'py-12 sm:py-16' : 'py-16 sm:py-20'} bg-slate-50/70 border-b border-slate-200/80`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono font-medium mb-1">
              INQUIRIES & DIRECT CONTACT
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-normal">
              {c.sectionTitle}
            </h2>
            <CrossOliveDivider className="my-3" lineWidth="w-12 sm:w-16" />
            <p className="text-slate-600 text-base leading-relaxed">
              {language === 'zh'
                ? '欢迎通过官方电子邮箱与能量泉取得联系，负责人 Peter Qu 将尽快为您答复。'
                : 'Feel free to contact Power Spring Ministries via email. Director Peter Qu will respond promptly.'}
            </p>
          </div>
        )}

        {/* Dual Primary Contact & Registered Nonprofit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Card 1: Direct Director Contact */}
          <div className="bg-white border border-slate-200 rounded-xs p-6 sm:p-8 hover:border-slate-300 transition-colors shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xs border border-slate-200 bg-slate-50 text-primary-theme flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                  {language === 'zh' ? '负责人直通电子邮箱' : 'Director Direct Email'}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  {language === 'zh' ? '机构负责人: Peter Qu' : 'Executive Director: Peter Qu'}
                </p>
              </div>

              {/* Highlighted Email Box with Copy Action */}
              <div className="bg-slate-50 border border-slate-200 rounded-xs p-3.5 flex items-center justify-between gap-3">
                <div className="break-all font-mono font-bold text-slate-900 text-sm sm:text-base">
                  {emailAddress}
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xs text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-2xs"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-primary-theme" />
                      <span className="text-primary-theme font-medium">{language === 'zh' ? '已复制' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>{language === 'zh' ? '复制' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 mt-6">
              <a
                href={`mailto:${emailAddress}`}
                className="btn-primary w-full py-2.5 rounded-xs text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <SendHorizontal className="w-4 h-4" />
                <span>{language === 'zh' ? '直接打开邮箱发信' : 'Open Email Client'}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Registered Organization & Physical Street Address (Google for Nonprofits Transparency) */}
          <div className="bg-white border border-slate-200 rounded-xs p-6 sm:p-8 hover:border-slate-300 transition-colors shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xs border border-slate-200 bg-slate-50 text-accent-theme flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                  {language === 'zh' ? '注册实体与实体街道地址' : 'Registered Office & Charity ID'}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5 font-medium">
                  {ORGANIZATION_DETAILS.legalName}
                </p>
              </div>

              {/* Physical Street Address Block with Copy */}
              <div className="bg-slate-50 border border-slate-200 rounded-xs p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary-theme shrink-0" />
                    <span>{language === 'zh' ? '物理街道地址 (Physical Address)' : 'Physical Street Address'}</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                    title="Copy address"
                  >
                    {copiedAddress ? (
                      <span className="text-primary-theme font-medium text-[11px]">{language === 'zh' ? '已复制' : 'Copied'}</span>
                    ) : (
                      <span className="text-[11px] underline underline-offset-2">{language === 'zh' ? '复制' : 'Copy'}</span>
                    )}
                  </button>
                </div>
                <div className="font-mono text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  {fullAddress}
                </div>
              </div>

              {/* Charity ID & 501(c)(3) Status Block */}
              <div className="bg-slate-50 border border-slate-200 rounded-xs p-3.5 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent-theme shrink-0" />
                    <span>{language === 'zh' ? '国税局免税代码 (Charity ID)' : 'IRS EIN / Charity ID'}</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEin}
                    className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                    title="Copy EIN"
                  >
                    {copiedEin ? (
                      <span className="text-primary-theme font-medium text-[11px]">{language === 'zh' ? '已复制' : 'Copied'}</span>
                    ) : (
                      <span className="text-[11px] underline underline-offset-2">{language === 'zh' ? '复制' : 'Copy'}</span>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-900">
                    {charityId}
                  </span>
                  <span className="text-xs text-slate-500 font-sans">
                    ({language === 'zh' ? '501(c)(3) 公共慈善机构' : '501(c)(3) Public Charity'})
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>{language === 'zh' ? '官方验证主域名:' : 'Official Primary Domain:'}</span>
                <strong className="text-slate-800 font-mono">{ORGANIZATION_DETAILS.officialDomain}</strong>
              </span>
              <span className="text-emerald-700 font-medium text-[11px]">
                {language === 'zh' ? '✓ 已验证实体' : '✓ Verified Entity'}
              </span>
            </div>
          </div>
        </div>

        {/* FAQ Accordion: Classical Archival Format */}
        <div className="bg-white border border-slate-200 rounded-xs p-6 sm:p-8 space-y-4">
          <h4 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2 mb-2">
            <HelpCircle className="w-4 h-4 text-primary-theme" />
            <span>{language === 'zh' ? '常见关怀问题解答 (FAQ)' : 'Frequently Asked Questions'}</span>
          </h4>

          <div className="space-y-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-xs overflow-hidden bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-3.5 text-left font-serif font-semibold text-xs sm:text-sm text-slate-800 flex items-center justify-between gap-3 hover:bg-slate-100/60 cursor-pointer transition-colors"
                  >
                    <span className="flex-1 pr-2 leading-snug">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-3.5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Official Domain & Nonprofit Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto space-y-1">
          <p className="font-medium text-slate-700">
            {language === 'zh' ? ORGANIZATION_DETAILS.domainOwnershipZh : ORGANIZATION_DETAILS.domainOwnershipEn}
          </p>
          <p className="text-[11px] text-slate-500">
            {ORGANIZATION_DETAILS.legalName} · {language === 'zh' ? '机构代码' : 'Charity ID'}: {ORGANIZATION_DETAILS.charityId} · {ORGANIZATION_DETAILS.address.fullFormatted}
          </p>
        </div>
      </div>
    </section>
  );
};
