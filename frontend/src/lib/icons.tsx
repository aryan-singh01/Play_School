import {
  Palette,
  Music,
  Activity,
  Trees,
  BookOpen,
  Compass,
  Blocks,
  Sparkles,
  ChefHat,
  School,
  Utensils,
  ShieldCheck,
  HeartPulse,
  HeartHandshake,
  Users,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  palette: Palette,
  music: Music,
  activity: Activity,
  trees: Trees,
  "book-open": BookOpen,
  compass: Compass,
  blocks: Blocks,
  sparkles: Sparkles,
  "chef-hat": ChefHat,
  school: School,
  utensils: Utensils,
  "shield-check": ShieldCheck,
  "heart-pulse": HeartPulse,
  "heart-handshake": HeartHandshake,
  users: Users,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
