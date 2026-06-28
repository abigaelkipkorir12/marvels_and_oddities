
import { supabase } from "@/utils/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const router = useRouter();
  // Stores the currently logged in user
  const [session, setSession] = useState<Session | null>(null);//allows it to update and changes what is rendered based on the info
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // Save the session into React state
      setSession(session);
      setLoading(false); //allows app to decide what route to redirect to
    }

    checkSession();
    
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {//if login happens or anything that changes state, update it
      setSession(session);

      setLoading(false);//any authentication leaves app in finished state
    });

    return () => subscription.unsubscribe();


  }, []);
  
    useEffect(() => {
      // Don't make routing decisions until we've finished checking Supabase
      if (loading) return;

      // send them to the login screen
      if (!session) {
        router.replace("/login");
      }

      // Authenticated user send them to the app
      else {
        router.replace("/");
      }
    }, [session, loading, router]);//run as often as any of these variables changes



  console.log("Current Session State:", session);
  
  if (loading) {
    return null;//show nothing while still loading
  }
  return <Slot />;
}