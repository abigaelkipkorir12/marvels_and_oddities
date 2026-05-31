import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { globalStyles } from '@/styles/global';
import { supabase } from '../../utils/supabaseClient';

export default function HistoryScreen() {
  const [journals, setJournals] = useState<any[]>([]);

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    const { data, error } = await supabase
      .from('marvel_and_oddities')
      .select('*')
      .order('inserted_at', { ascending: false });

     console.log('History Data:', data);
     console.log('History Error:', error);


    if (error) {
      console.log(error);
      return;
    }

    setJournals(data || []);
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