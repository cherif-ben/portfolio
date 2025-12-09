
import React from 'react';

export default function Services() {
  const services = [
    {
      icon: 'ri-window-line',
      title: 'Développement Web',
      description: 'Création d\'applications web modernes et performantes avec React, Next.js, et les dernières technologies front-end. Architecture scalable et code maintenable.',
      color: 'blue'
    },
    {
      icon: 'ri-server-line',
      title: 'Backend & API',
      description: 'Développement d\'APIs RESTful et GraphQL robustes avec Node.js, Express, et bases de données SQL/NoSQL. Sécurité et performance optimales.',
      color: 'green'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Design UI/UX',
      description: 'Conception d\'interfaces utilisateur intuitives et esthétiques. Prototypage interactif, design system, et expérience utilisateur optimisée.',
      color: 'purple'
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'E-commerce',
      description: 'Solutions e-commerce complètes avec intégration de paiement, gestion de catalogue, et optimisation des conversions. Shopify, WooCommerce, solutions custom.',
      color: 'orange'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Optimisation & SEO',
      description: 'Amélioration des performances web, optimisation SEO technique, et stratégies de référencement pour maximiser votre visibilité en ligne.',
      color: 'red'
    },
    {
      icon: 'ri-tools-line',
      title: 'Maintenance & Support',
      description: 'Support technique continu, mises à jour régulières, corrections de bugs, et évolutions fonctionnelles pour garantir la pérennité de vos projets.',
      color: 'teal'
    }
  ];

  const colorClasses: Record<string, { bg: string; icon: string; hover: string }> = {
    blue: { bg: 'bg-blue-500/10', icon: 'text-blue-500', hover: 'hover:border-blue-500' },
    green: { bg: 'bg-green-500/10', icon: 'text-green-500', hover: 'hover:border-green-500' },
    purple: { bg: 'bg-purple-500/10', icon: 'text-purple-500', hover: 'hover:border-purple-500' },
    orange: { bg: 'bg-orange-500/10', icon: 'text-orange-500', hover: 'hover:border-orange-500' },
    red: { bg: 'bg-red-500/10', icon: 'text-red-500', hover: 'hover:border-red-500' },
    teal: { bg: 'bg-teal-500/10', icon: 'text-teal-500', hover: 'hover:border-teal-500' }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Mes <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Des solutions complètes pour concrétiser vos projets digitaux, du concept initial au produit final
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <div 
                key={index}
                className={`bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-100 ${colors.hover} transition-all duration-300 hover:shadow-xl cursor-pointer group`}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} ${colors.icon} text-2xl sm:text-3xl`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
