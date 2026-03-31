import { Service } from "@/types/service";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Star, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface BookingDialogProps {
  service: Service | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ service, open, onOpenChange }: BookingDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !date) {
      toast.error("Fyll i alla obligatoriska fält");
      return;
    }
    toast.success(`Bokning skickad till ${service.provider}!`, {
      description: `${service.title} – ${date}`,
    });
    setName("");
    setEmail("");
    setDate("");
    setMessage("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">Boka tjänst</DialogTitle>
          <DialogDescription>Skicka en bokningsförfrågan</DialogDescription>
        </DialogHeader>

        <div className="rounded-lg bg-secondary/50 p-4 space-y-1 text-sm">
          <p className="font-semibold text-foreground">{service.title}</p>
          <p className="flex items-center gap-1 text-muted-foreground">
            <User className="w-3.5 h-3.5" /> {service.provider}
          </p>
          <p className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" /> {service.area}
          </p>
          <p className="flex items-center gap-1 text-muted-foreground">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" /> {service.rating} ({service.reviewCount} omdömen)
          </p>
          <p className="font-semibold text-lg text-foreground pt-1">
            {service.price.toLocaleString("sv-SE")} kr
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="booking-name">Namn *</Label>
            <Input id="booking-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ditt namn" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="booking-email">E-post *</Label>
            <Input id="booking-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="din@email.se" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="booking-date">Önskat datum *</Label>
            <Input id="booking-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="booking-msg">Meddelande</Label>
            <Textarea id="booking-msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Beskriv vad du behöver hjälp med..." rows={3} />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Calendar className="w-4 h-4 mr-2" /> Skicka bokningsförfrågan
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
