import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '480,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Aluguel escritório',
    value: '6000,00',
    date: '10/09/2022',
    type: 0 //despesas
  },
  {
    id: 3,
    label: 'Pix Cliente Nubank',
    value: '2300,00',
    date: '10/09/2022',
    type: 1 //receitas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Josué Leite" />
      <Balance saldo="1.000.000,00" despesas="-25.800,00" />

      <Text style={styles.title}>Últimas Movimentações</Text>

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
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14
  }
})
