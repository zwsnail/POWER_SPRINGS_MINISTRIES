import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Language } from '../types';
import { PageBanner } from '../components/PageBanner';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  AlertTriangle, 
  Heart, 
  HelpCircle, 
  Mail,
  Car,
  Home,
  Video,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { CrossOliveDivider, ChristianCrossMotif } from '../components/WaterMotifs';

interface TermsPageProps {
  language: Language;
}

type TabType = 'terms' | 'donation' | 'privacy';

export const TermsPage: React.FC<TermsPageProps> = ({ language }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabType>('terms');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.pathname.includes('/privacy')) {
      setActiveTab('privacy');
    } else if (location.pathname.includes('/donation')) {
      setActiveTab('donation');
    } else {
      setActiveTab('terms');
    }
  }, [location.pathname]);

  const email = 'peterqu@powerspring.org';

  return (
    <div className="animate-in fade-in duration-300">
      <PageBanner
        title={
          language === 'zh'
            ? '服务条款 · 免责声明 · 隐私政策'
            : 'Terms of Service, Disclaimers & Privacy'
        }
        subtitle={
          language === 'zh'
            ? 'Power Spring Ministries INC (能量泉) 501(c)(3) 非营利公益机构法律合规与服务须知'
            : 'Legal Disclaimers, Non-Profit Governance & Privacy Policy of Power Spring Ministries INC'
        }
      />

      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Institutional Integrity Notice */}
          <div className="bg-white border border-slate-200 rounded-xs p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs bg-slate-900 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-accent-theme" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-base">
                  Power Spring Ministries INC (能量泉)
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {language === 'zh' 
                    ? '美国联邦税局 IRS 正式注册 501(c)(3) 免税公共慈善机构 (Public Charity)' 
                    : 'IRS-recognized 501(c)(3) Tax-Exempt Public Charity'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xs border border-slate-200 max-w-full">
              <Mail className="w-3.5 h-3.5 text-primary-theme shrink-0" />
              <span className="truncate break-all">{email}</span>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 rounded-xs text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'terms'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{language === 'zh' ? '服务条款与免责声明' : 'Terms & Disclaimers'}</span>
            </button>

            <button
              onClick={() => setActiveTab('donation')}
              className={`px-4 py-2 rounded-xs text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'donation'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>{language === 'zh' ? '非营利捐赠与免税政策' : 'Donation & 501(c)(3) Policy'}</span>
            </button>

            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 rounded-xs text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'privacy'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>{language === 'zh' ? '隐私政策与 GA4 统计说明' : 'Privacy & GA4 Policy'}</span>
            </button>
          </div>

          {/* TAB 1: Terms & Disclaimers */}
          {activeTab === 'terms' && (
            <div className="bg-white border border-slate-200 rounded-xs p-6 sm:p-10 space-y-8 shadow-xs">
              <div>
                <h2 className="font-serif font-bold text-2xl text-slate-900 mb-2">
                  {language === 'zh' ? '服务条款与法律免责声明 (Terms of Service & Legal Disclaimers)' : 'Terms of Service & Legal Disclaimers'}
                </h2>
                <p className="text-xs text-slate-500">
                  {language === 'zh' ? '最后更新日期：2026年 · 适用于所有访问者、受助者与志愿者' : 'Last Updated: 2026 · Applicable to all visitors, recipients, and volunteers'}
                </p>
                <CrossOliveDivider className="my-4" lineWidth="w-16" />
              </div>

              {/* Section 1: Charitable Nature */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-xs bg-slate-100 text-slate-700 text-xs font-mono flex items-center justify-center font-bold">1</span>
                  <span>{language === 'zh' ? '非营利慈善互助性质 (Charitable Nature of Services)' : 'Charitable & Voluntary Nature'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'zh' ? (
                    <>
                      Power Spring Ministries INC（以下简称“能量泉”或“机构”）是一家依据美国《国内税收法》第 501(c)(3) 条款注册设立的非营利公共慈善机构。机构开展的所有关怀项目——包括临时应急住宿安置、爱心餐饮、果蔬食品站、道路急难救援、二手代步车捐赠、英语角交流、报税文书辅助及每周六心灵辅导研讨——均为<strong>基于社区互助与基督博爱精神的无偿慈善关怀</strong>，不构成任何商业营利买卖、专业有偿委托或法定合同担保关系。
                    </>
                  ) : (
                    <>
                      Power Spring Ministries INC is an IRS-recognized 501(c)(3) non-profit public charity. All community assistance programs—including temporary emergency shelter, meals, weekly food pantry, emergency roadside rescues, vehicle donations, English conversation clinics, tax filing guidance, and Saturday pastoral wellness seminars—are provided as <strong>non-commercial, voluntary charitable gifts</strong>.
                    </>
                  )}
                </p>
              </div>

              {/* Section 2: Pastoral & Spiritual Counseling Disclaimer (Crucial) */}
              <div className="border border-amber-200 bg-amber-50/60 rounded-xs p-5 space-y-3">
                <h3 className="font-serif font-bold text-base sm:text-lg text-amber-950 flex items-center gap-2">
                  <Video className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>{language === 'zh' ? '心灵关怀与教牧辅导重要免责声明 (Pastoral Counseling Disclaimer)' : 'Pastoral & Spiritual Counseling Disclaimer'}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                  <p>
                    {language === 'zh' ? (
                      <>
                        <strong>非执业临床心理医疗：</strong>每周六由 Philip & Dora Wu 牧师带领的线上 Zoom 研讨会及一对一交流属于<strong>教牧关怀、信仰支持与同侪社群鼓励（Pastoral & Spiritual Care）</strong>，并非执业精神科医生、注册临床心理治疗师（Licensed Clinical Psychologist）或持牌专业医学诊断治疗行为。研讨内容不能替代正规医学诊断、药物处方或专业心理临床干预。
                      </>
                    ) : (
                      <>
                        <strong>Non-Clinical Pastoral Guidance:</strong> Saturday Zoom counseling seminars and conversations led by pastoral counselors Rev. Philip & Dora Wu represent <strong>spiritual, peer, and pastoral care</strong>. They do not constitute licensed medical, psychiatric, or clinical psychological therapy, and do not replace professional medical advice, diagnosis, or psychiatric treatment.
                      </>
                    )}
                  </p>
                  <div className="bg-white border border-amber-300/80 rounded-xs p-3 text-xs text-amber-900 font-medium">
                    ⚠️ {language === 'zh' ? (
                      <>
                        <strong>紧急生命危机警示：</strong>如果您或您身边的人正在面临严重的自杀念头、急性精神危机或人身安全危险，请<strong>立即拨打美国全天候自杀与危机生命热线 988 或紧急报警电话 911</strong>，或前往就近医院急诊室寻求即时专业救治。
                      </>
                    ) : (
                      <>
                        <strong>Crisis Warning:</strong> If you or someone you know is experiencing acute psychiatric distress, suicidal thoughts, or an immediate medical emergency, please call <strong>911 or the Suicide & Crisis Lifeline at 988</strong> immediately, or proceed to the nearest hospital emergency room.
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 3: Roadside Assistance & Vehicle Donations */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Car className="w-5 h-5 text-slate-700 shrink-0" />
                  <span>{language === 'zh' ? '道路应急救援与二手车赠予声明 (Roadside Aid & Vehicle Donation)' : 'Roadside Aid & Vehicle Donations'}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                  <p>
                    {language === 'zh' ? (
                      <>
                        <strong>好撒玛利亚人志愿援助（Good Samaritan Aid）：</strong>现场爆胎更换、车辆搭电或应急接送是由志愿者在善意原则下提供的无偿应急互助。受助者应知悉道路环境的固有风险，并同意免除事工同工及志愿者因不可预见之机械磨损、道路突发状况等导致的连带非重大过失民事赔偿责任。
                      </>
                    ) : (
                      <>
                        <strong>Good Samaritan Volunteer Assistance:</strong> Roadside tire changes, battery jumps, and emergency rides are provided gratuitously by volunteers in good faith under Good Samaritan principles. Recipients acknowledge intrinsic roadside hazards.
                      </>
                    )}
                  </p>
                  <p>
                    {language === 'zh' ? (
                      <>
                        <strong>二手车捐赠“按现状”交付（"AS-IS"）：</strong>由爱心人士捐赠并转赠予困难家庭或学生的闲置二手车辆，均按<strong>车辆交付时的实际现状（"AS-IS, WHERE-IS"）</strong>赠予，不包含任何明示或暗示的机械性能保证、适销性或特定目的适用性保证。受赠人在接收车辆并办理过户（Title Transfer）后，全权承担车辆登记、保险购置、年度车检及日常安全驾驶责任。
                      </>
                    ) : (
                      <>
                        <strong>Vehicle Gifts Provided "AS-IS":</strong> Donated vehicles transferred to students or low-income families are gifted strictly in <strong>"AS-IS, WHERE-IS" condition</strong> with no express or implied warranties. Recipients assume full responsibility for title transfer, registration, auto insurance, and vehicle maintenance.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Section 4: Temporary Lodging & Food Pantry */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Home className="w-5 h-5 text-slate-700 shrink-0" />
                  <span>{language === 'zh' ? '临时安居与食品分发须知 (Lodging & Food Pantry Policies)' : 'Temporary Lodging & Food Pantry'}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                  <p>
                    {language === 'zh' ? (
                      <>
                        <strong>应急过客性质：</strong>能量泉提供的 1~20 天应急临时住所为慈善关怀过客接待性质（Transient Charitable Hospitality），不构成标准住宅租赁合同或租客保护法意义下的长期承租权（Landlord-Tenant Leasehold）。受助人应遵守住所的基本秩序与安宁。
                      </>
                    ) : (
                      <>
                        <strong>Transient Hospitality:</strong> Temporary transitional shelter (1-20 days) is provided as temporary charitable hospitality and does not establish a formal residential tenancy or leasehold agreement.
                      </>
                    )}
                  </p>
                  <p>
                    {language === 'zh' ? (
                      <>
                        <strong>食品安全与捐赠法案：</strong>所有爱心餐食与新鲜蔬果食品站的分发均严格遵循美国《比尔·埃默森好撒玛利亚人食品捐赠法案》（Bill Emerson Good Samaritan Food Donation Act），旨在缓解社区营养与温饱需求。食品领取者请在保质期内食用。
                      </>
                    ) : (
                      <>
                        <strong>Food Distribution:</strong> Meals and groceries are distributed in good faith in alignment with the Bill Emerson Good Samaritan Food Donation Act to address community food security.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Section 5: Tax Filing & Language Assistance */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-xs bg-slate-100 text-slate-700 text-xs font-mono flex items-center justify-center font-bold">5</span>
                  <span>{language === 'zh' ? '英语角与生活报税协助说明 (Tax & Language Clinic)' : 'Language Practice & Tax Clinic'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'zh' ? (
                    <>
                      英语角与报税文书辅助是由热心同工开展的社区文化交流与义工志愿协助（Volunteer Clerical Support），不代表注册会计师（CPA）、税务律师或国税局注册代理人（Enrolled Agent）的专业法律或税务代理业务。纳税人对自身提交之联邦及州税表格之真实性与合法性负最终法律责任。
                    </>
                  ) : (
                    <>
                      Conversational English tutoring and tax clinic assistance are volunteer clerical services and do not constitute certified public accounting (CPA) or legal tax representation. Taxpayers remain personally responsible for their tax submissions.
                    </>
                  )}
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: Non-Profit Donation & 501(c)(3) Policies */}
          {activeTab === 'donation' && (
            <div className="bg-white border border-slate-200 rounded-xs p-6 sm:p-10 space-y-8 shadow-xs">
              <div>
                <h2 className="font-serif font-bold text-2xl text-slate-900 mb-2">
                  {language === 'zh' ? '非营利捐赠须知与 501(c)(3) 免税政策' : 'Non-Profit Giving & 501(c)(3) Policies'}
                </h2>
                <p className="text-xs text-slate-500">
                  {language === 'zh' ? '依照美国 IRS 联邦税法规范与机构章程订立' : 'Formulated in accordance with IRS regulations and organizational bylaws'}
                </p>
                <CrossOliveDivider className="my-4" lineWidth="w-16" />
              </div>

              {/* Tax-Deductibility */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{language === 'zh' ? '1. 捐款性质与税收抵免资格 (Tax-Deductibility)' : '1. Tax-Deductible Charitable Contributions'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'zh' ? (
                    <>
                      Power Spring Ministries INC 是经美国国内税收署（IRS）依据《国内税收法典》第 501(c)(3) 条款认定的非营利公共慈善机构。向本机构进行的所有爱心捐款（包括资金捐献与合规物资/车辆估值捐赠），在法律允许的最大限度内享有<strong>美国联邦个人或企业所得税的税前扣除资格</strong>。
                    </>
                  ) : (
                    <>
                      Power Spring Ministries INC is an IRS-recognized 501(c)(3) public charity. Contributions to the ministry (financial donations and qualifying vehicle/in-kind donations) are tax-deductible to the full extent allowed by US federal and state laws.
                    </>
                  )}
                </p>
              </div>

              {/* Stripe Payment Security */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary-theme shrink-0" />
                  <span>{language === 'zh' ? '2. 在线支付安全保障与 Stripe 平台 (Payment Processing via Stripe)' : '2. Secure Online Processing via Stripe'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'zh' ? (
                    <>
                      本机构在线捐款全部由全球知名的合规支付服务商 <strong>Stripe, Inc.</strong> 提供处理。Stripe 符合国际最高安全标准 <strong>PCI-DSS Level 1 认证</strong>。本机构网站<strong>不收集、不存储、亦无权查阅</strong>捐赠人的任何银行卡号、CVV 安全码或账户敏感凭证，所有金融交易均直接在 Stripe 加密安全通道内完成。
                    </>
                  ) : (
                    <>
                      All online donations are securely processed by <strong>Stripe, Inc.</strong>, certified to <strong>PCI-DSS Level 1</strong> (the highest standard in the payments industry). Our website does not collect, process, or store credit card numbers, CVVs, or financial credentials.
                    </>
                  )}
                </p>
              </div>

              {/* Custom Donation Amount */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent-theme shrink-0" />
                  <span>{language === 'zh' ? '3. 自主定额捐赠与爱心原则 (Custom Donation Amount)' : '3. Custom Donation Amount & Donor Freedom'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'zh' ? (
                    <>
                      在能量泉的官方 Stripe 捐赠通道中，<strong>捐赠金额由捐赠人完全自主决定并输入</strong>。无论金额多寡，皆是对社区的一份珍贵关爱。捐款纯属自愿，机构从不以任何形式强求或摊派。
                    </>
                  ) : (
                    <>
                      On our official Stripe giving page, donors freely set their desired contribution amount. Every gift, regardless of amount, directly impacts vulnerable members in our community. All giving is strictly voluntary.
                    </>
                  )}
                </p>
              </div>

              {/* Receipts & Refund Policy */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-slate-700 shrink-0" />
                  <span>{language === 'zh' ? '4. 捐款收据与退款政策 (Receipts & Non-Refundability)' : '4. Receipts & Non-Refundability'}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                  <p>
                    {language === 'zh' ? (
                      <>
                        <strong>即时凭证：</strong>Stripe 在扣款成功后会立即向捐赠人填写的电子邮箱发送官方收据（包含交易流水号、机构名称与金额），可作为个人报税的重要依据。
                      </>
                    ) : (
                      <>
                        <strong>Instant Receipt:</strong> Stripe automatically delivers an official transaction receipt containing organization details to the donor’s email address upon successful processing.
                      </>
                    )}
                  </p>
                  <p>
                    {language === 'zh' ? (
                      <>
                        <strong>退款政策：</strong>依据美国非营利税法惯例，由于慈善捐款在扣缴后即进入机构公益账户并统筹用于庇护救助，一般情况下<strong>慈善捐款一经完成即不可撤销退款</strong>。若因系统偶发重复扣款、输入金额发生明显笔误等特殊情况，请于交易发生后 7 日内发送邮件至 <a href={`mailto:${email}`} className="text-sky-600 underline font-semibold">{email}</a>，负责人将核实并协助处理。
                      </>
                    ) : (
                      <>
                        <strong>Non-Refundability:</strong> Under standard IRS non-profit regulations, charitable donations are irrevocable gifts once disbursed into charitable accounts. In the rare event of an accidental duplicate transaction or typographical error, please contact us at <a href={`mailto:${email}`} className="text-sky-600 underline font-semibold">{email}</a> within 7 days.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Annual Statement */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs text-xs sm:text-sm text-slate-700 flex items-center justify-between gap-3">
                <span>
                  {language === 'zh'
                    ? '需要年度累计奉献抵税证明信？欢迎邮件联系负责人 Peter Qu 开具官方 501(c)(3) 证明。'
                    : 'Need a comprehensive year-end contribution statement? Email Director Peter Qu to request an official letter.'}
                </span>
                <Link
                  to="/donate/thank-you"
                  className="btn-primary px-3 py-1.5 rounded-xs text-xs font-semibold shrink-0 cursor-pointer"
                >
                  {language === 'zh' ? '查看致谢页' : 'View Gratitude Page'}
                </Link>
              </div>

            </div>
          )}

          {/* TAB 3: Privacy Policy & Google Analytics (GA4) */}
          {activeTab === 'privacy' && (
            <div className="bg-white border border-slate-200 rounded-xs p-6 sm:p-10 space-y-8 shadow-xs">
              <div>
                <h2 className="font-serif font-bold text-2xl text-slate-900 mb-2">
                  {language === 'zh' ? '隐私政策与数据保护声明 (Privacy Policy & Analytics)' : 'Privacy Policy & Analytics Disclosure'}
                </h2>
                <p className="text-xs text-slate-500">
                  {language === 'zh' ? '致力于保障访问者、咨询者与捐赠人的个人隐私' : 'Protecting the confidentiality of all visitors, inquirers, and donors'}
                </p>
                <CrossOliveDivider className="my-4" lineWidth="w-16" />
              </div>

              {/* GA4 Analytics */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-xs bg-slate-100 text-slate-700 text-xs font-mono flex items-center justify-center font-bold">1</span>
                  <span>{language === 'zh' ? '网站流量统计与 Google Analytics 4 (GA4)' : 'Google Analytics 4 (GA4) Usage'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'zh' ? (
                    <>
                      为了解社区网站的访问情况、持续优化网页性能并评估各项关怀事工的触达范围，本网站部署了 <strong>Google Analytics 4 (GA4, 测量代码 G-7RHFBH938V)</strong>。GA4 会收集诸如浏览器类型、访问页面、停留时间、大致地理区域等<strong>去标识化的匿名统计数据</strong>。我们不会使用这些分析数据来追踪具体个人的真实身份，也不会将其用于任何商业再营销或广告投放。
                    </>
                  ) : (
                    <>
                      To evaluate site performance, understand visitor engagement, and measure ministry outreach, this website utilizes <strong>Google Analytics 4 (Measurement ID: G-7RHFBH938V)</strong>. GA4 gathers anonymous aggregated metrics (e.g., page views, approximate geographic region, browser type). We do not use this data for commercial profiling or advertising tracking.
                    </>
                  )}
                </p>
              </div>

              {/* Personal Information */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-xs bg-slate-100 text-slate-700 text-xs font-mono flex items-center justify-center font-bold">2</span>
                  <span>{language === 'zh' ? '个人联络信息的收集与保密 (Personal Contact Information)' : 'Collection & Strict Confidentiality'}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                  <p>
                    {language === 'zh' ? (
                      <>
                        当您通过本网站的联系表单或电子邮箱向我们发送求助、咨询周六心灵辅导研讨会、登记志愿者或商洽车辆捐赠时，我们可能会接收到您的姓名、电话或电子邮箱。
                      </>
                    ) : (
                      <>
                        When you submit an inquiry form or send an email regarding assistance, Saturday pastoral counseling, volunteering, or donation, we receive the contact details you voluntarily provide (name, email, phone).
                      </>
                    )}
                  </p>
                  <p className="font-semibold text-slate-800">
                    {language === 'zh' ? (
                      '能量泉郑重承诺：我们绝不出售、出租、交易或向任何商业第三方透露您的个人信息。所有求助与辅导咨询内容均严格遵循隐私保密原则。'
                    ) : (
                      'Power Spring Ministries INC pledges to never sell, rent, trade, or disclose your personal information to commercial third parties. All pastoral and inquiry communications are treated with utmost confidentiality.'
                    )}
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{language === 'zh' ? '3. 第三方平台与外部链接 (Stripe, Zoom, 等)' : '3. Third-Party Integrations'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'zh' ? (
                    <>
                      本网站可能包含指向第三方服务平台（例如用于在线支付的 Stripe、用于线上讲座的 Zoom 等）的外部链接。当您离开本网站并使用第三方服务时，其数据处理活动受该第三方各自之服务条款及隐私政策管辖。
                    </>
                  ) : (
                    <>
                      Our site links to trusted third-party providers (such as Stripe for payments and Zoom for weekly seminars). When interacting with external platforms, your information is subject to their respective terms and privacy policies.
                    </>
                  )}
                </p>
              </div>

              {/* Inquiries */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{language === 'zh' ? '4. 隐私问题咨询' : '4. Privacy Contact'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'zh' ? (
                    <>
                      如果您对本隐私政策或个人信息保护有任何疑问或需要更新您的联络信息，请随时通过电子邮箱 <a href={`mailto:${email}`} className="text-sky-600 underline font-semibold">{email}</a> 与能量泉负责人 Peter Qu 联系。
                    </>
                  ) : (
                    <>
                      If you have questions regarding our privacy practices or wish to update your contact preferences, please reach out to Director Peter Qu at <a href={`mailto:${email}`} className="text-sky-600 underline font-semibold">{email}</a>.
                    </>
                  )}
                </p>
              </div>

            </div>
          )}

          {/* Quick Footer Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 pt-4 border-t border-slate-200">
            <Link to="/" className="text-primary-theme hover:underline flex items-center gap-1 font-semibold">
              <span>← {language === 'zh' ? '返回网站首页' : 'Return to Home'}</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hover:text-slate-700 transition-colors">
                {language === 'zh' ? '联系我们' : 'Contact Us'}
              </Link>
              <span>·</span>
              <Link to="/donate/thank-you" className="hover:text-slate-700 transition-colors">
                {language === 'zh' ? '捐赠致谢' : 'Donation Gratitude'}
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
