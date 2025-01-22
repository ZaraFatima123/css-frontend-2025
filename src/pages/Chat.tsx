import { Link, Outlet, useLocation } from "react-router-dom";
import { UsersRound, Hash } from "lucide-react";

export default function Chat() {
  const location = useLocation();
  const chats = [
    {
      id: 1,
      type: 'group',
      name: 'DSA Study Group',
      lastMessage: 'Check out this DP solution!',
      time: '2:30 PM',
      unread: 3,
      path: '/chat/dsa-group'  // Make sure these paths match your route configuration
    },
    {
      id: 2,
      type: 'direct',
      lastMessage: 'Thanks for the help!',
      time: '1:45 PM',
      unread: 0,
      path: '/chat/sarah'  // Make sure these paths match your route configuration
    },
    {
      id: 3,
      type: 'group',
      name: 'Leetcode Warriors',
      lastMessage: 'Anyone up for mock interviews?',
      time: '12:15 PM',
      unread: 5,
      path: '/chat/leetcode-warriors'  // Make sure these paths match your route configuration
    }
  ];

  return (
    <div className="container h-[calc(100vh-120px)] py-4">
      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-4 h-full">
        {/* Chat List Sidebar */}
        <div className="border rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold">Chats</h1>
          </div>
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {chats.map((chat) => (
              <Link
                key={chat.id}
                to={chat.path}
                className={`flex items-start p-4 hover:bg-gray-50 border-b ${
                  location.pathname === chat.path ? 'bg-gray-50' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {chat.type === 'group' ? (
                      <UsersRound className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Hash className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="font-medium">{chat.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{chat.lastMessage}</p>
                </div>
                <div className="text-xs text-gray-500">
                  <div>{chat.time}</div>
                  {chat.unread > 0 && (
                    <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Chat Content Area */}
        <div className="border rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
