import React, {Component} from 'react';
import { Image, View, TouchableOpacity, Text, SafeAreaView, FlatList } from 'react-native';

import styles from '../assets/fonts/styles';
import MenuButton from '../assets/fonts/menuButton';
import {RightModal} from './addToCartoModal';
import menuList from '../assets/fonts/data/products';

const Item = ({ title, id, valor, opcoes, img }) => {
  let RightModalRef = React.createRef()

  const AddProdToCart = (prdId) => {
    RightModalRef.show()
  };

  const onCloseModal = () => {
    RightModalRef.close()
  }

  return (
    <View style={styles.fullScreen}>
      <View style={styles.Item}>
        <Image style={styles.images} source={img}/>

        <Text style={styles.text}>{title}</Text>      
        <Text style={styles.text}>
          <Text> R$</Text>
          <Text style={{color: '#ffa200'}}> {valor}</Text>
        </Text>
        
        <TouchableOpacity style={styles.AddToCart} onPress={() =>AddProdToCart(id)}>
          <Image 
            style={styles.cart}
            source={require('../assets/images/addToCart.png')}
          />
        </TouchableOpacity>
        <RightModal 
          ref={(target) => RightModalRef = target} 
          onTouchOutside = {onCloseModal}
          prodId={id}
        />

        <View style={styles.boxIngredients}>
          <Text style={styles.ingredients}>{opcoes}</Text>
        </View>
      </View>
    </View>
  )
}

function getItemLayout(data, index) {
  return {length : styles.Item.height, offset: (styles.Item.height + styles.Item.marginBottom + 3) * index, index};
}

function FoodMenu({ route, navigation }) {  
  let index = 0;
  if (route.params !== undefined){ 
    index = route.params.index; 
    this.FlatListRef.scrollToIndex({index : index})
  } 

  const renderItem = ({ item }) => (
    <Item 
      id={item.idItem} 
      title={item.nomeItem} 
      valor={item.valorItem.toFixed(2)} 
      opcoes={item.descItem} 
      img={item.imgItem[0].source} 
    />
  );

  return (    
    <SafeAreaView style={{flexDirection: 'row', backgroundColor: '#ebebeb'}}>
      <MenuButton onPress={() => navigation.toggleDrawer()} />

      {/* <TouchableOpacity onPress={() => this.FlatListRef.scrollToIndex({index : 3})}> 
        <Text> aaa </Text>
      </TouchableOpacity> */}

      <FlatList
        ref={(ref) => this.FlatListRef = ref}
        data={menuList}
        renderItem={renderItem}
        keyExtractor={item => item.idItem}
        getItemLayout={getItemLayout.bind(this)}
      />
    </SafeAreaView>
  );
}

export default FoodMenu;