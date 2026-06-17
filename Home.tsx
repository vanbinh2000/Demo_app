import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const InvoiceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>HÓA ĐƠN GIÁ TRỊ GIA TĂNG</Text>

      <View style={styles.section}>
        <Text style={styles.company}>
          CÔNG TY TNHH ABC
        </Text>
        <Text>MST: 0123456789</Text>
        <Text>Địa chỉ: 123 Nguyễn Huệ, TP.HCM</Text>
      </View>

      <View style={styles.infoRow}>
        <Text>Mẫu số: 01GTKT0/001</Text>
        <Text>Ký hiệu: AA/25E</Text>
      </View>

      <View style={styles.infoRow}>
        <Text>Số HĐ: 0000123</Text>
        <Text>Ngày: 20/07/2025</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Người mua hàng</Text>
        <Text>Công ty XYZ</Text>
        <Text>MST: 9876543210</Text>
        <Text>Địa chỉ: Hà Nội</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={[styles.cell, { flex: 1 }]}>STT</Text>
        <Text style={[styles.cell, { flex: 3 }]}>Tên hàng hóa</Text>
        <Text style={[styles.cell, { flex: 2 }]}>SL</Text>
        <Text style={[styles.cell, { flex: 3 }]}>Thành tiền</Text>
      </View>

      <View style={styles.tableRow}>
        <Text style={[styles.cell, { flex: 1 }]}>1</Text>
        <Text style={[styles.cell, { flex: 3 }]}>Laptop Dell</Text>
        <Text style={[styles.cell, { flex: 2 }]}>2</Text>
        <Text style={[styles.cell, { flex: 3 }]}>40.000.000</Text>
      </View>

      <View style={styles.totalSection}>
        <Text>Tổng tiền hàng: 40.000.000 đ</Text>
        <Text>Thuế GTGT (10%): 4.000.000 đ</Text>
        <Text style={styles.total}>
          Tổng thanh toán: 44.000.000 đ
        </Text>
      </View>

      <View style={styles.signature}>
        <Text>Người mua hàng</Text>
        <Text>Người bán hàng</Text>
      </View>

      <View style={styles.qrBox}>
        <Text>[ QR Code ]</Text>
      </View>
    </ScrollView>
  );
};

export default InvoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
      marginBottom: 20,
    color:"blue"
  },
  company: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"red"
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontWeight: '600',
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'gray',
  },
  tableRow: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  cell: {
    padding: 8,
    borderRightWidth: 1,
    textAlign: 'center',
  },
  totalSection: {
    marginTop: 20,
    gap: 6,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  signature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  qrBox: {
    marginTop: 30,
    alignItems: 'center',
    borderWidth: 1,
    padding: 20,
  },
});