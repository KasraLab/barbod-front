'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { useEffect, useState } from 'react';

export function Hero3D() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[color:var(--bg-base)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:var(--brand-cyan)] rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[color:var(--brand-indigo)] rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[color:var(--brand-azure)] rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        transform: 'perspective(1000px) rotateX(60deg)',
        transformOrigin: 'center top'
      }}></div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Card 1 */}
        <motion.div
          style={{ y: y1, rotateX: mousePosition.y, rotateY: mousePosition.x }}
          className="absolute top-1/4 left-[10%] w-64 h-80 preserve-3d"
        >
          <div className="relative w-full h-full preserve-3d animate-float">
            <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-br from-[color:var(--brand-cyan)] to-[color:var(--brand-azure)] opacity-20 blur-xl"></div>
            <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--brand-azure)] backdrop-blur-xl angular-cut" style={{
              transform: 'translateZ(20px)',
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
            }}>
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full bg-brand-gradient opacity-50"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-[color:var(--brand-azure)] opacity-30 rounded"></div>
                  <div className="h-3 bg-[color:var(--brand-azure)] opacity-20 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Card 2 */}
        <motion.div
          style={{ y: y2, rotateX: mousePosition.y * -1, rotateY: mousePosition.x * -1 }}
          className="absolute top-1/3 right-[10%] w-72 h-72 preserve-3d"
        >
          <div className="relative w-full h-full preserve-3d animate-float" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-br from-[color:var(--brand-indigo)] to-[color:var(--brand-teal)] opacity-20 blur-xl"></div>
            <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-[color:var(--surface-elevated)] border border-[color:var(--brand-indigo)] backdrop-blur-xl" style={{
              transform: 'translateZ(30px) rotateY(-15deg)',
              boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.5)'
            }}>
              <div className="p-6 h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-brand-gradient opacity-40 animate-ping-slow"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3D Cubes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute preserve-3d"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              width: '80px',
              height: '80px'
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <div className="relative w-full h-full preserve-3d">
              {/* Front */}
              <div className="absolute inset-0 bg-brand-gradient opacity-10 border border-[color:var(--brand-azure)]" style={{ transform: 'translateZ(40px)' }}></div>
              {/* Back */}
              <div className="absolute inset-0 bg-brand-gradient opacity-10 border border-[color:var(--brand-indigo)]" style={{ transform: 'translateZ(-40px) rotateY(180deg)' }}></div>
              {/* Right */}
              <div className="absolute inset-0 bg-brand-gradient opacity-10 border border-[color:var(--brand-teal)]" style={{ transform: 'rotateY(90deg) translateZ(40px)' }}></div>
              {/* Left */}
              <div className="absolute inset-0 bg-brand-gradient opacity-10 border border-[color:var(--brand-cyan)]" style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}></div>
              {/* Top */}
              <div className="absolute inset-0 bg-brand-gradient opacity-10 border border-[color:var(--brand-azure)]" style={{ transform: 'rotateX(90deg) translateZ(40px)' }}></div>
              {/* Bottom */}
              <div className="absolute inset-0 bg-brand-gradient opacity-10 border border-[color:var(--brand-indigo)]" style={{ transform: 'rotateX(-90deg) translateZ(40px)' }}></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--surface-card)] border border-[color:var(--border-subtle)] mb-8 backdrop-blur-xl"
        >
          <Sparkles className="w-4 h-4 text-[color:var(--brand-azure)]" />
          <span className="text-sm">سیستم احراز هویت هوشمند</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight"
        >
          احراز هویت دیجیتال
          <br />
          <span className="text-brand-gradient">در عرض ثانیه‌ها</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto mb-10"
        >
          با باربُد، تشخیص چهره، تست زنده‌بودن و OCR را در یک پلتفرم قدرتمند تجربه کنید.
          <br />
          امن، سریع و دقیق - آماده برای مقیاس‌پذیری نامحدود
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="group">
            شروع رایگان
            <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
          </Button>
          <Button variant="secondary" size="lg">
            مشاهده دمو
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
        >
          {[
            { value: '۹۹.۹٪', label: 'دقت' },
            { value: '<۳۰s', label: 'سرعت' },
            { value: '+۵۰۰', label: 'مشتری' }
          ].map((stat, index) => (
            <div key={index} className="preserve-3d group cursor-pointer">
              <div className="relative preserve-3d transition-transform duration-500 group-hover:scale-110 group-hover:[transform:rotateY(10deg)]">
                <div className="text-2xl lg:text-3xl text-brand-gradient mb-1" dangerouslySetInnerHTML={{ __html: stat.value }}></div>
                <div className="text-sm text-[color:var(--text-secondary)]">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[color:var(--brand-azure)] flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-azure)]"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}