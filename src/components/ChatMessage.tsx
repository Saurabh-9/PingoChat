import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  uid: string;
  displayName: string;
  photoURL?: string;
  timestamp: any;
}

interface ChatMessageProps {
  message: Message;
  isOwnMessage: boolean;
}

const ChatMessage = ({ message, isOwnMessage }: ChatMessageProps) => {
  const formatTime = (timestamp: any) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div
      className={cn(
        "flex gap-3 mb-4 message-enter",
        isOwnMessage ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarImage src={message.photoURL} alt={message.displayName} />
        <AvatarFallback className="bg-primary text-primary-foreground text-sm">
          {message.displayName?.charAt(0)?.toUpperCase() || 'U'}
        </AvatarFallback>
      </Avatar>
      
      <div className={cn("flex flex-col max-w-[70%]", isOwnMessage ? "items-end" : "items-start")}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-muted-foreground font-medium">
            {message.displayName}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatTime(message.timestamp)}
          </span>
        </div>
        
        <div
          className={cn(
            "px-4 py-2 rounded-2xl message-bubble shadow-message",
            isOwnMessage
              ? "bg-chat-bubble-sent text-chat-bubble-sent-foreground rounded-br-md"
              : "bg-chat-bubble-received text-chat-bubble-received-foreground border rounded-bl-md"
          )}
        >
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;