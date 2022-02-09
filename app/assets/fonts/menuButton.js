import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

function openFoodMenuScreen (pIndex){
  global.naviContainerRef.navigate('iniScreen', {index: pIndex})
}

function openEndOrderScreen (){
  global.naviContainerRef.navigate('endScreen', {itemId: 86, otherParam: 'anything you want here',})
}

const MenuButton = props => {
    const content = (
        <View style={styles.ViewBtnMenu}> 
          <TouchableOpacity onPress={() => openFoodMenuScreen(0)} style={styles.btnToggleMenu} >
              <Image style={styles.image} source={require('../images/sideMenuBar/Home.png')} />
          </TouchableOpacity>
          <Text style={styles.InfoText}> Início </Text>          

          <TouchableOpacity  onPress={() => openFoodMenuScreen(0)} style={styles.btnToggleMenu}>
              <Image style={styles.image} source={require('../images/sideMenuBar/Entry.png')} />
          </TouchableOpacity>
          <Text style={styles.InfoText}> Entradas </Text>

          <TouchableOpacity  onPress={() => openFoodMenuScreen(4)} style={styles.btnToggleMenu}>
              <Image style={styles.image} source={require('../images/sideMenuBar/Main.png')} />
          </TouchableOpacity>
          <Text style={styles.InfoText}> Pratos Principais </Text>

          <TouchableOpacity  onPress={() => openFoodMenuScreen(8)} style={styles.btnToggleMenu}>
              <Image style={styles.image} source={require('../images/sideMenuBar/Drink.png')} />
          </TouchableOpacity>
          <Text style={styles.InfoText}> Bebidas </Text>

          <TouchableOpacity  onPress={() => openFoodMenuScreen(12)} style={styles.btnToggleMenu}>
              <Image style={styles.image} source={require('../images/sideMenuBar/Dessert.png')} />
          </TouchableOpacity>
          <Text style={styles.InfoText}> Doces </Text>

          <TouchableOpacity  onPress={() => openEndOrderScreen()} style={styles.btnToggleMenu}>
              <Image style={styles.image} source={require('../images/sideMenuBar/EndOrder.png')} />
          </TouchableOpacity>
          <Text style={styles.InfoText}> Finalizar Pedido </Text>
        </View>
    )

    return <View style={styles.ViewBtnMenu}>{content}</View>
}

const styles = StyleSheet.create({
    ViewBtnMenu: {
        width: 65,
        height: 65,
        zIndex: 1,
        marginLeft: 4,
        position: 'absolute'
      }, 
    btnToggleMenu: {
        marginTop: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderColor: 'rgba(136, 6, 6, .4)',
        backgroundColor: '#ff8207',
        borderWidth: 2,
      },   
      image: {
        width:'75%',
        height: '75%',        
      },
      InfoText: {
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Friz Quadrata Regular',
        fontSize: 14
      }
});

export default MenuButton;