import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  CreditCard, 
  ExternalLink, 
  Check, 
  Copy, 
  Mail, 
  Car, 
  FileText,
  ShieldCheck,
  Building2,
  DollarSign
} from 'lucide-react';
import { Language } from '../types';
import { DONATION_CONFIG } from '../config/donation';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedOrg, setCopiedOrg] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DONATION_CONFIG.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyOrg = () => {
    navigator.clipboard.writeText(DONATION_CONFIG.organizationName);
    setCopiedOrg(true);
    setTimeout(() => setCopiedOrg(false), 2000);
  };

  const hasStripeUrl = !!DONATION_CONFIG.stripeDonationUrl && DONATION_CONFIG.stripeDonationUrl.startsWith('http');

  const suggestedAmounts = ['$25', '$50', '$100', '$250', '$500'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200/90 max-w-2xl w-full p-6 sm:p-8 z-10 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {language === 'zh' ? '支持涌泉事工 · 爱心捐赠' : 'Support Power Spring · Donate'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5 mt-0.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === 'zh' ? '美国 IRS 注册 501(c)(3) 非营利免税机构 · 依法抵税' : '501(c)(3) Non-Profit Public Charity · Tax-Deductible'}</span>
            </p>
          </div>
        </div>

        {/* Quick Impact Highlight */}
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50/60 border border-sky-100/80 rounded-2xl p-4 mb-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {language === 'zh' ? (
            <p>
              感谢您的善心与爱心！您的每一笔奉献都将直接用于<strong>紧急临时庇护住所、每周查经聚会暖心餐饮、学生学者急难救助与二手车赠予</strong>。所有捐款均享有美国联邦免税资格。
            </p>
          ) : (
            <p>
              Thank you for your generosity! Every contribution directly supports <strong>temporary shelter lodging, fellowship warm meals, emergency roadside aid, and student scholar assistance</strong>. All donations are 100% tax-deductible under IRS code 501(c)(3).
            </p>
          )}
        </div>

        {/* Option 1: Stripe Online Donation */}
        <div className="border border-slate-200 rounded-2xl p-5 mb-5 bg-white shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                <CreditCard className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {language === 'zh' ? 'Stripe 安全在线捐款 (信用卡 / 借记卡 / Apple Pay)' : 'Online Donation via Stripe (Card / Apple Pay)'}
                </h4>
                <p className="text-xs text-slate-500">
                  {language === 'zh' ? '支持 Visa, Mastercard, AMEX 及移动支付' : 'Secure payment powered by Stripe'}
                </p>
              </div>
            </div>
          </div>

          {/* Suggested Amounts Preview */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-slate-500 font-medium mr-1">
              {language === 'zh' ? '常用金额参考:' : 'Suggested:'}
            </span>
            {suggestedAmounts.map((amt) => (
              <span
                key={amt}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs"
              >
                {amt}
              </span>
            ))}
          </div>

          {hasStripeUrl ? (
            <a
              href={DONATION_CONFIG.stripeDonationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{language === 'zh' ? '前往 Stripe 安全完成捐赠' : 'Proceed to Stripe Donation'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
                <span>{language === 'zh' ? 'Stripe NGO 官方在线捐赠通道预留完成' : 'Stripe NGO Payment Link Slot Ready'}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {language === 'zh'
                  ? '本机构已完成 501(c)(3) 注册，Stripe NGO 在线支付链接在管理员于后台填入后将立即自动激活。在此期间，欢迎通过支票或邮件联系负责人进行爱心奉献。'
                  : 'Stripe NGO online payment slot is fully wired. Once your Stripe Payment Link is pasted into config, donors can pay with 1-click. In the meantime, checks and direct contact are warmly welcomed.'}
              </p>
            </div>
          )}
        </div>

        {/* Option 2: Check by Mail / Direct Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* Check by mail */}
          <div className="border border-slate-200/80 rounded-2xl p-4 bg-slate-50/60">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-primary-theme" />
              <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                {language === 'zh' ? '支票捐赠 (Check by Mail)' : 'Check by Mail'}
              </h5>
            </div>
            <p className="text-xs text-slate-600 mb-2 leading-relaxed">
              {language === 'zh' ? '支票抬头（Pay to the order of）：' : 'Payable to:'}
            </p>
            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800">
              <span className="truncate pr-1">Power Spring Ministries INC</span>
              <button
                onClick={handleCopyOrg}
                className="text-primary-theme hover:underline shrink-0 text-[11px] flex items-center gap-0.5 cursor-pointer"
                title="Copy organization name"
              >
                {copiedOrg ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedOrg ? (language === 'zh' ? '已复制' : 'Copied') : (language === 'zh' ? '复制' : 'Copy')}</span>
              </button>
            </div>
          </div>

          {/* Direct Contact & Receipts */}
          <div className="border border-slate-200/80 rounded-2xl p-4 bg-slate-50/60">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-primary-theme" />
              <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                {language === 'zh' ? '捐赠收据与赠车联络' : 'Receipts & Vehicle Donation'}
              </h5>
            </div>
            <p className="text-xs text-slate-600 mb-2 leading-relaxed">
              {language === 'zh' ? '咨询负责人 Peter Qu 开具免税收据：' : 'Contact Peter Qu for tax exemption receipt:'}
            </p>
            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800">
              <span className="truncate pr-1 text-slate-700">peter.qu@powerspring...</span>
              <button
                onClick={handleCopyEmail}
                className="text-primary-theme hover:underline shrink-0 text-[11px] flex items-center gap-0.5 cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? (language === 'zh' ? '已复制' : 'Copied') : (language === 'zh' ? '复制' : 'Copy')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>{language === 'zh' ? '支持年度抵税捐款凭证' : 'Annual tax receipts provided'}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold cursor-pointer text-xs"
          >
            {language === 'zh' ? '关闭' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
