import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom";

export default function ChatRoom() {
  const { id } = useParams();
  
  // Find the current chat details
  const getChatName = (chatId: string) => {
    // You can implement proper chat name lookup here
    const names: Record<string, string> = {
      'dsa-group': 'DSA Study Group',
      'sarah': 'Sarah (CS-2024)',
      'leetcode-warriors': 'Leetcode Warriors'
    };
    return names[chatId] || chatId;
  };

  const messages = [
    { id: 1, sender: "Sarah (CS-2024)", text: "Hey! Anyone stuck on the DP problem from today's class?", time: "2:30 PM", isSelf: false },
    { id: 2, sender: "Alex (DS-2024)", text: "Yeah, that recursive solution was tricky!", time: "2:31 PM", isSelf: false },
    { id: 3, sender: "You", text: "I found a great visualization for it, let me share", time: "2:32 PM", isSelf: true },
    { id: 4, sender: "Raj (AI-2024)", text: "Please share! I'm still working on optimizing it", time: "2:33 PM", isSelf: false },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-4">
        <h2 className="font-bold">{getChatName(id || '')}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.isSelf
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              <div className="font-medium text-sm mb-1">
                {message.sender}
              </div>
              <div>{message.text}</div>
              <div className={`text-xs ${message.isSelf ? 'text-primary-foreground/75' : 'text-muted-foreground/75'} mt-1`}>
                {message.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input 
            placeholder="Type your message..." 
            className="flex-1"
          />
          <Button>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
