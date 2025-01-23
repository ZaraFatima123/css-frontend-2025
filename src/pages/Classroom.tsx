import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays } from "date-fns";
import NoticeItem from "@/components/NoticeItem";

const Classroom = () => {
  const [currentTab, setCurrentTab] = useState("timetable");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const periods = [
    { time: "09:00 - 10:00", label: "1st Period" },
    { time: "10:00 - 11:00", label: "2nd Period" },
    { time: "11:15 - 12:15", label: "3rd Period" },
    { time: "12:15 - 01:15", label: "4th Period" },
    { time: "02:00 - 03:00", label: "5th Period" },
    { time: "03:00 - 04:00", label: "6th Period" },
  ];

  type WeekDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  
  const timetable: Record<WeekDay, Array<{ subject: string; room: string; teacher: string }>> = {
    Monday: [
      { subject: "Data Structures", room: "Lab 1", teacher: "Dr. Smith" },
      { subject: "Algorithms", room: "Room 201", teacher: "Prof. Johnson" },
      { subject: "Database", room: "Lab 2", teacher: "Dr. Williams" },
      { subject: "System Design", room: "Room 102", teacher: "Prof. Brown" },
      { subject: "Networks", room: "Lab 3", teacher: "Dr. Davis" },
      { subject: "OS", room: "Room 301", teacher: "Prof. Miller" },
    ],
    Tuesday: [
      { subject: "Algorithms", room: "Room 201", teacher: "Prof. Johnson" },
      { subject: "System Design", room: "Room 102", teacher: "Prof. Brown" },
      { subject: "Data Structures", room: "Lab 1", teacher: "Dr. Smith" },
      { subject: "Networks", room: "Lab 3", teacher: "Dr. Davis" },
      { subject: "Database", room: "Lab 2", teacher: "Dr. Williams" },
      { subject: "OS", room: "Room 301", teacher: "Prof. Miller" },
    ],
    Wednesday: [
      { subject: "Database", room: "Lab 2", teacher: "Dr. Williams" },
      { subject: "OS", room: "Room 301", teacher: "Prof. Miller" },
      { subject: "Networks", room: "Lab 3", teacher: "Dr. Davis" },
      { subject: "Data Structures", room: "Lab 1", teacher: "Dr. Smith" },
      { subject: "Algorithms", room: "Room 201", teacher: "Prof. Johnson" },
      { subject: "System Design", room: "Room 102", teacher: "Prof. Brown" },
    ],
    Thursday: [
      { subject: "System Design", room: "Room 102", teacher: "Prof. Brown" },
      { subject: "Networks", room: "Lab 3", teacher: "Dr. Davis" },
      { subject: "OS", room: "Room 301", teacher: "Prof. Miller" },
      { subject: "Algorithms", room: "Room 201", teacher: "Prof. Johnson" },
      { subject: "Data Structures", room: "Lab 1", teacher: "Dr. Smith" },
      { subject: "Database", room: "Lab 2", teacher: "Dr. Williams" },
    ],
    Friday: [
      { subject: "OS", room: "Room 301", teacher: "Prof. Miller" },
      { subject: "Data Structures", room: "Lab 1", teacher: "Dr. Smith" },
      { subject: "System Design", room: "Room 102", teacher: "Prof. Brown" },
      { subject: "Database", room: "Lab 2", teacher: "Dr. Williams" },
      { subject: "Algorithms", room: "Room 201", teacher: "Prof. Johnson" },
      { subject: "Networks", room: "Lab 3", teacher: "Dr. Davis" },
    ],
    Saturday: [],
    Sunday: [],
  };

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
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Classroom</h1>
        <p className="text-muted-foreground mb-8">Access your virtual classroom and learning resources.</p>

        <Tabs defaultValue={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
            <TabsTrigger value="assignment">Assignments</TabsTrigger>
            <TabsTrigger value="exam">Exams</TabsTrigger>
          </TabsList>

          <TabsContent value="timetable" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="outline"
                onClick={() => setSelectedDate(addDays(selectedDate, -1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-semibold">
                {format(selectedDate, 'EEEE, MMMM do')}
              </h2>
              <Button
                variant="outline"
                onClick={() => setSelectedDate(addDays(selectedDate, 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Room</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {periods.map((period, index) => (
                  <TableRow key={period.time}>
                    <TableCell>{period.time}</TableCell>
                    <TableCell>{period.label}</TableCell>
                    <TableCell>
                      {timetable[format(selectedDate, 'EEEE') as WeekDay]?.[index]?.subject || '-'}
                    </TableCell>
                    <TableCell>
                      {timetable[format(selectedDate, 'EEEE') as WeekDay]?.[index]?.room || '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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