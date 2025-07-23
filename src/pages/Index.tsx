import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import SignIn from '@/components/SignIn';
import ChatHeader from '@/components/ChatHeader';
import ChatRoom from '@/components/ChatRoom';
import { Loader2 } from "lucide-react";

const Index = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <SignIn />;
  }

  return (
    <div className="h-screen bg-gradient-background">
      <div className="h-full max-w-4xl mx-auto bg-background shadow-float border-x">
        <ChatHeader />
        <ChatRoom />
      </div>
    </div>
  );
};

export default Index;
