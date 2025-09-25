import { useState } from 'react';
import { Text, View } from "react-native";

export default function Index() {
    
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      
      <Text>Projetim do lele.</Text>
    </View>
  );
}