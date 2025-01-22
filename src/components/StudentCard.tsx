import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface StudentCardProps {
  student: {
    id: string;
    name: string;
    image?: string;
    role: string;
    department: string;
  };
  onClick: () => void;
}

const StudentCard = ({ student, onClick }: StudentCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <CardHeader className="flex items-center space-y-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={student.image} alt={student.name} />
          <AvatarFallback>{student.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-lg">{student.name}</h3>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground">{student.role}</p>
        <p className="text-sm text-muted-foreground">{student.department}</p>
        <Button variant="outline" className="mt-4" onClick={onClick}>
          View Portfolio
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudentCard;