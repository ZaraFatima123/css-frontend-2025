import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

interface StudentPortfolioProps {
  student: {
    id: string;
    name: string;
    image?: string;
    role: string;
    department: string;
    about: string;
    skills: string[];
    projects: Project[];
    achievements: string[];
    contact: {
      email: string;
      github?: string;
      linkedin?: string;
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

const StudentPortfolio = ({ student, isOpen, onClose }: StudentPortfolioProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Student Portfolio</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={student.image} alt={student.name} />
              <AvatarFallback>{student.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{student.name}</h2>
              <p className="text-muted-foreground">{student.role}</p>
              <p className="text-muted-foreground">{student.department}</p>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-muted-foreground">{student.about}</p>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {student.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            <div className="grid gap-4">
              {student.projects.map((project, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {student.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="space-y-1 text-muted-foreground">
              <p>Email: {student.contact.email}</p>
              {student.contact.github && (
                <p>GitHub: {student.contact.github}</p>
              )}
              {student.contact.linkedin && (
                <p>LinkedIn: {student.contact.linkedin}</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentPortfolio;