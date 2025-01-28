// File: src/components/services/PricingTable.tsx
'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals starting their digital marketing journey.',
    price: '99',
    period: 'per month',
    features: [
      'Basic social media strategy',
      'Content creation guidelines',
      'Monthly group coaching call',
      'Access to learning materials',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for businesses looking to scale their digital presence.',
    price: '199',
    period: 'per month',
    features: [
      'Advanced social media strategy',
      'Content calendar planning',
      'Weekly group coaching calls',
      'Priority email support',
      'Analytics dashboard access',
      'Campaign optimization',
      'Marketing automation setup',
    ],
    cta: 'Start Pro Plan',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations and agencies.',
    price: '499',
    period: 'per month',
    features: [
      'Custom marketing strategy',
      'Daily support & consulting',
      '1-on-1 coaching sessions',
      'Team training workshops',
      'Advanced analytics & reporting',
      'Brand strategy development',
      'Multi-channel campaign management',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function PricingTable() {
  return (
    <div>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-display font-bold text-text mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-text-light">
          Choose the plan that best fits your needs. All plans include access to our core features.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-background rounded-xl shadow-sm border ${
              plan.popular ? 'border-primary' : 'border-secondary/20'
            } overflow-hidden`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 transform">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                  Most Popular
                </span>
              </div>
            )}
            <div className="p-8">
              <h3 className="text-xl font-semibold text-text mb-2">{plan.name}</h3>
              <p className="text-text-light mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text">${plan.price}</span>
                <span className="text-text-light">/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-text-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'border border-secondary hover:border-primary text-text hover:text-primary'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}