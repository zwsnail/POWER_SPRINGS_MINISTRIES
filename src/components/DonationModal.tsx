import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  Heart, 
  CreditCard, 
  ExternalLink, 
  Check, 
  FileText,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { Language } from '../types';
import { DONATION_CONFIG } from '../config/donation';
import { ChristianCrossMotif } from './WaterMotifs';

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
  const navigate = useNavigate();

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

  const goToTerms = () => {
    onClose();
    navigate('/terms');
  };

  const hasStripeUrl = !!DONATION_CONFIG.stripeDonationUrl && DONATION_CONFIG.stripeDonationUrl.startsWith('http');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container: Classical Institutional Framing with mobile scroll safety */}
      <div className="relative bg-white rounded-xs shadow-2xl border border-slate-300 max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-7 z-10 my-auto overflow-x-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* 简笔十字架活水背景微水印 */}
        <div className="absolute -right-4 -bottom-6 pointer-events-none opacity-8 text-accent-theme">
          <ChristianCrossMotif className="w-32 h-44 sm:w-36 sm:h-48" strokeWidth={1.2} />
        </div>

        {/* Top Close Button (Touch Friendly) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xs text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3 mb-4 pb-3.5 border-b border-slate-100 pr-8">
          <div className="w-10 h-10 rounded-xs border border-accent-subtle bg-accent-light-theme text-accent-theme flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
            <Heart className="w-5 h-5 fill-accent-theme/30 text-accent-theme" />
          </div>
          <div className="min-w-0">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-snug">
              {language === 'zh' ? '支持能量泉 · 爱心奉献' : 'Support Power Spring · Giving'}
            </h3>
            <p className="text-xs text-slate-600 flex flex-wrap items-center gap-1.5 mt-0.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-theme shrink-0" />
              <span>{language === 'zh' ? '非营利社区慈善 (501(c)(3))' : 'Non-Profit 501(c)(3) Charity'}</span>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <span className="font-mono text-[11px] text-slate-500 font-semibold">EIN: {DONATION_CONFIG.charityId}</span>
            </p>
          </div>
        </div>

        {/* Quick Impact Highlight */}
        <div className="bg-slate-50 border border-slate-200 rounded-xs p-3 sm:p-3.5 mb-4 text-xs text-slate-700 leading-relaxed">
          {language === 'zh' ? (
            <p>
              感谢您的善心与支持！您的每一笔奉献都将直接用于<strong>紧急临时庇护住所、每周查经聚会暖心餐饮、学生学者急难救助、道路救援与爱心赠车</strong>。
            </p>
          ) : (
            <p>
              Thank you for your generosity! Contributions directly support <strong>temporary shelter lodging, fellowship warm meals, emergency roadside aid, and student scholar assistance</strong>.
            </p>
          )}
        </div>

        {/* Option 1: Stripe Online Donation */}
        <div className="border border-slate-300 rounded-xs p-4 sm:p-5 mb-4 bg-white shadow-2xs">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-xs bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
              <CreditCard className="w-3.5 h-3.5 text-accent-theme" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-tight">
                {language === 'zh' ? 'Stripe 在线安全捐款' : 'Secure Online Donation via Stripe'}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500">
                {language === 'zh' ? '支持信用卡、借记卡、Apple Pay 与 Google Pay' : 'Supports Credit/Debit Cards, Apple Pay & Google Pay'}
              </p>
            </div>
          </div>

          {/* Simple Custom Amount Explanation (Plain & Clear) */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-xs p-3 mb-3.5 text-xs text-slate-600 leading-relaxed">
            {language === 'zh'
              ? '捐款金额由您完全自主决定。点击下方按钮将打开 Stripe 官方安全支付页面，您可以在该页面直接输入任意您想要奉献的心意金额。'
              : 'You choose your own donation amount. Clicking the button below opens the secure Stripe payment page, where you can freely enter any contribution amount of your choice.'}
          </div>

          {/* Big Proceed Button */}
          {hasStripeUrl && (
            <a
              href={DONATION_CONFIG.stripeDonationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3 px-3 sm:px-4 rounded-xs font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer text-center leading-snug"
            >
              <Lock className="w-4 h-4 text-accent-theme shrink-0" />
              <span>{language === 'zh' ? '前往 Stripe 自主输入金额并奉献' : 'Proceed to Stripe (Enter Amount & Give)'}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          )}

          {/* Receipt Note */}
          <div className="mt-2.5 pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary-theme shrink-0" />
            <span>{language === 'zh' ? '完成支付后，Stripe 会自动发送电子收据至您的邮箱' : 'Stripe automatically delivers an official receipt to your email'}</span>
          </div>
        </div>



        {/* Footer Info & Disclaimers Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-center text-xs text-slate-500">
          <button
            onClick={goToTerms}
            className="text-slate-400 hover:text-slate-700 hover:underline cursor-pointer text-[11px] flex items-center gap-1 transition-colors"
          >
            <FileText className="w-3 h-3 text-slate-400" />
            <span>{language === 'zh' ? '非营利捐赠免责声明' : 'Giving Terms & Disclaimers'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
