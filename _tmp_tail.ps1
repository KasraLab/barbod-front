              className="preserve-3d"
            >
              <motion.div
                whileHover={{ 
                  scale: plan.highlighted ? 1.05 : 1.03,
                  rotateY: 5,
                  z: plan.highlighted ? 60 : 40
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative h-full preserve-3d group ${plan.highlighted ? 'lg:-mt-8' : ''}`}
              >
                {/* Glow Effect */}
                <div 
                  className={`absolute -inset-2 bg-gradient-to-br ${plan.gradient} rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                  style={{ transform: 'translateZ(-20px)' }}
                ></div>

                {/* Popular Badge */}
                {plan.highlighted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-gradient text-[color:var(--text-inverse)] text-sm whitespace-nowrap z-20"
                    style={{ transform: 'translateX(-50%) translateZ(30px)' }}
                  >
                    محبوب‌ترین
                  </motion.div>
                )}

                {/* Card */}
                <div className={`relative h-full p-8 rounded-[var(--radius-lg)] border transition-all duration-500 ${
                  plan.highlighted 
                    ? 'bg-[color:var(--surface-card)] border-[color:var(--brand-azure)] shadow-[var(--shadow-xl)]' 
                    : 'bg-[color:var(--surface-elevated)] border-[color:var(--border-hairline)] hover:border-[color:var(--brand-azure)]'
                }`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 rounded-[var(--radius-lg)] overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl" style={{ backgroundColor: plan.color }}></div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={hoveredIndex === index ? {
                        rotateY: [0, 360],
                      } : {}}
                      transition={{ duration: 1 }}
                      className="preserve-3d"
                    >
                      <div className="relative w-14 h-14">
                        <div 
                          className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-[var(--radius-md)] opacity-20`}
                          style={{ transform: 'translateZ(10px)' }}
                        ></div>
                        <div 
                          className="absolute inset-0 bg-[color:var(--surface-card)] rounded-[var(--radius-md)] flex items-center justify-center"
                        >
                          <plan.icon className="w-7 h-7" style={{ color: plan.color }} />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl mb-2">{plan.name}</h3>
                  <p className="text-sm text-[color:var(--text-secondary)] mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-brand-gradient">{plan.price}</span>
                      {plan.period && (
                        <span className="text-[color:var(--text-secondary)]">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: plan.color, opacity: 0.2 }}>
                            <Check className="w-3 h-3" style={{ color: plan.color }} />
                          </div>
                        </div>
                        <span className="text-sm text-[color:var(--text-secondary)]">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.highlighted ? 'primary' : 'secondary'} 
                    fullWidth 
                    size="lg"
                    className={plan.highlighted ? 'shadow-[var(--shadow-lg)]' : ''}
                  >
                    {plan.price === 'سفارشی' ? 'تماس با فروش' : 'شروع کنید'}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[color:var(--text-secondary)] mb-4">
            تمامی پلن‌ها شامل ۱۴ روز ضمانت بازگشت وجه می‌شوند
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[color:var(--text-tertiary)]">
            <span>✓ بدون نیاز به کارت اعتباری</span>
            <span>✓ لغو در هر زمان</span>
            <span>✓ پشتیبانی رایگان</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
