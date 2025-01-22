import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NoticeItem from "@/components/NoticeItem";

const Notices = () => {
  const [currentTab, setCurrentTab] = useState("all");

  // Sample data - in a real app, this would come from an API
  const notices = [
    {
      id: 1,
      title: "End Semester Results Declared",
      description: "Results for Fall 2023 semester are now available",
      date: new Date("2024-04-15T10:00:00"),
      type: "result" as const,
    },
    {
      id: 2,
      title: "Summer Break Announcement",
      description: "Summer break will commence from May 15th to June 30th",
      date: new Date("2024-04-20T23:59:00"),
      type: "holiday" as const,
    },
    {
      id: 3,
      title: "Campus Maintenance Notice",
      description: "Library will be closed for renovation next week",
      date: new Date("2024-05-01T09:00:00"),
      type: "general" as const,
    },
    {
      id: 4,
      title: "Scholarship Applications Open",
      description: "Merit scholarship applications for next semester are now open",
      date: new Date("2024-04-18T14:00:00"),
      type: "announcement" as const,
    },
  ].sort((a, b) => a.date.getTime() - b.date.getTime());

  const filteredNotices = currentTab === "all" 
    ? notices 
    : notices.filter(notice => notice.type === currentTab);

  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Notices</h1>
        <p className="text-muted-foreground mb-8">Stay updated with the latest announcements and notices.</p>

        <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Notices</TabsTrigger>
            <TabsTrigger value="result">Results</TabsTrigger>
            <TabsTrigger value="holiday">Holidays</TabsTrigger>
            <TabsTrigger value="announcement">Announcements</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            {filteredNotices.map((notice) => (
              <NoticeItem
                key={notice.id}
                title={notice.title}
                description={notice.description}
                date={notice.date}
                type={notice.type}
              />
            ))}
          </TabsContent>

          <TabsContent value="result" className="mt-0">
            {filteredNotices.map((notice) => (
              <NoticeItem
                key={notice.id}
                title={notice.title}
                description={notice.description}
                date={notice.date}
                type={notice.type}
              />
            ))}
          </TabsContent>

          <TabsContent value="holiday" className="mt-0">
            {filteredNotices.map((notice) => (
              <NoticeItem
                key={notice.id}
                title={notice.title}
                description={notice.description}
                date={notice.date}
                type={notice.type}
              />
            ))}
          </TabsContent>

          <TabsContent value="announcement" className="mt-0">
            {filteredNotices.map((notice) => (
              <NoticeItem
                key={notice.id}
                title={notice.title}
                description={notice.description}
                date={notice.date}
                type={notice.type}
              />
            ))}
          </TabsContent>

          <TabsContent value="general" className="mt-0">
            {filteredNotices.map((notice) => (
              <NoticeItem
                key={notice.id}
                title={notice.title}
                description={notice.description}
                date={notice.date}
                type={notice.type}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Notices;