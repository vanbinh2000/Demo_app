import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Xin chào 👋</Text>
        <Text style={styles.username}>Người dùng</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Chào mừng đến với ứng dụng
        </Text>
        <Text style={styles.bannerText}>
          Đây là trang chủ được xây dựng bằng React Native.
        </Text>
      </View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>📱</Text>
          <Text style={styles.cardTitle}>Sản phẩm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>🛒</Text>
          <Text style={styles.cardTitle}>Đơn hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>❤️</Text>
          <Text style={styles.cardTitle}>Yêu thích</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>⚙️</Text>
          <Text style={styles.cardTitle}>Cài đặt</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#4F46E5',
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
  },
  username: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
  },
  banner: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerText: {
    marginTop: 8,
    color: '#666',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
  },
  cardIcon: {
    fontSize: 32,
  },
  cardTitle: {
    marginTop: 10,
    fontWeight: '600',
  },
});

export default HomeScreen;