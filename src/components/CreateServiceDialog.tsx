import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CATEGORIES, AREAS, ServiceCategory, Service } from "@/types/service";
import { useState } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";

interface CreateServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated: (service: Service) => void;
}

const CreateServiceDialog = ({ open, onOpenChange, onCreated }: CreateServiceDialogProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<ServiceCategory | "">("");
  const [area, setArea] = useState("");
  const [provider, setProvider] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !price || !category || !area || !provider.trim()) {
      toast.error("Fyll i alla fält");
      return;
    }

    const newService: Service = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      price: Number(price),
      category: category as ServiceCategory,
      area,
      provider: provider.trim(),
      imageUrl: `https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop`,
      rating: 0,
      reviewCount: 0,
    };

    onCreated(newService);
    toast.success("Tjänst skapad!", { description: title });
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setArea("");
    setProvider("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">Lägg upp en tjänst</DialogTitle>
          <DialogDescription>Fyll i detaljerna för din tjänst</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="svc-title">Titel *</Label>
            <Input id="svc-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="T.ex. Hemstädning – grundlig" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="svc-desc">Beskrivning *</Label>
            <Textarea id="svc-desc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Beskriv din tjänst..." rows={3} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="svc-price">Pris (kr) *</Label>
              <Input id="svc-price" type="number" min="0" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="500" />
            </div>
            <div className="space-y-2">
              <Label>Kategori *</Label>
              <Select value={category} onValueChange={(v) => setCategory(v as ServiceCategory)}>
                <SelectTrigger><SelectValue placeholder="Välj..." /></SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Område *</Label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger><SelectValue placeholder="Välj..." /></SelectTrigger>
                <SelectContent>
                  {AREAS.map((a) => (
                    <SelectItem key={a} value={a}>{a}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="svc-provider">Ditt namn *</Label>
              <Input id="svc-provider" value={provider} onChange={(e) => setProvider(e.target.value)} placeholder="Namn / Företag" />
            </div>
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="w-4 h-4 mr-2" /> Publicera tjänst
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateServiceDialog;
