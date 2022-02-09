import React, {Component} from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, TouchableOpacity, Image, Alert } from 'react-native';
import Gallery from 'react-native-image-gallery';

import styles from '../assets/fonts/styles';
import menuList from '../assets/fonts/data/products';
import RadioButton from '../assets/fonts/radioButton';

function findItem(Id) {
    return menuList.filter(item => {
      return item.idItem === Id
    })
};

export class RightModal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            show: false,
            QtdeAdd: 1,
        }
    }

    incQtde = (qtde) => {
        if (((this.state.QtdeAdd+qtde)<1) || (this.state.QtdeAdd+qtde)>50){ return }
        this.setState({QtdeAdd: this.state.QtdeAdd+qtde})        
    } 

    show = () => { 
        this.setState({show: true}) 
        this.setState({QtdeAdd: 1}) 

    }    
    close = () => { this.setState({show: false}) }
    renderOutsideTouchable(onTouch) {
        const view = <View style={styles.fullAddCart} />
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={styles.fullAddCart}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    addItem = (id, qtde) => {
        // global.CartItem = [];        

        Alert.alert('Adicionar ao carrinho',
            'Deseja realmente pedir esse item ? ',
            [
                { text: 'Sim', onPress: () => {
                    const infoItem = findItem(id)[0] 
                    global.CartItem.push({
                        id: id, 
                        desc: infoItem.nomeItem,
                        qtde: qtde,
                        valor: qtde * infoItem.valorItem,
                        opt: global.descOpt
                    });
                    alert('Produto adicionado com sucesso!')
                    this.close()
                }},
                
                { text: 'Não', onPress: () => {console.log('Cancelado')}},
            ],
            {cancelable: true},
        );
    }

    render(){
        let {show} = this.state
        const {onTouchOutside, prodId} = this.props
        const infoItem = findItem(prodId)[0] 
        const itemList = infoItem.OptionsItem
        const imgList = infoItem.imgItem
        global.descOpt = itemList[0].nomeOpt

        return (
            <Modal 
                animationType={'fade'} 
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            > 
                <View style={styles.grayAddCart}>
                    {this.renderOutsideTouchable(onTouchOutside)}

                    <View style={styles.backgroundAddItem}>
                        <View style={styles.containerCenter}>
                            <Text style={styles.textItem}>
                                {infoItem.nomeItem}
                            </Text>
                            <Text style={styles.valueItem}>
                                <Text>R$</Text>
                                <Text style={{color: '#ffa200'}}> {infoItem.valorItem.toFixed(2)}</Text>
                            </Text>

                            <View style={styles.galleryCart}>
                            <Gallery
                                style={{ flex: 1, backgroundColor: 'white' }}
                                initialPage={1}
                                images={imgList}
                            />
                            </View>

                            <View style={styles.boxBtn}>
                                <Text style={styles.ingredientsCart}>
                                    <View> 
                                        <RadioButton itemList={itemList} />
                                    </View>
                                </Text>
                            </View>

                            <View style={[styles.boxBtn, styles.spaceAround]}>                                
                                <View>
                                    <Text style={styles.textQtde}> Quantidade: </Text>
                                    <View style={{flexDirection: 'row'}}> 
                                        <TouchableOpacity style={styles.btn} onPress={() => this.incQtde(-1)}>
                                            <Image style={styles.cart} source={require('../assets/images/remove.png')} />
                                        </TouchableOpacity>

                                        <Text style={styles.qtdeItem}> {this.state.QtdeAdd} </Text>

                                        <TouchableOpacity style={styles.btn} onPress={() => this.incQtde(1)}>
                                            <Image style={styles.cart} source={require('../assets/images/add.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
            
                                <TouchableOpacity style={styles.endCart} onPress={() => this.addItem(prodId, this.state.QtdeAdd)}>
                                    <Image 
                                        style={styles.cart}
                                        source={require('../assets/images/closeCart.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>            
            </Modal>
        )
    }
}