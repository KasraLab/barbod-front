import { Scan, ShieldCheck, FileCheck, Mic, Lock, Code2 } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const features = [
  {
    icon: Scan,
    titleKey: 'feature.face.title',
    descKey: 'feature.face.desc',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ShieldCheck,
    titleKey: 'feature.liveness.title',
    descKey: 'feature.liveness.desc',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: FileCheck,
    titleKey: 'feature.document.title',
    descKey: 'feature.document.desc',
    gradient: 'from-teal-500 to-blue-500',
  },
  {
    icon: Mic,
    titleKey: 'feature.voice.title',
    descKey: 'feature.voice.desc',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Lock,
    titleKey: 'feature.security.title',
    descKey: 'feature.security.desc',
    gradient: 'from-indigo-600 to-blue-500',
  },
  {
    icon: Code2,
    titleKey: 'feature.api.title',
    descKey: 'feature.api.desc',
    gradient: 'from-cyan-600 to-blue-600',
  },
];

export function Features() {
  const { t, dir } = useLanguage();

  return (
    <section id="solutions" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} max-w-3xl mb-16`}>
          <h2 className="text-3xl lg:text-5xl mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-surface-elevated border border-border-hairline rounded-xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className={`relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl mb-2">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className={`absolute ${dir === 'rtl' ? 'left-0' : 'right-0'} bottom-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 clip-angle`}></div>
              </div>
            );
          })}
        </div>

        {/* Trust Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 lg:p-12 bg-surface-elevated border border-border-hairline rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 gradient-brand opacity-5"></div>
          
          <div className={`relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="text-3xl lg:text-4xl gradient-brand-text mono mb-2">99.4%</div>
            <div className="text-sm text-text-secondary">{t('trust.accuracy')}</div>
          </div>
          
          <div className={`relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="text-3xl lg:text-4xl gradient-brand-text mono mb-2"><500ms</div>
            <div className="text-sm text-text-secondary">{t('trust.response')}</div>
          </div>
          
          <div className={`relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="text-3xl lg:text-4xl gradient-brand-text mono mb-2">99.9%</div>
            <div className="text-sm text-text-secondary">{t('trust.uptime')}</div>
          </div>
          
          <div className={`relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className="text-3xl lg:text-4xl gradient-brand-text mono mb-2">2,500+</div>
            <div className="text-sm text-text-secondary">{t('trust.companies')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
