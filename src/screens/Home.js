import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { askAI } from "../services/geminiService"

const Home = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setLoading(true);
    const reply = await askAI(input);
    setLoading(false);

    const botMsg = {
      id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
      text: reply,
      sender: "bot",
    };
    setMessages((prev) => [...prev, botMsg]);
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const renderItem = ({ item }) => (
    <View
      style={[styles.message, item.sender === "user" ? styles.user : styles.bot]}
    >
      <Text>{item.text}</Text>
      <TouchableOpacity onPress={() => deleteMessage(item.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {loading && <ActivityIndicator size="large" color="blue" />}
      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type Message..."
          style={styles.inputText}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
          <Text style={{ color: "#fff" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  message: { padding: 10, marginVertical: 5, borderRadius: 8, maxWidth: "80%" },
  user: { alignSelf: "flex-end", backgroundColor: "#DCF8C6" },
  bot: { alignSelf: "flex-start", backgroundColor: "#EEE" },
  delete: { fontSize: 12, color: "red", marginTop: 5 },
  inputRow: { flexDirection: "row", alignItems: "center" },
  inputText: { flex: 1, borderWidth: 1, padding: 10, borderRadius: 8 },
  sendBtn: { marginLeft: 10, backgroundColor: "blue", padding: 10, borderRadius: 8 },
});
