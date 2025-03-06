import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NoticeItem from "@/components/NoticeItem";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Notice {
  id: number;
  title: string;
  description: string;
  date: Date;
  type: "result" | "holiday" | "general" | "announcement" | "timetable" | "assignment" | "exam";
}

const Notices = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  // Sample data - in a real app, this would come from an API
  const notices: Notice[] = [
    {
      id: 1,
      title: "End Semester Results Declared",
      description: "Results for Fall 2023 semester are now available",
      date: new Date("2024-04-15T10:00:00"),
      type: "result", // Matches the union type
    },
    {
      id: 2,
      title: "Summer Break Announcement",
      description: "Summer break will commence from May 15th to June 30th",
      date: new Date("2024-04-20T23:59:00"),
      type: "holiday", // Matches the union type
    },
    {
      id: 3,
      title: "Campus Maintenance Notice",
      description: "Library will be closed for renovation next week",
      date: new Date("2024-05-01T09:00:00"),
      type: "general", // Matches the union type
    },
    {
      id: 4,
      title: "Scholarship Applications Open",
      description: "Merit scholarship applications for next semester are now open",
      date: new Date("2024-04-18T14:00:00"),
      type: "announcement", // Matches the union type
    },
  ].sort((a, b) => a.date.getTime() - b.date.getTime());
  
  

  // Filter notices based on the current tab
  const filteredNotices =
    currentTab === "all" ? notices : notices.filter((notice) => notice.type === currentTab);

  const handleNoticeClick = (notice: Notice) => {
    setSelectedNotice(notice);
  };

  const closeNoticeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Notices</h1>
        <p className="text-muted-foreground mb-8">
          Stay updated with the latest announcements and notices.
        </p>

        {/* Tabs for navigation */}
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Notices</TabsTrigger>
            <TabsTrigger value="result">Results</TabsTrigger>
            <TabsTrigger value="holiday">Holidays</TabsTrigger>
            <TabsTrigger value="announcement">Announcements</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          {/* Dynamic rendering based on the selected tab */}
          {["all", "result", "holiday", "announcement", "general"].map((tab) => (
            <TabsContent value={tab} key={tab}>
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    onClick={() => handleNoticeClick(notice)}
                    className="cursor-pointer"
                  >
                    <NoticeItem
                      title={notice.title}
                      description={notice.description}
                      date={notice.date}
                      type={notice.type}
                    />
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No notices found for this category.</p>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Dialog for displaying notice details */}
      {selectedNotice && (
        <Dialog open={!!selectedNotice} onOpenChange={closeNoticeModal}>
          <DialogContent className="max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle>{selectedNotice.title}</DialogTitle>
              <DialogDescription>{selectedNotice.description}</DialogDescription>
            </DialogHeader>
            <p className="text-muted-foreground mt-4">
              <strong>Date:</strong> {selectedNotice.date.toLocaleDateString()}
            </p>
            <p className="text-muted-foreground">
              <strong>Time:</strong> {selectedNotice.date.toLocaleTimeString()}
            </p>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Notices;
