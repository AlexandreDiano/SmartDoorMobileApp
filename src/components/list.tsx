import { FlatList, StyleSheet, Text, View } from 'react-native';

const Page = () => {
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
});
