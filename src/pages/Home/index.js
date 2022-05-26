import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '480,90',
    date: '17/10/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Aluguel escritório',
    value: '6.000,00',
    date: '10/09/2022',
    type: 0 //despesas
  },
  {
    id: 3,
    label: 'Pix Cliente Nubank',
    value: '2.300,00',
    date: '05/08/2022',
    type: 1 //receitas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Lucas Barros Santos" />
      <Balance saldo="647.800,32" despesas="-5.1320,71" />

      <Actions />

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})
