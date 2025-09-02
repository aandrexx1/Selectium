import restaurantImage from '@/assets/restaurant-elegant.jpg';
import hotelSuiteImage from '@/assets/hotel-suite.jpg';
import gourmetKitchen from '@/assets/gourmet-kitchen.jpg';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Villa Serenissima",
      category: "Boutique Hotel",
      description: "Un rifugio di eleganza sulle colline toscane dove tradizione e innovazione si fondono in un'esperienza digitale senza tempo. Il sito web cattura l'essenza dell'ospitalità italiana più raffinata.",
      image: hotelSuiteImage,
      tags: ["Luxury Hospitality", "Responsive Design", "Booking Integration"]
    },
    {
      title: "Osteria del Borgo",
      category: "Fine Dining Restaurant",
      description: "La passione culinaria di tre generazioni tradotta in un viaggio digitale che celebra l'arte gastronomica. Ogni pixel racconta la storia di ingredienti selezionati e tradizioni preservate.",
      image: restaurantImage,
      tags: ["Culinary Excellence", "Menu Digitale", "Reservation System"]
    },
    {
      title: "Chef's Table Experience",
      category: "Michelin Star Restaurant",
      description: "L'eccellenza culinaria stellata si riflette in un'esperienza digitale immersiva. Il sito web è un invito esclusivo a vivere l'arte della gastronomia al suo livello più elevato.",
      image: gourmetKitchen,
      tags: ["Michelin Experience", "Exclusive Booking", "Virtual Tour"]
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-elegant">
        <div className="text-center mb-20 slide-up">
          <h2 className="text-display mb-8 text-primary">
            Progetti d'eccellenza
          </h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Ogni progetto è una storia di successo, un viaggio verso l'eccellenza 
            digitale che trasforma visioni in realtà straordinarie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group card-elegant border-0 overflow-hidden hover:scale-105 transition-all duration-700 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardContent className="p-8">
                <div className="mb-4">
                  <p className="text-sm font-medium text-accent tracking-wider uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-heading text-primary mb-4">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-elegant text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block">
            <p className="text-elegant text-muted-foreground mb-6">
              Vuoi vedere il tuo progetto tra i nostri capolavori?
            </p>
            <Button 
              variant="outline" 
              className="btn-ghost hover:bg-primary hover:text-primary-foreground px-10 py-4"
            >
              Iniziamo insieme il tuo viaggio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;