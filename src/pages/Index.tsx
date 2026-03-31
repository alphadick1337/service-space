import { useState, useMemo } from "react";
import { Service, ServiceCategory } from "@/types/service";
import { mockServices } from "@/data/mockServices";
import ServiceCard from "@/components/ServiceCard";
import CategoryFilter from "@/components/CategoryFilter";
import AreaFilter from "@/components/AreaFilter";
import BookingDialog from "@/components/BookingDialog";
import CreateServiceDialog from "@/components/CreateServiceDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-illustration.jpg";

const Index = () => {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [bookingService, setBookingService] = useState<Service | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  const filtered = useMemo(() => {
    return services.filter((s) => {
      if (selectedCategory && s.category !== selectedCategory) return false;
      if (selectedArea && s.area !== selectedArea) return false;
      if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.description.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [services, selectedCategory, selectedArea, search]);

  const handleBook = (service: Service) => {
    setBookingService(service);
    setBookingOpen(true);
  };

  const handleCreated = (service: Service) => {
    setServices((prev) => [service, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-2xl font-serif text-foreground">Tjänstbörsen</h1>
          <Button onClick={() => setCreateOpen(true)} className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="w-4 h-4 mr-2" /> Lägg upp tjänst
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Tjänstemarknadsplats" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
        </div>
        <div className="relative container py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-primary-foreground">
              Hitta rätt tjänst,<br />nära dig
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Boka lokala tjänster eller erbjud dina egna. Från städning till IT-hjälp – allt på ett ställe.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Sök tjänster..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-12 text-base bg-card border-0 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Content */}
      <main className="container py-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          <AreaFilter selected={selectedArea} onSelect={setSelectedArea} />
        </div>

        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "tjänst" : "tjänster"} hittade
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20 space-y-3">
            <p className="text-2xl font-serif text-foreground">Inga tjänster hittade</p>
            <p className="text-muted-foreground">Prova att ändra dina filter eller sökord</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} onBook={handleBook} index={i} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-secondary/30">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          © 2026 Tjänstbörsen. Alla rättigheter förbehållna.
        </div>
      </footer>

      <BookingDialog service={bookingService} open={bookingOpen} onOpenChange={setBookingOpen} />
      <CreateServiceDialog open={createOpen} onOpenChange={setCreateOpen} onCreated={handleCreated} />
    </div>
  );
};

export default Index;
