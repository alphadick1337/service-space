import { Service, CATEGORY_ICONS } from "@/types/service";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  onBook: (service: Service) => void;
  index: number;
}

const ServiceCard = ({ service, onBook, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="group overflow-hidden border-border/60 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden aspect-[3/2]">
          <img
            src={service.imageUrl}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-card/90 text-card-foreground backdrop-blur-sm border-0 text-sm">
            {CATEGORY_ICONS[service.category]} {service.category}
          </Badge>
        </div>
        <CardContent className="p-5 space-y-3">
          <h3 className="font-serif text-lg leading-tight text-foreground">{service.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{service.description}</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              {service.rating}
              <span className="text-muted-foreground/70">({service.reviewCount})</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {service.area}
            </span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <span className="font-semibold text-lg text-foreground">
              {service.price.toLocaleString("sv-SE")} kr
            </span>
            <Button
              size="sm"
              onClick={() => onBook(service)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Boka nu
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
