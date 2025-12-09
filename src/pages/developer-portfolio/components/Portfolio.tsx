
import React, { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Plateforme E-commerce',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20screen%2C%20clean%20product%20showcase%2C%20shopping%20cart%20interface%2C%20professional%20online%20store%20design%2C%20contemporary%20web%20application%2C%20minimalist%20layout%20with%20product%20images&width=800&height=600&seq=project-ecommerce&orientation=landscape',
      description: 'Boutique en ligne complète avec paiement sécurisé et gestion de stock',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Application SaaS',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Modern%20SaaS%20dashboard%20interface%20on%20computer%20screen%2C%20analytics%20charts%20and%20graphs%2C%20professional%20business%20application%2C%20clean%20data%20visualization%2C%20contemporary%20web%20app%20design%2C%20minimalist%20user%20interface&width=800&height=600&seq=project-saas&orientation=landscape',
      description: 'Dashboard analytique pour la gestion de projets et équipes',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Portfolio Créatif',
      category: 'design',
      image: 'https://readdy.ai/api/search-image?query=Creative%20portfolio%20website%20design%20on%20screen%2C%20artistic%20layout%20with%20image%20gallery%2C%20modern%20web%20design%20showcase%2C%20contemporary%20digital%20portfolio%2C%20minimalist%20creative%20presentation%2C%20professional%20design%20work%20display&width=800&height=600&seq=project-portfolio&orientation=landscape',
      description: 'Site portfolio interactif pour artiste avec galerie dynamique',
      tags: ['React', 'Framer Motion', 'Figma', 'Design System'],
      link: '#'
    },
    {
      title: 'Application Mobile',
      category: 'mobile',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20interface%20design%20on%20smartphone%20screen%2C%20modern%20application%20UI%2C%20clean%20mobile%20user%20experience%2C%20contemporary%20app%20design%2C%20professional%20mobile%20interface%2C%20minimalist%20app%20layout&width=800&height=600&seq=project-mobile&orientation=landscape',
      description: 'App de fitness avec suivi personnalisé et coaching',
      tags: ['React Native', 'Firebase', 'Redux', 'UI/UX'],
      link: '#'
    },
    {
      title: 'Site Corporate',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Professional%20corporate%20website%20on%20laptop%20screen%2C%20modern%20business%20website%20design%2C%20clean%20company%20homepage%2C%20contemporary%20web%20presence%2C%20minimalist%20corporate%20layout%2C%20professional%20business%20site&width=800&height=600&seq=project-corporate&orientation=landscape',
      description: 'Site vitrine multilingue pour entreprise internationale',
      tags: ['Next.js', 'i18n', 'CMS', 'SEO'],
      link: '#'
    },
    {
      title: 'Branding & Identité',
      category: 'design',
      image: 'https://readdy.ai/api/search-image?query=Brand%20identity%20design%20showcase%2C%20logo%20designs%20and%20brand%20guidelines%2C%20modern%20graphic%20design%20presentation%2C%20contemporary%20branding%20materials%2C%20professional%20identity%20system%2C%20minimalist%20design%20elements&width=800&height=600&seq=project-branding&orientation=landscape',
      description: 'Identité visuelle complète pour startup tech',
      tags: ['Illustrator', 'Photoshop', 'Brand Design', 'Logo'],
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Mes <span className="text-blue-500">Réalisations</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Découvrez une sélection de projets qui illustrent mon expertise en développement et design
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                  activeFilter === filter.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link}
                    className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-50 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
