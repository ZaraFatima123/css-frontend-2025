import { MessagesSquare } from "lucide-react";

export default function ChatWelcome() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center text-muted-foreground">
        <MessagesSquare className="h-12 w-12 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Welcome to Chat</h2>
        <p>Select a conversation to start messaging</p>
      </div>
    </div>
  );
}
