'use client';

import { CheckCircle, AlertCircle, Clock, Activity, Server, Database, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/language-context';
import type { Language } from '../lib/translations';

type ServiceStatus = 'operational' | 'degraded' | 'outage' | 'maintenance';
type IncidentStatus = 'resolved' | 'completed';
type LocalizedText = Record<Language, string>;

interface Service {
  name: LocalizedText;
  status: ServiceStatus;
  uptime: number;
  responseTime: number;
  icon: any;
}

interface Incident {
  date: LocalizedText;
  time: LocalizedText;
  title: LocalizedText;
  status: IncidentStatus;
  description: LocalizedText;
}

interface Metric {
  label: LocalizedText;
  value: LocalizedText;
  trend: LocalizedText;
  color: string;
}

type SectionCopy = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  metricsTitle: string;
  servicesTitle: string;
  serviceUptimeLabel: string;
  serviceResponseLabel: string;
  uptimeTitle: string;
  uptimeRangeStart: string;
  uptimeRangeEnd: string;
  incidentsTitle: string;
  subscribeTitle: string;
  subscribeDescription: string;
  subscribePlaceholder: string;
  subscribeCta: string;
};

const sectionCopy: Record<Language, SectionCopy> = {
  en: {
    badge: 'Live status',
    title: 'Platform systems are',
    highlight: 'fully operational',
    description:
      'Continuous telemetry across our global regions keeps every biometric journey healthy, even during peak events.',
    metricsTitle: 'Key reliability metrics',
    servicesTitle: 'Service availability',
    serviceUptimeLabel: 'Uptime',
    serviceResponseLabel: 'Response',
    uptimeTitle: '30-day uptime trend',
    uptimeRangeStart: 'Start of month',
    uptimeRangeEnd: 'Today',
    incidentsTitle: 'Incident history',
    subscribeTitle: 'Subscribe to status updates',
    subscribeDescription: 'Stay informed about scheduled maintenance and realtime incidents as they happen.',
    subscribePlaceholder: 'Work email',
    subscribeCta: 'Subscribe',
  },
  fa: {
    badge: 'وضعیت لحظه‌ای',
    title: 'تمام سامانه‌های پلتفرم',
    highlight: 'در حال کار هستند',
    description: 'با پایش مداوم در تمام ریجن‌ها، هر سفر احراز هویت حتی در اوج ترافیک پایدار می‌ماند.',
    metricsTitle: 'شاخص‌های پایداری',
    servicesTitle: 'دسترس‌پذیری سرویس‌ها',
    serviceUptimeLabel: 'آپ‌تایم',
    serviceResponseLabel: 'پاسخ',
    uptimeTitle: 'روند آپ‌تایم ۳۰ روزه',
    uptimeRangeStart: 'شروع ماه',
    uptimeRangeEnd: 'امروز',
    incidentsTitle: 'تاریخچه رخدادها',
    subscribeTitle: 'دریافت به‌روزرسانی وضعیت',
    subscribeDescription: 'از برنامه‌های نگه‌داری و رخدادهای لحظه‌ای باخبر شوید.',
    subscribePlaceholder: 'ایمیل سازمانی',
    subscribeCta: 'اشتراک',
  },
};

const statusLabels: Record<ServiceStatus, LocalizedText> = {
  operational: { en: 'Operational', fa: 'در حال اجرا' },
  degraded: { en: 'Degraded', fa: 'کاهش عملکرد' },
  outage: { en: 'Outage', fa: 'اختلال' },
  maintenance: { en: 'Maintenance', fa: 'نگه‌داری' },
};

const incidentStatusLabels: Record<IncidentStatus, LocalizedText> = {
  resolved: { en: 'Resolved', fa: 'برطرف شد' },
  completed: { en: 'Completed', fa: 'انجام شد' },
};

const services: Service[] = [
  {
    name: { en: 'Face Recognition API', fa: 'API تشخیص چهره' },
    status: 'operational',
    uptime: 99.98,
    responseTime: 145,
    icon: Activity,
  },
  {
    name: { en: 'Liveness Detection', fa: 'تشخیص زنده بودن' },
    status: 'operational',
    uptime: 99.97,
    responseTime: 230,
    icon: Activity,
  },
  {
    name: { en: 'Document OCR', fa: 'OCR مدارک' },
    status: 'operational',
    uptime: 99.95,
    responseTime: 380,
    icon: Activity,
  },
  {
    name: { en: 'Voice Verification', fa: 'تأیید صوتی' },
    status: 'operational',
    uptime: 99.96,
    responseTime: 290,
    icon: Activity,
  },
  {
    name: { en: 'API Gateway', fa: 'درگاه API' },
    status: 'operational',
    uptime: 99.99,
    responseTime: 45,
    icon: Server,
  },
  {
    name: { en: 'Database Services', fa: 'خدمات پایگاه داده' },
    status: 'operational',
    uptime: 99.99,
    responseTime: 12,
    icon: Database,
  },
  {
    name: { en: 'CDN & Storage', fa: 'CDN و ذخیره‌سازی' },
    status: 'operational',
    uptime: 100,
    responseTime: 28,
    icon: Globe,
  },
  {
    name: { en: 'Security Services', fa: 'خدمات امنیتی' },
    status: 'operational',
    uptime: 100,
    responseTime: 35,
    icon: Shield,
  },
];

const incidents: Incident[] = [
  {
    date: { en: 'Nov 12, 2025', fa: '۲۱ آبان ۱۴۰۴' },
    time: { en: '09:30 UTC', fa: '۰۹:۳۰ به‌وقت UTC' },
    title: { en: 'Brief OCR latency', fa: 'افزایش موقت تأخیر OCR' },
    status: 'resolved',
    description: {
      en: 'Document OCR queries in eu-central experienced elevated latency for 4 minutes.',
      fa: 'در دیتاسنتر فرانکفورت درخواست‌های OCR به‌مدت ۴ دقیقه با تأخیر بیشتر روبه‌رو شد.',
    },
  },
  {
    date: { en: 'Nov 05, 2025', fa: '۱۴ آبان ۱۴۰۴' },
    time: { en: '22:10 UTC', fa: '۲۲:۱۰ به‌وقت UTC' },
    title: { en: 'Scheduled database maintenance', fa: 'نگه‌داری زمان‌بندی‌شده پایگاه داده' },
    status: 'completed',
    description: {
      en: 'Replica upgrades completed with no customer impact.',
      fa: 'ارتقای رپلیکا بدون تأثیر بر مشتریان انجام شد.',
    },
  },
  {
    date: { en: 'Oct 28, 2025', fa: '۶ آبان ۱۴۰۴' },
    time: { en: '04:20 UTC', fa: '۰۴:۲۰ به‌وقت UTC' },
    title: { en: 'API gateway failover test', fa: 'آزمون جابه‌جایی درگاه API' },
    status: 'completed',
    description: {
      en: 'Quarterly failover exercises validated regional routing.',
      fa: 'تمرین فصلی جابه‌جایی مسیر برای همه ریجن‌ها تأیید شد.',
    },
  },
];

const metrics: Metric[] = [
  {
    label: { en: 'Global uptime', fa: 'دسترس‌پذیری جهانی' },
    value: { en: '99.97%', fa: '۹۹٫۹۷٪' },
    trend: { en: '+0.02%', fa: '+۰٫۰۲٪' },
    color: 'var(--success)',
  },
  {
    label: { en: 'Average response time', fa: 'میانگین زمان پاسخ' },
    value: { en: '280ms', fa: '۲۸۰ میلی‌ثانیه' },
    trend: { en: '-12ms', fa: '-۱۲ میلی‌ثانیه' },
    color: 'var(--brand-azure)',
  },
  {
    label: { en: 'Incidents (90d)', fa: 'رخدادها (۹۰ روز)' },
    value: { en: '3', fa: '۳' },
    trend: { en: '-1 vs prev', fa: '-۱ نسبت به قبل' },
    color: 'var(--brand-teal)',
  },
  {
    label: { en: 'Automated journeys', fa: 'سفرهای خودکار' },
    value: { en: '1.2M', fa: '۱٫۲میلیون' },
    trend: { en: '+6%', fa: '+۶٪' },
    color: 'var(--success)',
  },
];

const uptimeTrend: number[] = Array.from({ length: 30 }, (_, index) => {
  const base = 98.5 + Math.sin(index / 3) * 0.8 + (index % 4) * 0.05;
  return parseFloat(Math.min(100, Math.max(96.5, base)).toFixed(2));
});

export function StatusSection() {
  const { language, dir } = useLanguage();
  const copy = sectionCopy[language];
  const locale = language === 'fa' ? 'fa-IR' : 'en-US';
  const percentFormatter = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  const integerFormatter = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });

  const formatPercent = (value: number) => `${percentFormatter.format(value)}${language === 'fa' ? '٪' : '%'}`;

  const formatResponseTime = (value: number) =>
    language === 'fa' ? `${integerFormatter.format(value)} میلی‌ثانیه` : `${integerFormatter.format(value)}ms`;

  const getStatusIcon = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-[color:var(--success)]" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-[color:var(--warning)]" />;
      case 'outage':
        return <AlertCircle className="w-5 h-5 text-[color:var(--danger)]" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-[color:var(--info)]" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return 'text-[color:var(--success)]';
      case 'degraded':
        return 'text-[color:var(--warning)]';
      case 'outage':
        return 'text-[color:var(--danger)]';
      case 'maintenance':
        return 'text-[color:var(--info)]';
      default:
        return '';
    }
  };

  return (
    <section className="py-20 lg:py-32" id="status" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--success)] bg-opacity-10 border border-[color:var(--success)] mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[color:var(--success)] animate-pulse-slow"></div>
            <span className="text-sm text-[color:var(--success)]">{copy.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            {copy.title} <span className="text-brand-gradient">{copy.highlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            {copy.description}
          </motion.p>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-xl mb-6 text-center">{copy.metricsTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={`${metric.label.en}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)]"
              >
                <div className="text-sm text-[color:var(--text-secondary)] mb-2">{metric.label[language]}</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <div className="text-2xl" style={{ color: metric.color }}>
                    {metric.value[language]}
                  </div>
                  <div
                    className={`text-xs ${
                      metric.trend[language].startsWith('+')
                        ? 'text-[color:var(--success)]'
                        : 'text-[color:var(--brand-azure)]'
                    }`}
                  >
                    {metric.trend[language]}
                  </div>
                </div>
                <div className="h-1 bg-[color:var(--surface-card)] rounded-full overflow-hidden">
                  <div className="h-full w-4/5 rounded-full" style={{ backgroundColor: metric.color }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl mb-6">{copy.servicesTitle}</h3>
          <div className="space-y-3">
            {services.map((service, index) => (
              <motion.div
                key={`${service.name.en}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--border-subtle)] transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <service.icon className="w-5 h-5 text-[color:var(--text-secondary)]" />
                    <span>{service.name[language]}</span>
                  </div>

                  <div className="hidden md:flex items-center gap-6 text-sm text-[color:var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[color:var(--text-tertiary)]">
                        {copy.serviceUptimeLabel}:
                      </span>
                      <span className="text-[color:var(--success)]">{formatPercent(service.uptime)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[color:var(--text-tertiary)]">
                        {copy.serviceResponseLabel}:
                      </span>
                      <span>{formatResponseTime(service.responseTime)}</span>
                    </div>
                  </div>

                  <div className={`flex items-center gap-2 ${getStatusColor(service.status)}`}>
                    {getStatusIcon(service.status)}
                    <span className="text-sm">{statusLabels[service.status][language]}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Uptime Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl mb-6">{copy.uptimeTitle}</h3>
          <div className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)]">
            <div className="flex items-end gap-1 h-32">
              {uptimeTrend.map((value, index) => {
                const label =
                  language === 'fa'
                    ? `روز ${integerFormatter.format(index + 1)}: ${percentFormatter.format(value)}٪`
                    : `Day ${index + 1}: ${percentFormatter.format(value)}%`;

                return (
                  <motion.div
                    key={`${value}-${index}`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className={`flex-1 rounded-t ${
                      value >= 99 ? 'bg-[color:var(--success)]' : 'bg-[color:var(--warning)]'
                    } hover:opacity-80 transition-opacity cursor-pointer`}
                    title={label}
                  ></motion.div>
                );
              })}
            </div>
            <div className="flex justify-between mt-4 text-xs text-[color:var(--text-tertiary)]">
              <span>{copy.uptimeRangeStart}</span>
              <span>{copy.uptimeRangeEnd}</span>
            </div>
          </div>
        </motion.div>

        {/* Incident History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl mb-6">{copy.incidentsTitle}</h3>
          <div className="space-y-4">
            {incidents.map((incident, index) => (
              <motion.div
                key={`${incident.title.en}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)]"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg">{incident.title[language]}</h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          incident.status === 'resolved'
                            ? 'bg-[color:var(--success)] bg-opacity-10 text-[color:var(--success)]'
                            : 'bg-[color:var(--info)] bg-opacity-10 text-[color:var(--info)]'
                        }`}
                      >
                        {incidentStatusLabels[incident.status][language]}
                      </span>
                    </div>
                    <p className="text-sm text-[color:var(--text-secondary)]">{incident.description[language]}</p>
                  </div>
                  <div className="text-left text-sm text-[color:var(--text-tertiary)] whitespace-nowrap">
                    <div>{incident.date[language]}</div>
                    <div>{incident.time[language]}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)] text-center"
        >
          <h3 className="text-xl mb-3">{copy.subscribeTitle}</h3>
          <p className="text-[color:var(--text-secondary)] mb-6">{copy.subscribeDescription}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={copy.subscribePlaceholder}
              className="flex-1 px-4 py-3 rounded-[var(--radius-md)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] focus:border-[color:var(--outline-focus)] outline-none transition-colors"
            />
            <button className="px-6 py-3 rounded-[var(--radius-md)] bg-brand-gradient text-[color:var(--text-inverse)] hover:opacity-90 transition-opacity whitespace-nowrap">
              {copy.subscribeCta}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
