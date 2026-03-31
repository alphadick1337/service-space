import { ServiceCategory, CATEGORIES, CATEGORY_ICONS } from "@/types/service";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CategoryFilterProps {
  selected: ServiceCategory | null;
  onSelect: (cat: ServiceCategory | null) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2 pb-2">
        <Button
          variant={selected === null ? "default" : "outline"}
          size="sm"
          onClick={() => onSelect(null)}
          className={selected === null ? "bg-primary text-primary-foreground" : ""}
        >
          Alla
        </Button>
        {CATEGORIES.map((cat) => (
          <Button
            key={cat}
            variant={selected === cat ? "default" : "outline"}
            size="sm"
            onClick={() => onSelect(cat)}
            className={`whitespace-nowrap ${selected === cat ? "bg-primary text-primary-foreground" : ""}`}
          >
            {CATEGORY_ICONS[cat]} {cat}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CategoryFilter;
