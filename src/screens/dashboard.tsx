import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Card from '~/components/card';
import Chart from '~/components/chart';

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapperColumn}>
        <View style={styles.cardWrapper}>
          <Card title="Usuários" content="6" icon="users" />
          <Card title="Acessos Hoje" content="0" icon="calendar" />
        </View>
        <View style={styles.cardWrapper}>
          <Card title="Acesso Mes" content="0" icon="calendar" />
          <Card title="Acesso Total" content="144" icon="compress" />
        </View>
      </View>

      <View style={styles.chart}>
        <Chart />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => console.log('teste')} style={styles.button}>
          <Text style={styles.buttonTitle}>Ver Credenciados</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('teste')} style={styles.button}>
          <Text style={styles.buttonTitle}>Ver Acessos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardWrapperColumn: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cardWrapper: {
    flex: 1,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chart: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});
