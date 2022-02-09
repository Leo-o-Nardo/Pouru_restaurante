import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';
import MenuButton from '../assets/fonts/menuButton';

const deviceHeight = Dimensions.get("window").height
function EndOrderScreen({ route, navigation }) {
  let itemId, otherParam;
  if (route.params !== undefined){
    itemId =  route.params.itemId;
    otherParam = route.params.otherParam;
  } 

  let qtde = 0, valor = 0
  if (global.CartItem == undefined){
    global.CartItem = []
  } else {
    for (let itemAux of global.CartItem) {
      qtde += itemAux.qtde;
      valor += itemAux.valor;
    }
  }

  return (
    <View style={{flexDirection: 'row'}}>      
      <MenuButton onPress={() => navigation.toggleDrawer()} />

      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.title}> LISTA DE COMPRAS: </Text>
        </View>

        <View style={{marginHorizontal: 25, marginTop: 45}}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title><Text style={styles.textHeader}>Descrição</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.textHeader}>Escolha</Text></DataTable.Title>
              <DataTable.Title numeric><Text style={styles.textHeader}>Quantidade</Text></DataTable.Title>
              <DataTable.Title numeric><Text style={styles.textHeader}>Valor Total</Text></DataTable.Title>
            </DataTable.Header>

            {global.CartItem.map(itemCart => 
              <DataTable.Row>
                <DataTable.Cell><Text style={styles.textRow}>{itemCart.desc}</Text></DataTable.Cell>
                <DataTable.Cell><Text style={styles.textRow}>{itemCart.opt}</Text></DataTable.Cell>
                <DataTable.Cell numeric><Text style={styles.textRow}>{itemCart.qtde}</Text></DataTable.Cell>
                <DataTable.Cell numeric><Text style={styles.textRow}>{itemCart.valor.toFixed(2)}</Text></DataTable.Cell>
              </DataTable.Row>
            )}

            <DataTable.Header>
              <DataTable.Title><Text style={styles.textHeader}>Totalização:</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.textHeader}></Text></DataTable.Title>
              <DataTable.Title numeric><Text style={styles.textHeader}>{qtde}</Text></DataTable.Title>
              <DataTable.Title numeric><Text style={styles.textHeader}>{valor.toFixed(2)}</Text></DataTable.Title>
            </DataTable.Header>

          </DataTable>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 95,
    marginTop: 30,   
    height: deviceHeight * .9,
    width: '90%'
  },
  title: {
    fontSize: 66,
    textAlign: 'center',
    fontFamily: 'Luxory',
    color: '#231d1e',
  },
  textView: {
    borderBottomWidth: 10,
    borderColor: '#231d1e',
    marginHorizontal: 100
  },
  textHeader: {
    fontSize: 24, 
    fontFamily: 'Friz Quadrata Regular',
    color: 'black'
  },
  textRow: {
    fontSize: 22, 
    fontFamily: 'Friz Quadrata Regular',
    color: '#595959'
  }
});


export default EndOrderScreen;