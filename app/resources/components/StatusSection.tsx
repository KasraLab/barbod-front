import { CheckCircle, AlertCircle, Clock, Activity, Server, Database, Globe, Shield } from 'lucide-react';
import { motion } from 'motion/react';

type ServiceStatus = 'operational' | 'degraded' | 'outage' | 'maintenance';

interface Service {
  name: string;
  status: ServiceStatus;
  uptime: number;
  responseTime: number;
  icon: any;
}

const services: Service[] = [
  { name: 'Face Recognition API', status: 'operational', uptime: 99.98, responseTime: 145, icon: Activity },
  { name: 'Liveness Detection', status: 'operational', uptime: 99.97, responseTime: 230, icon: Activity },
  { name: 'Document OCR', status: 'operational', uptime: 99.95, responseTime: 380, icon: Activity },
  { name: 'Voice Verification', status: 'operational', uptime: 99.96, responseTime: 290, icon: Activity },
  { name: 'API Gateway', status: 'operational', uptime: 99.99, responseTime: 45, icon: Server },
  { name: 'Database Services', status: 'operational', uptime: 99.99, responseTime: 12, icon: Database },
  { name: 'CDN & Storage', status: 'operational', uptime: 100, responseTime: 28, icon: Globe },
  { name: 'Security Services', status: 'operational', uptime: 100, responseTime: 35, icon: Shield }
];

const incidents = [
  {
    date: '۱۴۰۳/۰۷/۲۸',
    time: '۱۴:۳۰',
    title: 'تأخیر در پردازش OCR',
    status: 'resolved',
    description: 'تأخیر موقت در پردازش درخواست‌های OCR به دلیل افزایش بار سرور. مشکل در عرض ۲۵ دقیقه برطرف شد.'
  },
  {
    date: '۱۴۰۳/۰۷/۲۵',
    time: '۰۹:۱۵',
    title: 'نگهداری برنامه‌ریزی شده',
    status: 'completed',
    description: 'نگهداری زیرساخت برای به‌روزرسانی امنیتی. مدت زمان: ۳۰ دقیقه.'
  },
  {
    date: '۱۴۰۳/۰۷/۲۰',
    time: '۱۶:۴۵',
    title: 'بهبود عملکرد',
    status: 'completed',
    description: 'به‌روزرسانی الگوریتم‌های تشخیص چهره برای افزایش دقت و سرعت.'
  }
];

const metrics = [
  { label: 'Uptime کلی', value: '۹۹.۹۸٪', trend: '+۰.۰۲٪', color: 'var(--success)' },
  { label: 'میانگین Response Time', value: '۱۵۶ms', trend: '-۱۲ms', color: 'var(--brand-azure)' },
  { label: 'درخواست‌های امروز', value: '۲.۴M', trend: '+۱۸٪', color: 'var(--brand-teal)' },
  { label: 'نرخ موفقیت', value: '۹۹.۹۲٪', trend: '+۰.۰۵٪', color: 'var(--success)' }
];

export function StatusSection() {
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
    }
  };

  const getStatusText = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return 'عملیاتی';
      case 'degraded':
        return 'کندی';
      case 'outage':
        return 'قطعی';
      case 'maintenance':
        return 'نگهداری';
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
    }
  };

  return (
    <section className="py-20 lg:py-32" id="status">
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
            <span className="text-sm text-[color:var(--success)]">تمامی سیستم‌ها عملیاتی</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
          >
            وضعیت <span className="text-brand-gradient">سیستم</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[color:var(--text-secondary)]"
          >
            پایش لحظه‌ای وضعیت سرویس‌ها و زیرساخت باربُد
          </motion.p>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)]"
            >
              <div className="text-sm text-[color:var(--text-secondary)] mb-2">{metric.label}</div>
              <div className="flex items-baseline gap-2 mb-1">
                <div className="text-2xl" style={{ color: metric.color }}>{metric.value}</div>
                <div className={`text-xs ${metric.trend.startsWith('+') ? 'text-[color:var(--success)]' : 'text-[color:var(--brand-azure)]'}`}>
                  {metric.trend}
                </div>
              </div>
              <div className="h-1 bg-[color:var(--surface-card)] rounded-full overflow-hidden">
                <div className="h-full w-4/5 rounded-full" style={{ backgroundColor: metric.color }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl mb-6">وضعیت سرویس‌ها</h3>
          <div className="space-y-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] hover:border-[color:var(--border-subtle)] transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <service.icon className="w-5 h-5 text-[color:var(--text-secondary)]" />
                    <span>{service.name}</span>
                  </div>

                  <div className="hidden md:flex items-center gap-6 text-sm text-[color:var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[color:var(--text-tertiary)]">Uptime:</span>
                      <span className="text-[color:var(--success)]">{service.uptime}٪</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[color:var(--text-tertiary)]">Response:</span>
                      <span dir="ltr">{service.responseTime}ms</span>
                    </div>
                  </div>

                  <div className={`flex items-center gap-2 ${getStatusColor(service.status)}`}>
                    {getStatusIcon(service.status)}
                    <span className="text-sm">{getStatusText(service.status)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Uptime Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl mb-6">آپتایم ۳۰ روز گذشته</h3>
          <div className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)]">
            <div className="flex items-end gap-1 h-32">
              {Array.from({ length: 30 }).map((_, i) => {
                const height = 85 + Math.random() * 15;
                return (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className={`flex-1 rounded-t ${
                      height >= 99 ? 'bg-[color:var(--success)]' : 'bg-[color:var(--warning)]'
                    } hover:opacity-80 transition-opacity cursor-pointer`}
                    title={`روز ${i + 1}: ${height.toFixed(2)}%`}
                  ></motion.div>
                );
              })}
            </div>
            <div className="flex justify-between mt-4 text-xs text-[color:var(--text-tertiary)]">
              <span>۳۰ روز پیش</span>
              <span>امروز</span>
            </div>
          </div>
        </motion.div>

        {/* Incident History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl mb-6">تاریخچه رویدادها</h3>
          <div className="space-y-4">
            {incidents.map((incident, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)]"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg">{incident.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${
                        incident.status === 'resolved' 
                          ? 'bg-[color:var(--success)] bg-opacity-10 text-[color:var(--success)]'
                          : 'bg-[color:var(--info)] bg-opacity-10 text-[color:var(--info)]'
                      }`}>
                        {incident.status === 'resolved' ? 'برطرف شده' : 'تکمیل شده'}
                      </span>
                    </div>
                    <p className="text-sm text-[color:var(--text-secondary)]">{incident.description}</p>
                  </div>
                  <div className="text-left text-sm text-[color:var(--text-tertiary)] whitespace-nowrap">
                    <div>{incident.date}</div>
                    <div>{incident.time}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subscribe to Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-[var(--radius-lg)] bg-[color:var(--surface-card)] border border-[color:var(--border-hairline)] text-center"
        >
          <h3 className="text-xl mb-3">به‌روزرسانی‌های وضعیت</h3>
          <p className="text-[color:var(--text-secondary)] mb-6">
            از آخرین تغییرات و رویدادهای سیستم مطلع شوید
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="flex-1 px-4 py-3 rounded-[var(--radius-md)] bg-[color:var(--surface-elevated)] border border-[color:var(--border-hairline)] focus:border-[color:var(--outline-focus)] outline-none transition-colors"
            />
            <button className="px-6 py-3 rounded-[var(--radius-md)] bg-brand-gradient text-[color:var(--text-inverse)] hover:opacity-90 transition-opacity whitespace-nowrap">
              اشتراک
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
