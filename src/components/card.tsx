import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

interface ICardProps {
  title: string;
  content: string;
  icon: typeof FontAwesome.defaultProps.icon;
}

const Page = ({ title, icon, content }: ICardProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <FontAwesome name={icon} size={40} style={styles.icon} />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 25,
  },
  icon: {
    padding: 10,
  },
});
