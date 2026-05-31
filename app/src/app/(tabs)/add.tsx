import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import { globalStyles } from '@/styles/global';
import { supabase } from '../../utils/supabaseClient'; // adjust the path as needed

export default function AddJournalScreen() {
  const [marvel, setMarvel] = useState('');
  const [oddity, setOddity] = useState('');
  const [mood, setMood] = useState<number | null>(null);
  const [highlight, setHighlight] = useState('');

const handleAddJournal = async () => {
  try {
    const { data, error } = await supabase
      .from('marvel_and_oddities')
      .insert([
        {
          marvel,
          oddity,
          mood,
        },
      ]);

    console.log('DATA:', data);
    console.log('ERROR:', error);

    if (error) {
      alert(error.message);
      return;
    }
   
    await Haptics.notificationAsync(
    Haptics.NotificationFeedbackType.Success
    );

alert('Saved successfully!');
  } catch (err) {
    console.error(err);
    alert('Unexpected error');
  }
};

  return (
    <ScrollView style={globalStyles.screen}>
      <View style={globalStyles.homeContainer}>
        <Text style={globalStyles.title}>Add Journal</Text>

        <Text style={globalStyles.heroQuote}>One Day at a Time</Text>

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
          onChangeText={setOddity}
        />

        {/* MOOD */}
        <Text style={globalStyles.sectionTitle}>How are you feeling?</Text>
        <Text style={globalStyles.promptText}>On a scale from 1 to 5.</Text>
        <View style={globalStyles.moodRow}>
          {[1, 2, 3, 4, 5].map((number) => (
            <TouchableOpacity
              key={number}
              style={[
                globalStyles.moodButton,
                mood === number && globalStyles.moodButtonActive,
              ]}
              onPress={() => setMood(number)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  globalStyles.moodText,
                  mood === number && globalStyles.moodTextActive,
                ]}
              >
                {number}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* HIGHLIGHT */}
        <Text style={globalStyles.sectionTitle}>Highlight of the Day</Text>
        <Text style={globalStyles.promptText}>
          Optional: Share a memory, moment, or photo from today.
        </Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Optional highlight..."
          placeholderTextColor="#8d949c"
          multiline
          value={highlight}
          onChangeText={setHighlight}
        />

        {/* PHOTO PLACEHOLDER */}
        <TouchableOpacity style={globalStyles.imageUploadBox} activeOpacity={0.7}>
          <Text style={globalStyles.imageUploadText}>Tap to add a photo</Text>
        </TouchableOpacity>

        {/* SUBMIT */}
        <TouchableOpacity
          style={globalStyles.button}
          activeOpacity={0.7}
          onPress={handleAddJournal}
        >
          <Text style={globalStyles.buttonText}>Add Journal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}