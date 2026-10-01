import { FlatList, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

const products = [
  { id: '1', name: 'Everyday Backpack', price: '$64.00' },
  { id: '2', name: 'Ceramic Travel Mug', price: '$22.50' },
  { id: '3', name: 'Wireless Headphones', price: '$89.00' },
  { id: '4', name: 'Canvas Market Tote', price: '$18.00' },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle" style={styles.title}>
          Rabeeha – 23I-3025
        </ThemedText>
        <ThemedText type="subtitle">Products</ThemedText>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ThemedView type="backgroundElement" style={styles.productRow}>
              <ThemedText>{item.name}</ThemedText>
              <ThemedText type="smallBold">{item.price}</ThemedText>
            </ThemedView>
          )}
          contentContainerStyle={styles.productList}
          style={styles.list}
        />
        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'stretch',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  title: {
    paddingTop: Spacing.three,
  },
  list: {
    flex: 1,
  },
  productList: {
    gap: Spacing.two,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    borderRadius: 4,
  },
});