import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { toast } from 'sonner';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [user] = useAuthState(auth);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim() || !user) return;

    try {
      await addDoc(collection(db, 'messages'), {
        text: message.trim(),
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        timestamp: serverTimestamp(),
      });
      
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    }
  };

  return (
    <form onSubmit={sendMessage} className="flex gap-2 p-4 bg-background border-t">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-chat-input border-border"
        disabled={!user}
      />
      <Button 
        type="submit" 
        disabled={!message.trim() || !user}
        className="bg-gradient-primary hover:shadow-float transition-all"
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default ChatInput;