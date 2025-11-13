// Barbod Translations - EN/FA

export type Language = 'fa' | 'en';

export const translations = {
  fa: {
    // Navigation
    'nav.solutions': 'راه‌کارها',
    'nav.docs': 'مستندات',
    'nav.pricing': 'قیمت‌گذاری',
    'nav.status': 'وضعیت سیستم',
    'nav.getStarted': 'شروع کنید',
    'nav.search': 'جستجو...',
    
    // Hero
    'hero.badge': 'تایید هویت بیومتریک',
    'hero.title': 'احراز هویت مطمئن با',
    'hero.titleHighlight': 'باربُد',
    'hero.subtitle': 'پلتفرم احراز هویت بیومتریک سطح سازمانی با تشخیص چهره، تطبیق مدارک و تایید صوتی. ایمن، سریع و قابل اعتماد.',
    'hero.ctaPrimary': 'شروع رایگان',
    'hero.ctaSecondary': 'مشاهده نسخه نمایشی',
    'hero.codeTitle': '▶ اجرای تایید هویت',
    
    // Features
    'features.title': 'قدرتمند، امن، قابل اطمینان',
    'features.subtitle': 'همه چیز برای احراز هویت بیومتریک سازمانی',
    
    'feature.face.title': 'تشخیص چهره پیشرفته',
    'feature.face.desc': 'الگوریتم‌های یادگیری عمیق با دقت ۹۹.۴٪ و تشخیص ضد جعل زنده',
    
    'feature.liveness.title': 'تشخیص زنده‌بودن',
    'feature.liveness.desc': 'جلوگیری از حملات جعل با چالش‌های تصادفی و تحلیل رفتاری',
    
    'feature.document.title': 'بررسی مدارک هویتی',
    'feature.document.desc': 'استخراج OCR و تطبیق چهره از گذرنامه، کارت ملی و گواهینامه',
    
    'feature.voice.title': 'تایید هویت صوتی',
    'feature.voice.desc': 'بیومتریک صدا با عبارات تصادفی و تشخیص الگوی گفتار',
    
    'feature.security.title': 'امنیت سطح بانکی',
    'feature.security.desc': 'رمزگذاری سرتاسری، انطباق با GDPR و ممیزی کامل',
    
    'feature.api.title': 'یکپارچه‌سازی آسان API',
    'feature.api.desc': 'SDK های REST و آماده با مستندات جامع و پشتیبانی توسعه‌دهندگان',
    
    // Trust Section
    'trust.title': 'به آن اعتماد کنید',
    'trust.accuracy': 'دقت',
    'trust.response': 'زمان پاسخ',
    'trust.uptime': 'آپتایم',
    'trust.companies': 'شرکت‌های فعال',
    
    // Pricing
    'pricing.title': 'قیمت‌گذاری شفاف',
    'pricing.subtitle': 'طرحی برای هر اندازه کسب‌وکار',
    'pricing.monthly': 'ماهانه',
    'pricing.annual': 'سالانه',
    'pricing.save': 'صرفه‌جویی ۲۰٪',
    
    'pricing.starter.name': 'استارتر',
    'pricing.starter.price': '۴۹۰,۰۰۰',
    'pricing.starter.desc': 'برای تیم‌های کوچک و استارتاپ‌ها',
    
    'pricing.pro.name': 'حرفه‌ای',
    'pricing.pro.price': '۱,۴۹۰,۰۰۰',
    'pricing.pro.desc': 'برای کسب‌وکارهای در حال رشد',
    'pricing.pro.badge': 'محبوب',
    
    'pricing.enterprise.name': 'سازمانی',
    'pricing.enterprise.price': 'تماس بگیرید',
    'pricing.enterprise.desc': 'برای سازمان‌های بزرگ',
    
    'pricing.feature.verifications': 'تایید هویت در ماه',
    'pricing.feature.face': 'تشخیص چهره',
    'pricing.feature.liveness': 'تشخیص زنده‌بودن',
    'pricing.feature.document': 'بررسی اسناد',
    'pricing.feature.voice': 'تایید صوتی',
    'pricing.feature.api': 'دسترسی API',
    'pricing.feature.support': 'پشتیبانی',
    'pricing.feature.webhook': 'وب‌هوک‌ها',
    'pricing.feature.sla': 'SLA سفارشی',
    
    'pricing.cta': 'شروع کنید',
    'pricing.contact': 'تماس با فروش',
    
    // CTA Section
    'cta.title': 'آماده برای شروع؟',
    'cta.subtitle': 'باربُد را امروز امتحان کنید و احراز هویت بیومتریک را تجربه کنید',
    'cta.start': 'رایگان شروع کنید',
    'cta.demo': 'درخواست نسخه نمایشی',
    
    // Footer
    'footer.product': 'محصول',
    'footer.product.features': 'ویژگی‌ها',
    'footer.product.pricing': 'قیمت‌گذاری',
    'footer.product.security': 'امنیت',
    'footer.product.compliance': 'انطباق',
    
    'footer.developers': 'توسعه‌دهندگان',
    'footer.developers.docs': 'مستندات',
    'footer.developers.api': 'مرجع API',
    'footer.developers.sdk': 'SDK ها',
    'footer.developers.changelog': 'تغییرات',
    
    'footer.company': 'شرکت',
    'footer.company.about': 'درباره ما',
    'footer.company.blog': 'وبلاگ',
    'footer.company.careers': 'فرصت‌های شغلی',
    'footer.company.contact': 'تماس',
    
    'footer.legal': 'حقوقی',
    'footer.legal.privacy': 'حریم خصوصی',
    'footer.legal.terms': 'شرایط استفاده',
    'footer.legal.cookies': 'کوکی‌ها',
    
    'footer.rights': 'تمام حقوق محفوظ است.',
    'footer.language': 'زبان',
    'footer.theme': 'پوسته',
    'footer.theme.dark': 'تیره',
    'footer.theme.light': 'روشن',
    
    // Verification Flow
    'verify.title': 'فرآیند تایید هویت',
    'verify.step.consent': 'رضایت‌نامه',
    'verify.step.permissions': 'مجوزها',
    'verify.step.liveness': 'تشخیص زنده‌بودن',
    'verify.step.selfie': 'عکس سلفی',
    'verify.step.document': 'مدارک',
    'verify.step.match': 'تطبیق چهره',
    'verify.step.voice': 'صدا',
    'verify.step.complete': 'تکمیل',
    
    // Consent
    'consent.title': 'رضایت برای تایید هویت بیومتریک',
    'consent.purpose': 'هدف',
    'consent.purpose.text': 'ما نیاز داریم داده‌های بیومتریک شما را جمع‌آوری کنیم تا هویت شما را تایید کنیم و از حساب شما محافظت کنیم.',
    'consent.data': 'داده‌های جمع‌آوری شده',
    'consent.data.face': 'تصاویر چهره و ویژگی‌های بیومتریک',
    'consent.data.voice': 'نمونه‌های صوتی و الگوی صدا',
    'consent.data.document': 'اطلاعات مدارک شناسایی',
    'consent.retention': 'مدت نگهداری',
    'consent.retention.30': '۳۰ روز',
    'consent.retention.90': '۹۰ روز',
    'consent.retention.365': '۱ سال',
    'consent.privacy': 'سیاست حریم خصوصی',
    'consent.terms': 'شرایط خدمات',
    'consent.decline': 'رد می‌کنم',
    'consent.agree': 'موافقم و ادامه می‌دهم',
    
    // Permissions
    'permission.camera.title': 'دسترسی به دوربین',
    'permission.camera.rationale': 'برای گرفتن سلفی و تایید هویت شما به دوربین نیاز داریم.',
    'permission.camera.allow': 'اجازه دسترسی به دوربین',
    'permission.camera.deny': 'در حال حاضر نه',
    
    'permission.microphone.title': 'دسترسی به میکروفون',
    'permission.microphone.rationale': 'برای تایید هویت صوتی شما به میکروفون نیاز داریم.',
    'permission.microphone.allow': 'اجازه دسترسی به میکروفون',
    'permission.microphone.deny': 'در حال حاضر نه',
    
    'permission.blocked.title': 'دسترسی مسدود شده',
    'permission.blocked.text': 'لطفاً دسترسی را از تنظیمات مرورگر خود فعال کنید.',
    
    // Liveness
    'liveness.title': 'تشخیص زنده‌بودن',
    'liveness.instruction': 'لطفاً دستورات را دنبال کنید',
    'liveness.turnLeft': 'سر خود را به چپ بچرخانید',
    'liveness.turnRight': 'سر خود را به راست بچرخانید',
    'liveness.blink': 'چشمان خود را ببندید',
    'liveness.smile': 'لبخند بزنید',
    'liveness.speak': 'اعداد را بگویید',
    'liveness.processing': 'در حال پردازش...',
    'liveness.pass': 'موفق',
    'liveness.fail': 'ناموفق',
    'liveness.retry': 'تلاش مجدد',
    
    // Selfie Capture
    'selfie.title': 'گرفتن عکس سلفی',
    'selfie.guide': 'چهره خود را در کادر قرار دهید',
    'selfie.capture': 'گرفتن عکس',
    'selfie.retake': 'گرفتن مجدد',
    'selfie.tooDark': 'خیلی تاریک',
    'selfie.glare': 'تابش نور',
    'selfie.outOfFrame': 'خارج از کادر',
    'selfie.goodLighting': 'نور مناسب',
    
    // Document
    'document.title': 'بررسی مدرک',
    'document.select': 'نوع مدرک را انتخاب کنید',
    'document.passport': 'گذرنامه',
    'document.idCard': 'کارت ملی',
    'document.driverLicense': 'گواهینامه',
    'document.front': 'روی مدرک',
    'document.back': 'پشت مدرک',
    'document.capture': 'گرفتن تصویر',
    'document.recapture': 'گرفتن مجدد',
    'document.skew': 'مدرک کج است',
    'document.glare': 'تابش نور',
    'document.review': 'بررسی اطلاعات',
    'document.confirm': 'تایید اطلاعات',
    
    // Face Match
    'faceMatch.title': 'تطبیق چهره',
    'faceMatch.selfie': 'عکس سلفی',
    'faceMatch.document': 'عکس مدرک',
    'faceMatch.similarity': 'میزان تشابه',
    'faceMatch.threshold': 'حد آستانه: ۸۵٪',
    'faceMatch.match': 'مطابقت دارد',
    'faceMatch.noMatch': 'مطابقت ندارد',
    'faceMatch.confidence': 'اطمینان',
    
    // Voice
    'voice.title': 'تایید هویت صوتی',
    'voice.passphrase': 'عبارت عبور',
    'voice.record': 'ضبط',
    'voice.play': 'پخش',
    'voice.rerecord': 'ضبط مجدد',
    'voice.recording': 'در حال ضبط...',
    'voice.similarity': 'میزان تشابه صدا',
    'voice.transcription': 'متن گفته‌شده',
    
    // Status
    'status.title': 'وضعیت تایید هویت',
    'status.inProgress': 'در حال انجام',
    'status.completed': 'تکمیل شده',
    'status.failed': 'ناموفق',
    'status.pending': 'در انتظار',
    'status.score': 'امتیاز',
    'status.finalVerdict': 'نتیجه نهایی',
    'status.approved': 'تایید شد',
    'status.rejected': 'رد شد',
    'status.review': 'نیاز به بررسی',
    
    // Risk & Confidence
    'risk.title': 'سطح ریسک',
    'risk.low': 'کم',
    'risk.medium': 'متوسط',
    'risk.high': 'بالا',
    'confidence.title': 'میزان اطمینان',
    'confidence.high': 'بالا (≥۸۵٪)',
    'confidence.medium': 'متوسط (≥۶۵٪)',
    'confidence.low': 'کم (<۶۵٪)',
    
    // Common
    'common.loading': 'در حال بارگذاری...',
    'common.continue': 'ادامه',
    'common.back': 'بازگشت',
    'common.cancel': 'لغو',
    'common.save': 'ذخیره',
    'common.edit': 'ویرایش',
    'common.delete': 'حذف',
    'common.close': 'بستن',
    'common.or': 'یا',
    'common.perMonth': 'در ماه',
    'common.unlimited': 'نامحدود',
    'common.included': 'شامل می‌شود',
    'common.email': 'ایمیل',
    'common.priority': 'اولویت',
    'common.dedicated': 'اختصاصی',
  },
  en: {
    // Navigation
    'nav.solutions': 'Solutions',
    'nav.docs': 'Docs',
    'nav.pricing': 'Pricing',
    'nav.status': 'Status',
    'nav.getStarted': 'Get Started',
    'nav.search': 'Search...',
    
    // Hero
    'hero.badge': 'Biometric Verification',
    'hero.title': 'Secure Identity Verification with',
    'hero.titleHighlight': 'Barbod',
    'hero.subtitle': 'Enterprise-grade biometric authentication platform with face recognition, document matching, and voice verification. Secure, fast, and reliable.',
    'hero.ctaPrimary': 'Start Free',
    'hero.ctaSecondary': 'View Demo',
    'hero.codeTitle': '▶ Run Verification',
    
    // Features
    'features.title': 'Powerful, Secure, Reliable',
    'features.subtitle': 'Everything you need for enterprise biometric authentication',
    
    'feature.face.title': 'Advanced Face Recognition',
    'feature.face.desc': 'Deep learning algorithms with 99.4% accuracy and live anti-spoofing detection',
    
    'feature.liveness.title': 'Liveness Detection',
    'feature.liveness.desc': 'Prevent spoofing attacks with random challenges and behavioral analysis',
    
    'feature.document.title': 'ID Document Verification',
    'feature.document.desc': 'OCR extraction and face matching from passports, ID cards, and driver licenses',
    
    'feature.voice.title': 'Voice Verification',
    'feature.voice.desc': 'Voice biometrics with random passphrases and speech pattern recognition',
    
    'feature.security.title': 'Bank-Grade Security',
    'feature.security.desc': 'End-to-end encryption, GDPR compliance, and complete audit trails',
    
    'feature.api.title': 'Easy API Integration',
    'feature.api.desc': 'REST APIs and ready-to-use SDKs with comprehensive docs and developer support',
    
    // Trust Section
    'trust.title': 'Trust It',
    'trust.accuracy': 'Accuracy',
    'trust.response': 'Response Time',
    'trust.uptime': 'Uptime',
    'trust.companies': 'Active Companies',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'A plan for every business size',
    'pricing.monthly': 'Monthly',
    'pricing.annual': 'Annual',
    'pricing.save': 'Save 20%',
    
    'pricing.starter.name': 'Starter',
    'pricing.starter.price': '$49',
    'pricing.starter.desc': 'For small teams and startups',
    
    'pricing.pro.name': 'Professional',
    'pricing.pro.price': '$149',
    'pricing.pro.desc': 'For growing businesses',
    'pricing.pro.badge': 'Popular',
    
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.price': 'Contact Us',
    'pricing.enterprise.desc': 'For large organizations',
    
    'pricing.feature.verifications': 'Verifications per month',
    'pricing.feature.face': 'Face Recognition',
    'pricing.feature.liveness': 'Liveness Detection',
    'pricing.feature.document': 'Document Verification',
    'pricing.feature.voice': 'Voice Verification',
    'pricing.feature.api': 'API Access',
    'pricing.feature.support': 'Support',
    'pricing.feature.webhook': 'Webhooks',
    'pricing.feature.sla': 'Custom SLA',
    
    'pricing.cta': 'Get Started',
    'pricing.contact': 'Contact Sales',
    
    // CTA Section
    'cta.title': 'Ready to Get Started?',
    'cta.subtitle': 'Try Barbod today and experience biometric authentication',
    'cta.start': 'Start Free',
    'cta.demo': 'Request Demo',
    
    // Footer
    'footer.product': 'Product',
    'footer.product.features': 'Features',
    'footer.product.pricing': 'Pricing',
    'footer.product.security': 'Security',
    'footer.product.compliance': 'Compliance',
    
    'footer.developers': 'Developers',
    'footer.developers.docs': 'Documentation',
    'footer.developers.api': 'API Reference',
    'footer.developers.sdk': 'SDKs',
    'footer.developers.changelog': 'Changelog',
    
    'footer.company': 'Company',
    'footer.company.about': 'About',
    'footer.company.blog': 'Blog',
    'footer.company.careers': 'Careers',
    'footer.company.contact': 'Contact',
    
    'footer.legal': 'Legal',
    'footer.legal.privacy': 'Privacy',
    'footer.legal.terms': 'Terms',
    'footer.legal.cookies': 'Cookies',
    
    'footer.rights': 'All rights reserved.',
    'footer.language': 'Language',
    'footer.theme': 'Theme',
    'footer.theme.dark': 'Dark',
    'footer.theme.light': 'Light',
    
    // Verification Flow
    'verify.title': 'Verification Flow',
    'verify.step.consent': 'Consent',
    'verify.step.permissions': 'Permissions',
    'verify.step.liveness': 'Liveness',
    'verify.step.selfie': 'Selfie',
    'verify.step.document': 'Document',
    'verify.step.match': 'Face Match',
    'verify.step.voice': 'Voice',
    'verify.step.complete': 'Complete',
    
    // Consent
    'consent.title': 'Consent for Biometric Verification',
    'consent.purpose': 'Purpose',
    'consent.purpose.text': 'We need to collect your biometric data to verify your identity and protect your account.',
    'consent.data': 'Data Collected',
    'consent.data.face': 'Face images and biometric features',
    'consent.data.voice': 'Voice samples and speech pattern',
    'consent.data.document': 'Identity document information',
    'consent.retention': 'Retention Period',
    'consent.retention.30': '30 days',
    'consent.retention.90': '90 days',
    'consent.retention.365': '1 year',
    'consent.privacy': 'Privacy Policy',
    'consent.terms': 'Terms of Service',
    'consent.decline': 'Decline',
    'consent.agree': 'Agree & Continue',
    
    // Permissions
    'permission.camera.title': 'Camera Access',
    'permission.camera.rationale': 'We need camera access to capture your selfie and verify your identity.',
    'permission.camera.allow': 'Allow Camera',
    'permission.camera.deny': 'Not Now',
    
    'permission.microphone.title': 'Microphone Access',
    'permission.microphone.rationale': 'We need microphone access for voice verification.',
    'permission.microphone.allow': 'Allow Microphone',
    'permission.microphone.deny': 'Not Now',
    
    'permission.blocked.title': 'Access Blocked',
    'permission.blocked.text': 'Please enable access from your browser settings.',
    
    // Liveness
    'liveness.title': 'Liveness Detection',
    'liveness.instruction': 'Please follow the instructions',
    'liveness.turnLeft': 'Turn your head left',
    'liveness.turnRight': 'Turn your head right',
    'liveness.blink': 'Blink your eyes',
    'liveness.smile': 'Smile',
    'liveness.speak': 'Say the digits',
    'liveness.processing': 'Processing...',
    'liveness.pass': 'Pass',
    'liveness.fail': 'Fail',
    'liveness.retry': 'Retry',
    
    // Selfie Capture
    'selfie.title': 'Capture Selfie',
    'selfie.guide': 'Position your face in the frame',
    'selfie.capture': 'Capture',
    'selfie.retake': 'Retake',
    'selfie.tooDark': 'Too Dark',
    'selfie.glare': 'Glare',
    'selfie.outOfFrame': 'Out of Frame',
    'selfie.goodLighting': 'Good Lighting',
    
    // Document
    'document.title': 'Document Verification',
    'document.select': 'Select document type',
    'document.passport': 'Passport',
    'document.idCard': 'ID Card',
    'document.driverLicense': 'Driver License',
    'document.front': 'Front',
    'document.back': 'Back',
    'document.capture': 'Capture',
    'document.recapture': 'Recapture',
    'document.skew': 'Document Skewed',
    'document.glare': 'Glare Detected',
    'document.review': 'Review Information',
    'document.confirm': 'Confirm Information',
    
    // Face Match
    'faceMatch.title': 'Face Match',
    'faceMatch.selfie': 'Selfie',
    'faceMatch.document': 'Document Photo',
    'faceMatch.similarity': 'Similarity',
    'faceMatch.threshold': 'Threshold: 85%',
    'faceMatch.match': 'Match',
    'faceMatch.noMatch': 'No Match',
    'faceMatch.confidence': 'Confidence',
    
    // Voice
    'voice.title': 'Voice Verification',
    'voice.passphrase': 'Passphrase',
    'voice.record': 'Record',
    'voice.play': 'Play',
    'voice.rerecord': 'Re-record',
    'voice.recording': 'Recording...',
    'voice.similarity': 'Voice Similarity',
    'voice.transcription': 'Transcription',
    
    // Status
    'status.title': 'Verification Status',
    'status.inProgress': 'In Progress',
    'status.completed': 'Completed',
    'status.failed': 'Failed',
    'status.pending': 'Pending',
    'status.score': 'Score',
    'status.finalVerdict': 'Final Verdict',
    'status.approved': 'Approved',
    'status.rejected': 'Rejected',
    'status.review': 'Needs Review',
    
    // Risk & Confidence
    'risk.title': 'Risk Level',
    'risk.low': 'Low',
    'risk.medium': 'Medium',
    'risk.high': 'High',
    'confidence.title': 'Confidence Level',
    'confidence.high': 'High (≥85%)',
    'confidence.medium': 'Medium (≥65%)',
    'confidence.low': 'Low (<65%)',
    
    // Common
    'common.loading': 'Loading...',
    'common.continue': 'Continue',
    'common.back': 'Back',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.close': 'Close',
    'common.or': 'or',
    'common.perMonth': 'per month',
    'common.unlimited': 'Unlimited',
    'common.included': 'Included',
    'common.email': 'Email',
    'common.priority': 'Priority',
    'common.dedicated': 'Dedicated',
  },
};

export function t(key: string, lang: Language): string {
  return translations[lang][key] || key;
}
