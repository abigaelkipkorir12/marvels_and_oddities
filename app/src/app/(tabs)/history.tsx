
import { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

import { globalStyles } from '@/styles/global';
import { supabase } from '../../utils/supabaseClient';

export default function HistoryScreen() {
  const [journals, setJournals] = useState<any[]>([]);

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      //gets the currently authenticated user
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      //edge case
      if (authError || !user) {
        Alert.alert(
          'Authentication Error',
          'Please log in again before saving your journal.'
        );
        return;
      }

      const { data, error } = await supabase
        .from('marvel_and_oddities')
        .select('*')
        .eq('user_id', user.id)
        .order('inserted_at', { ascending: false });

      if (error) {
        console.log(error);
        return;
      }

      setJournals(data || []);
    } catch (err) {
      console.error(err);
      Alert.alert(
        'Error',
        'Something unexpected went wrong.'
      );
    }
  };

  return (
    <ScrollView style={globalStyles.screen}>
      <View style={globalStyles.homeContainer}>
        <Text style={globalStyles.title}>
          Journal History
        </Text>

        <Text style={globalStyles.heroQuote}>
          Your marvels and oddities over time.
        </Text>
        {journals.length === 0 ? (
          <Text style={globalStyles.empty}>
            No journal entries yet.
          </Text>
        ) : (
          journals.map((journal) => (
            <View
              key={journal.id}
              style={globalStyles.journalItem}
            >
              <Text style={globalStyles.journalDate}>
                {journal.date}
              </Text>

              <Text style={globalStyles.journalTitle}>
                Mood: {journal.mood}/5
              </Text>

              <Text style={globalStyles.promptText}>
                Marvel
              </Text>

              <Text style={globalStyles.journalText}>
                {journal.marvel}
              </Text>

              <Text
                style={[
                  globalStyles.promptText,
                  { marginTop: 12 },
                ]}
              >
                Oddity
              </Text>

              <Text style={globalStyles.journalText}>
                {journal.oddity}
              </Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

