import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

import { Colors } from "../../constants/Colors";

import { useUser } from "../hooks/useUser";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import Spacer from "../../components/Spacer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useUser();

  const handleSubmit = async () => {
    const [error, setError] = useState(null);

    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />

        <ThemedText title={true} style={styles.title}>
          Create a new account
        </ThemedText>

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder="Email"
          value={email}
        />

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          onChangeText={setPassword}
          placeholder="Password"
          value={password}
          secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />

        <Link href="/login">
          <ThemedText style={{ textAlign: "center" }}>Login</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});
