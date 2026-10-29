import React, { useEffect } from 'react';
import { Language } from '../types';
import { PageBanner } from '../components/PageBanner';
import { 
  Heart, 
  ShieldCheck, 
  FileText, 
  Home, 
  Utensils, 
  Car, 
  Video, 
  CheckCircle2
} from 'lucide-react';
import { ChristianCrossMotif, CrossOliveDivider } from '../components/WaterMotifs';
import { ORGANIZATION_DETAILS } from '../config/organization';

interface DonationThankYouPageProps {
  language: Language;
}

export const DonationThankYouPage: React.FC<DonationThankYouPageProps> = ({ language }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="animate-in fade-in duration-300">
      <PageBanner
        title={
          language === 'zh'
            ? '爱心捐赠致谢 · 感谢您的同行与支持'
            : 'Donation Gratitude · Thank You for Your Support'
        }
        subtitle={
          language === 'zh'
            ? 'Power Spring Ministries INC (能量泉) 谨代表所有受助学者、家庭与社区居民，向您致以最诚挚的感谢！'
            : 'Power Spring Ministries INC extends our deepest gratitude on behalf of all the students, seniors, and families we serve.'
        }
      />

      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heartfelt Letter Card */}
          <div className="bg-white border border-slate-200 rounded-xs shadow-xs p-6 sm:p-10 mb-10 relative overflow-hidden">
            {/* Subtle Christian Cross Motif Watermark */}
            <div className="absolute right-2 -bottom-8 pointer-events-none opacity-8 text-accent-theme">
              <ChristianCrossMotif className="w-40 h-56" strokeWidth={1.2} />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Header Badge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xs border border-accent-subtle bg-accent-light-theme text-accent-theme flex items-center justify-center shrink-0 shadow-2xs">
                  <Heart className="w-6 h-6 fill-accent-theme/40 text-accent-theme" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-xs border border-slate-200 font-semibold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary-theme" />
                    Non-Profit Public Charity
                  </span>
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
                    {language === 'zh' ? '涓涓细流，汇聚成爱心活水' : 'A Spring of Life, Made Possible by You'}
                  </h2>
                </div>
              </div>

              <CrossOliveDivider className="my-4" lineWidth="w-16 sm:w-24" />

              {/* Letter Content */}
              <div className="prose text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                {language === 'zh' ? (
                  <>
                    <p className="font-serif text-base sm:text-lg text-slate-800 font-medium">
                      尊敬的捐赠人与爱心朋友：
                    </p>
                    <p>
                      由衷感谢您对 <strong>能量泉（Power Spring Ministries INC）</strong> 的慷慨支持！在异国他乡，初来乍到的学生学者面临生活环境的剧变，新移民家庭在寻找落脚点时常感孤立无援，而一些长者与面临身心困扰的朋友更需要社区的温情相托。
                    </p>
                    <p>
                      因为有您的爱心奉献，我们可以继续为突发困难的朋友提供安全落脚的<strong>临时过渡庇护所</strong>；可以在每周的查经团契中奉上<strong>两千余份热腾腾的丰盛饭菜与每周新鲜蔬果</strong>；可以组织义工在风雨中奔赴现场进行<strong>爆胎抢修救援与二手车赠予</strong>；也可以支持教牧同工每周六开展<strong>线上心灵关怀研讨会</strong>，抚慰焦虑与疲惫的心灵。
                    </p>
                    <p className="italic text-slate-600 bg-slate-50 p-4 rounded-xs border-l-2 border-accent-theme">
                      “你的瀑布发声，深渊就与深渊响应；无论奉献多寡，您的每一份善意都已化作流淌在社区弱势朋友身旁的甘泉。”
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-serif text-base sm:text-lg text-slate-800 font-medium">
                      Dear Generous Donor & Valued Friend,
                    </p>
                    <p>
                      Thank you from the bottom of our hearts for supporting <strong>Power Spring Ministries INC</strong>. Arriving in a new country can often feel overwhelming for international students, visiting scholars, and newly arrived families seeking a place of belonging and peace.
                    </p>
                    <p>
                      Your generous support enables us to provide <strong>emergency transitional shelter</strong> for those without a roof, serve <strong>over 2,000 warm meals and weekly fresh grocery packages</strong>, dispatch volunteer <strong>roadside rescues and gifted vehicles</strong>, and host weekly <strong>Saturday pastoral & mental wellness counseling seminars</strong>.
                    </p>
                    <p className="italic text-slate-600 bg-slate-50 p-4 rounded-xs border-l-2 border-accent-theme">
                      "Deep calls to deep in the roar of your waterfalls. Every contribution, no matter the size, becomes a living spring for those navigating hardship in a foreign land."
                    </p>
                  </>
                )}
              </div>

              {/* Signatures */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
                <div>
                  <div className="font-serif font-bold text-slate-900 text-base">Peter</div>
                  <div className="text-slate-500">{language === 'zh' ? '机构负责人 · Power Spring Ministries' : 'Executive Director, Power Spring Ministries'}</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-slate-900 text-base">Rev. Philip & Dora Wu</div>
                  <div className="text-slate-500">{language === 'zh' ? '主领教牧 · 心灵关怀事工' : 'Pastoral Counselors'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tax Receipt Guidance Box */}
          <div className="bg-slate-50/80 border border-slate-200 rounded-xs p-6 sm:p-8 mb-10 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xs bg-slate-100 text-primary-theme flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-4 h-4" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg">
                  {language === 'zh' ? '关于您的免税捐赠收据 (Tax Receipt & Deductibility)' : 'Tax Deduction & Receipt Information'}
                </h3>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-theme shrink-0 mt-0.5" />
                    <span>
                      {language === 'zh'
                        ? '通过 Stripe 在线支付的捐款，Stripe 会在支付完成后自动向您填写的电子邮箱发送即时免税电子凭证（含官方交易号与机构名称）。'
                        : 'For donations completed via Stripe, an instant tax receipt is automatically sent to the email address you entered during checkout.'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-theme shrink-0 mt-0.5" />
                    <span>
                      {language === 'zh' ? (
                        <>
                          <strong>{ORGANIZATION_DETAILS.legalName}</strong> 是经美国国税局认定的 501(c)(3) 免税公共慈善机构（免税机构代码 / EIN: <span className="font-mono font-semibold">{ORGANIZATION_DETAILS.charityId}</span>，实体地址: {ORGANIZATION_DETAILS.address.fullFormatted}），所有爱心奉献依法享有联邦所得税税前扣除资格。
                        </>
                      ) : (
                        <>
                          <strong>{ORGANIZATION_DETAILS.legalName}</strong> is an IRS-recognized 501(c)(3) public charity (Charity ID / EIN: <span className="font-mono font-semibold">{ORGANIZATION_DETAILS.charityId}</span>, Physical Address: {ORGANIZATION_DETAILS.address.fullFormatted}). All contributions are tax-deductible to the full extent of the law.
                        </>
                      )}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-theme shrink-0 mt-0.5" />
                    <span>
                      {language === 'zh'
                        ? '如需纸质年度抵税综合证明（Year-End Contribution Statement）或金额超过 $250 的专属书面证明，欢迎随时发送邮件至 peterqu@powerspring.org 与负责人联系。'
                        : 'If you need a formal year-end tax statement or an acknowledgment letter for gifts over $250, please email peterqu@powerspring.org anytime.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Impact */}
          <div className="mb-10">
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-4 text-center">
              {language === 'zh' ? '您的奉献将直接用于以下事工' : 'How Your Gift Is Put to Work'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xs p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xs bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4 text-primary-theme" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">
                    {language === 'zh' ? '临时安居与长者关怀' : 'Temporary Shelter & Senior Housing'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {language === 'zh' ? '为 18 位初抵学者提供应急住宿及两位长者长期爱心安居。' : 'Emergency transitional lodging for scholars and long-term care for vulnerable seniors.'}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xs p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xs bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4 text-primary-theme" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">
                    {language === 'zh' ? '爱心餐食与每周蔬果站' : '2,000+ Meals & Food Pantry'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {language === 'zh' ? '每周查经团契提供爱心热餐与健康果蔬，全年分发 2,000+ 份。' : 'Providing nutritious warm meals during Bible study fellowship and weekly fresh grocery pantry.'}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xs p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xs bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4 text-primary-theme" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">
                    {language === 'zh' ? '急难救援与爱心赠车' : 'Roadside Aid & Donated Cars'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {language === 'zh' ? '10+ 次现场道路爆胎救援，并向困难家庭免费赠予 3 辆二手代步车。' : '10+ emergency roadside rescues and 3 roadworthy donated vehicles gifted to families.'}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xs p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xs bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                  <Video className="w-4 h-4 text-primary-theme" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">
                    {language === 'zh' ? '周六 Zoom 心灵关怀研讨' : 'Saturday Mental Wellness'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {language === 'zh' ? 'Philip & Dora Wu 牧师带领 30+ 人研讨会，守护心理与情绪健康。' : 'Weekly 30+ participant counseling seminars guided by Rev. Philip & Dora Wu.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
