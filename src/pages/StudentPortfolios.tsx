import { useState } from "react";
import StudentCard from "@/components/StudentCard";
import StudentPortfolio from "@/components/StudentPortfolio";

// Mock data - replace with actual data from your backend
const STUDENTS = [
  {
    id: "1",
    name: "John Doe",
    role: "Full Stack Developer",
    department: "Computer Science",
    image: "/placeholder.svg",
    about: "Passionate developer with a keen interest in web technologies and AI.",
    skills: ["React", "Node.js", "Python", "TypeScript", "AWS"],
    projects: [
      {
        title: "E-commerce Platform",
        description: "Built a full-stack e-commerce platform with React and Node.js",
        technologies: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "AI Chat Bot",
        description: "Developed an AI-powered chatbot using Python and TensorFlow",
        technologies: ["Python", "TensorFlow", "NLP"],
      },
    ],
    achievements: [
      "First place in University Hackathon 2023",
      "Published paper on ML algorithms",
      "Open source contributor",
    ],
    contact: {
      email: "john.doe@example.com",
      github: "github.com/johndoe",
      linkedin: "linkedin.com/in/johndoe",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "UI/UX Designer",
    department: "Digital Arts",
    image: "/placeholder.svg",
    about: "Creative designer focused on creating intuitive and beautiful user experiences.",
    skills: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript", "UI Design"],
    projects: [
      {
        title: "Travel App Design",
        description: "Designed a modern travel planning application",
        technologies: ["Figma", "Prototyping", "User Research"],
      },
    ],
    achievements: [
      "Best Design Award 2023",
      "UX Design Certification",
    ],
    contact: {
      email: "jane.smith@example.com",
      linkedin: "linkedin.com/in/janesmith",
    },
  },
];

const Portfolios = () => {
  const [selectedStudent, setSelectedStudent] = useState<typeof STUDENTS[0] | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Student Portfolios</h1>
        <p className="text-muted-foreground mb-8">Browse through our talented students' work and achievements.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDENTS.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onClick={() => setSelectedStudent(student)}
            />
          ))}
        </div>

        {selectedStudent && (
          <StudentPortfolio
            student={selectedStudent}
            isOpen={!!selectedStudent}
            onClose={() => setSelectedStudent(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Portfolios;