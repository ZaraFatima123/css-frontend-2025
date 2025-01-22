import { CalendarIcon, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

interface NoticeItemProps {
  title: string;
  description: string;
  date: Date;
  type: "result" | "holiday" | "general" | "announcement" | "timetable" | "assignment" | "exam";
}

const NoticeItem = ({ title, description, date, type }: NoticeItemProps) => {
  const getTypeStyles = () => {
    switch (type) {
      case "result":
        return "bg-primary/10 border-primary/20";
      case "holiday":
        return "bg-warning/10 border-warning/20";
      case "announcement":
        return "bg-secondary/10 border-secondary/20";
      case "general":
        return "bg-muted/10 border-muted/20";
      case "timetable":
        return "bg-accent/10 border-accent/20";
      case "assignment":
        return "bg-success/10 border-success/20";
      case "exam":
        return "bg-destructive/10 border-destructive/20";
      default:
        return "bg-muted/10 border-muted/20";
    }
  };

  return (
    <Card className={`mb-4 border-2 ${getTypeStyles()}`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-muted-foreground mb-1">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span className="text-sm">{format(date, "MMM dd, yyyy")}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{format(date, "hh:mm a")}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoticeItem;