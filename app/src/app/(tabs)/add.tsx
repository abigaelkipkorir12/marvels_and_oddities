
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { globalStyles } from '@/styles/global';
import { supabase } from '../../utils/supabaseClient';

export default function AddJournalScreen() {
  //checks input state dynamically,constantly updating
  const [marvel, setMarvel] = useState('');
  const [oddity, setOddity] = useState('');
  const [mood, setMood] = useState<number | null>(null);

  const [hasJournalToday, setHasJournalToday] = useState(false);

  useEffect(() => {
    checkTodayJournal();
  }, []);

  const checkTodayJournal = async () => {
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

      const today = new Date().toISOString().split('T')[0];

      const { data, error } = await supabase
        .from('marvel_and_oddities')
        .select('id')
        .eq('user_id', user.id)
        .eq('date', today)
        .limit(1);

      if (error) {
        console.log(error);
        return;
      }

      setHasJournalToday((data?.length ?? 0) > 0);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something unexpected went wrong.');
    }
  };

  const handleAddJournal = async () => {
    try {
      //year month day format
      const today = new Date().toISOString().split('T')[0];

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

      console.log('Current User ID:', user.id);

      const { data, error } = await supabase
        .from('marvel_and_oddities')
        .insert([
          {
            user_id: user.id, // journal with the logged in user
            marvel,
            oddity,
            mood,
            date: today,
          },
        ]);

      console.log('DATA:', data);
      console.log('ERROR:', error);

      if (error) {
        Alert.alert('Error', error.message);
        return;
      }

      //physical vibration to help you know that your journal has been saved
      await Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      );

      Alert.alert('Success', 'Journal saved successfully!');

      //clears the form after saving
      setMarvel('');
      setOddity('');
      setMood(null);

      //updates today's journal status
      setHasJournalToday(true);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Unexpected error');
    }
  };

  return (
    <ScrollView style={globalStyles.screen}>
      <View style={globalStyles.homeContainer}>
        <Text style={globalStyles.title}>Add Journal</Text>

        <Text style={globalStyles.heroQuote}>
          One Day at a Time
        </Text>

        {hasJournalToday ? (//if already hass
          <View style={globalStyles.infoBox}>
            <Text style={globalStyles.infoTitle}>
              You've already reflected today.
            </Text>

            <Text style={globalStyles.infoDescription}>
              Come back tomorrow to capture another marvel and oddity.
            </Text>
          </View>
        ) : (//otherwise load this
          <>
            {/* MARVEL */}
            <Text style={globalStyles.sectionTitle}>Marvel</Text>

            <Text style={globalStyles.promptText}>
              What is something good that happened today?
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Write about a marvel..."
              placeholderTextColor="#8d949c"
              multiline
              value={marvel}
              onChangeText={setMarvel}
            />

            {/* ODDITY */}
            <Text style={globalStyles.sectionTitle}>Oddity</Text>

            <Text style={globalStyles.promptText}>
              What is something not particularly good that happened today?
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Write about an oddity..."
              placeholderTextColor="#8d949c"
              multiline
              value={oddity}
              onChangeText={setOddity} //saves what is being written dynamically
            />

            {/* MOOD */}
            <Text style={globalStyles.sectionTitle}>
              How are you feeling?
            </Text>

            <Text style={globalStyles.promptText}>
              On a scale from 1 to 5.
            </Text>

            <View style={globalStyles.moodRow}>
              {[1, 2, 3, 4, 5].map((number) => (
                <TouchableOpacity
                  key={number}
                  style={[
                    globalStyles.moodButton,
                    mood === number &&
                      globalStyles.moodButtonActive,
                  ]}
                  onPress={() => setMood(number)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      globalStyles.moodText,
                      mood === number &&
                        globalStyles.moodTextActive,
                    ]}
                  >
                    {number}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* PHOTO PLACEHOLDER */}
            <TouchableOpacity
              style={globalStyles.imageUploadBox}
              activeOpacity={0.7}
            >
              <Text style={globalStyles.imageUploadText}>
                Tap to add a photo
              </Text>
            </TouchableOpacity>

            {/* SUBMIT */}
            <TouchableOpacity
              style={globalStyles.button}
              activeOpacity={0.7}
              onPress={handleAddJournal}
            >
              <Text style={globalStyles.buttonText}>
                Add Journal
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}

