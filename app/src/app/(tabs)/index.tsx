import { globalStyles } from '@/styles/global';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <ScrollView style={globalStyles.screen}>
      <View style={globalStyles.homeContainer}>
        <Text style={globalStyles.title}>Marvels & Oddities</Text>

        <Text style={globalStyles.heroQuote}>
          “Maybe that is what living is — recognizing the marvels and oddities around you.”
        </Text>

        <Text style={globalStyles.dateText}>{formattedDate}</Text>

        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.infoTitle}>Marvels</Text>

          <Text style={globalStyles.infoDescription}>
            This way of noticing that even during the suckiest moments in life, there was something marvelous…
          </Text>
        </View>

        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.infoTitle}>Oddities</Text>

          <Text style={globalStyles.infoDescription}>
            The strange, difficult, confusing, or unexpected parts of the day.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}