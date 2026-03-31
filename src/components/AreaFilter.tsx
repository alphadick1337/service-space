import { AREAS } from "@/types/service";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface AreaFilterProps {
  selected: string | null;
  onSelect: (area: string | null) => void;
}

const AreaFilter = ({ selected, onSelect }: AreaFilterProps) => {
  return (
    <Select
      value={selected ?? "all"}
      onValueChange={(v) => onSelect(v === "all" ? null : v)}
    >
      <SelectTrigger className="w-[200px] bg-card">
        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
        <SelectValue placeholder="Välj område" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Alla områden</SelectItem>
        {AREAS.map((area) => (
          <SelectItem key={area} value={area}>
            {area}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default AreaFilter;
