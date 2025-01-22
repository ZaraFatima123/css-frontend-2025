import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NoticeItem from "@/components/NoticeItem";

const Classroom = () => {
  const [currentTab, setCurrentTab] = useState("timetable");

  // Sample data - in a real app, this would come from an API
  const items = [
    {
      id: 1,
      title: "Data Structures Lecture",
      description: "Topic: Binary Trees and their implementations",
      date: new Date("2024-04-15T10:00:00"),
      type: "timetable" as const,
    },
    {
      id: 2,
      title: "Algorithm Assignment Due",
      description: "Complete the dynamic programming problems set",
      date: new Date("2024-04-20T23:59:00"),
      type: "assignment" as const,
    },
    {
      id: 3,
      title: "Mid-term Examination",
      description: "Covers all topics from weeks 1-6",
      date: new Date("2024-05-01T09:00:00"),
      type: "exam" as const,
    },
    {
      id: 4,
      title: "System Design Workshop",
      description: "Practical session on designing scalable systems",
      date: new Date("2024-04-18T14:00:00"),
      type: "timetable" as const,
    },
  ].sort((a, b) => a.date.getTime() - b.date.getTime());

  const filteredItems = items.filter(item => item.type === currentTab);

  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Classroom</h1>
        <p className="text-muted-foreground mb-8">Access your virtual classroom and learning resources.</p>

        <Tabs defaultValue="timetable" className="w-full" onValueChange={setCurrentTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
            <TabsTrigger value="assignment">Assignments</TabsTrigger>
            <TabsTrigger value="exam">Exams</TabsTrigger>
          </TabsList>

          <TabsContent value="timetable" className="mt-0">
            {filteredItems.map((item) => (
              <NoticeItem
                key={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                type={item.type}
              />
            ))}
          </TabsContent>

          <TabsContent value="assignment" className="mt-0">
            {filteredItems.map((item) => (
              <NoticeItem
                key={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                type={item.type}
              />
            ))}
          </TabsContent>

          <TabsContent value="exam" className="mt-0">
            {filteredItems.map((item) => (
              <NoticeItem
                key={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                type={item.type}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Classroom;