import { router } from 'expo-router';
import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';

export default function TopDropDownMenu() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="menu" color="black" onPress={openMenu} />}
      >
        <Menu.Item onPress={() => router.push('/telaA')} title="Tela A" />
        <Menu.Item onPress={() => router.push('/telaB')} title="Tela B" />
        <Menu.Item onPress={() => router.push('/telaC')} title="Tela C" />
      </Menu>
      <Appbar.Content title="Meu App" />
    </Appbar.Header>
  );
}