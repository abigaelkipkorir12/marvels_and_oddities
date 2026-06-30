import { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { globalStyles } from '@/styles/global';
import { supabase } from '@/utils/supabaseClient';

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [streak, setStreak] = useState(0);
  
    useEffect(() => {
      calculateStreak();
  }, []);
  
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleLogout = async () => {
    try {
      setLoading(true);

      const { error } = await supabase.auth.signOut();

      if (error) {
        Alert.alert('Logout Failed', error.message);
        return;
      }

      // RootLayout will detect the session ending
      // and automatically redirect to the login screen.
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something unexpected went wrong.');
    } finally {
      setLoading(false);
    }
  };

const calculateStreak = async () => {
  try {
    //gets the currently authenticated user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    //edge case
    if (authError || !user) {
      Alert.alert(
        "Authentication Error",
        "Please log in again."
      );
      return;
    }

    const { data, error } = await supabase
      .from("marvel_and_oddities")
      .select("date")
      .eq("user_id", user.id)
      .order("date", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    let streakCount = 0;

    //normalize everything to midnight
    let expectedDate = new Date();
    expectedDate.setHours(0, 0, 0, 0);

    for (const journal of data ?? []) {
      const journalDate = new Date(journal.date);

      //normalize everything to midnight
      journalDate.setHours(0, 0, 0, 0);

      if (journalDate.getTime() === expectedDate.getTime()) {
        streakCount++;

        //previous day
        expectedDate.setDate(expectedDate.getDate() - 1);
      } else {
        break;
      }
    }

    setStreak(streakCount);

    console.log("Current Streak:", streakCount);
  } catch (err) {
    console.error(err);
    Alert.alert(
      "Error",
      "Something unexpected went wrong."
    );
  }
};



  return (
    <ScrollView style={globalStyles.screen}>
      <View style={globalStyles.homeContainer}>
        <Text style={globalStyles.title}>Marvels & Oddities</Text>

        <Text style={globalStyles.heroQuote}>
          "Maybe that is what living is — recognizing the marvels and oddities
          around you."
        </Text>

        <Text style={globalStyles.dateText}>{formattedDate}</Text>

        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.infoTitle}>Marvels</Text>

          <Text style={globalStyles.infoDescription}>
            This way of noticing that even during the suckiest moments in life,
            there was something marvelous…
          </Text>
        </View>

        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.infoTitle}>Oddities</Text>

          <Text style={globalStyles.infoDescription}>
            The strange, difficult, confusing, or unexpected parts of the day.
          </Text>
        </View>

        <TouchableOpacity
          style={globalStyles.logoutButton}
          onPress={handleLogout}
          disabled={loading}
        >
          <Text style={globalStyles.logoutText}>
            {loading ? 'Logging Out...' : 'Log Out'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}