
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { globalStyles } from "@/styles/global";
import { supabase } from "@/utils/supabaseClient";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        "Missing Information",
        "Please enter both email and password."
      );
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        Alert.alert("Login Failed", error.message);
        return;
      }

      Alert.alert("Success", "Logged in successfully!");
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Something unexpected went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={globalStyles.authContainer}>
      <Text style={globalStyles.title}>
        Marvels & Oddities
      </Text>

      <Text style={globalStyles.heroQuote}>
        "Maybe that is what living is — recognizing the marvels and oddities
        around you."
      </Text>

      <TextInput
        style={globalStyles.authInput}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={globalStyles.authInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={globalStyles.buttonText}>
            Log In
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

