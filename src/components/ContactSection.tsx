import React, { useState } from 'react';
import { translations } from '../locales/translations';
import { Language } from '../types';
import { 
  Sparkles, 
  Mail, 
  Clock, 
  Video, 
  MapPin, 
  User, 
  Check, 
  Copy, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  SendHorizontal
} from 'lucide-react';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const t = translations[language];
  const c = t.contact;
  const [copied, setCopied] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const emailAddress = 'peter.qu@powerspringsministries.org';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const faqs = language === 'zh' ? [
    {
      q: '涌泉事工提供的临时住宿和救助收费吗？',
      a: '完全免费！涌泉事工是一家 501(c)(3) 非营利公益慈善机构（NGO），所有临时安置、爱心餐食、蔬果领取、道路急难救援、英语角及心理辅导均不收取任何服务费用。',
    },
    {
      q: '如何参加每周六由 Philip & Dora Wu 牧师带领的 Zoom 心理辅导？',
      a: '请发送邮件至 peter.qu@powerspringsministries.org，我们会在周五前将当周 Zoom 会议号及密码发送给您；该讲座完全免费、保密并面向所有人开放。',
    },
    {
      q: '我想向事工捐赠二手车或闲置家具物资，流程是怎样的？',
      a: '非常感谢您的爱心！请直接发送邮件与负责人 Peter Qu 联络，事工会与您对接车辆过户手续（Title Transfer）或物资交接，并可根据需要提供 501(c)(3) 免税捐赠收据。',
    },
    {
      q: '突发爆胎或发生小事故需要道路急难援助怎么办？',
      a: '如遇紧急情况，请发送邮件注明您的具体位置与联系电话，我们的志愿爱心车队会根据人手情况尽快为您提供备胎更换、现场安全陪伴与相关指引。',
    },
  ] : [
    {
      q: 'Are services such as temporary lodging and meals completely free?',
      a: 'Yes, 100% free! Power Springs Ministries INC is a 501(c)(3) non-profit charity. All temporary shelter, hot meals, groceries, emergency roadside aid, and counseling are provided free of charge.',
    },
    {
      q: 'How do I join the Saturday Zoom mental health counseling seminar?',
      a: 'Please email peter.qu@powerspringsministries.org to request the weekly Zoom meeting ID and passcode. It is confidential, free, and open to all.',
    },
    {
      q: 'How does the vehicle or in-kind donation process work?',
      a: 'Thank you for your generosity! Reach out via email to Director Peter Qu. Our team will coordinate title transfer or item drop-off and provide 501(c)(3) tax exemption receipts upon request.',
    },
    {
      q: 'What should I do if I experience a flat tire or need emergency roadside help?',
      a: 'Please email us with your location and phone number. Our volunteer team will respond as quickly as possible to assist with tire changes, on-site safety, and guidance.',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 badge-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{c.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {c.sectionTitle}
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            {language === 'zh'
              ? '欢迎通过电子邮箱与涌泉事工取得联系，负责人 Peter Qu 将尽快为您答复。'
              : 'Feel free to contact Power Springs Ministries via email. Director Peter Qu will respond promptly.'}
          </p>
        </div>

        {/* Main Grid of Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Primary Email & Direct Contact */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-primary-light-theme text-primary-theme flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>501(c)(3) NGO</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {language === 'zh' ? '负责人直通电子邮箱' : 'Director Direct Email'}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  {language === 'zh' ? '机构负责人: Peter Qu' : 'Executive Director: Peter Qu'}
                </p>
              </div>

              {/* Highlighted Email Box */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="break-all font-mono font-bold text-slate-900 text-sm sm:text-base">
                  {emailAddress}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{language === 'zh' ? '已复制' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>{language === 'zh' ? '复制邮箱' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <a
                href={`mailto:${emailAddress}`}
                className="btn-primary w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <SendHorizontal className="w-4 h-4" />
                <span>{language === 'zh' ? '直接打开邮箱发信' : 'Open Email Client'}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Pastoral Counseling & Seminars */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {language === 'zh' ? '周六 Zoom 心理辅导讲座' : 'Saturday Pastoral Counseling'}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  {language === 'zh' ? '主领教牧：Philip & Dora Wu 牧师' : 'Led by Rev. Philip & Dora Wu'}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">{language === 'zh' ? '讲座时间：' : 'Schedule: '}</strong>
                    <span>{language === 'zh' ? '每周六上午（线上 Zoom 视频会议）' : 'Every Saturday Morning (Zoom)'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">{language === 'zh' ? '参与说明：' : 'Access: '}</strong>
                    <span>{language === 'zh' ? '免费开放、严格保密，适合所有寻求心灵慰藉的朋友。' : '100% free, confidential, and open to the community.'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <a
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(language === 'zh' ? '申请参加周六Zoom心理辅导讲座' : 'Inquiry about Saturday Zoom Counseling')}`}
                className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{language === 'zh' ? '邮件索取 Zoom 会议号' : 'Email to Request Zoom ID'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Service Details & Area Information */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs mb-12">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-primary-theme" />
            <span>{c.infoCardTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <User className="w-4 h-4 text-primary-theme" />
                <span>{language === 'zh' ? '机构负责人' : 'Leadership'}</span>
              </div>
              <p className="text-slate-600 pl-6">{c.leaderName}</p>
              <p className="text-slate-400 text-xs pl-6">Power Springs Ministries INC</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{language === 'zh' ? '服务与响应时间' : 'Response Hours'}</span>
              </div>
              <p className="text-slate-600 pl-6">{c.serviceHours}</p>
              <p className="text-slate-400 text-xs pl-6">{c.feeNote}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>{language === 'zh' ? '关怀服务范围' : 'Service Reach'}</span>
              </div>
              <p className="text-slate-600 pl-6">{c.regionNote}</p>
              <p className="text-slate-400 text-xs pl-6">{language === 'zh' ? '安居 · 餐食 · 出行 · 辅导' : 'Shelter · Food · Mobility'}</p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-primary-theme" />
            <span>{language === 'zh' ? '常见关怀问题解答 (FAQ)' : 'Frequently Asked Questions'}</span>
          </h4>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-800 flex items-center justify-between gap-3 hover:bg-slate-100/60 cursor-pointer transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
