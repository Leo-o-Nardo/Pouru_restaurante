import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width
export default StyleSheet.create({
  fullScreen: {
    backgroundColor: '#ebebeb',
    paddingTop: 5,
    paddingHorizontal: 5
  },
  Item: {    
    height: 500,    
    // width: '92%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 11,

    marginLeft: 85,
    marginRight: 15,
    marginBottom: 30,
    // marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

elevation: 24,
  },
  images: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',    
    borderRadius: 3,    
  },
  text: {
    alignSelf: 'flex-end',
    fontSize: 32,
    marginRight: 15,
    marginTop: 15,
    paddingTop: 11,
    paddingBottom: 2,
    paddingHorizontal: 23, 
    borderRadius: 50,
    color: 'white',
    fontFamily: 'Luxory',
    backgroundColor: '#880606'
  },
  boxIngredients: {
    position: 'absolute', 
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, .4)',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    maxHeight: 50
  },
  ingredients: {    
    color: 'black',
    paddingLeft: 10,
    padding: 2,
    fontFamily: 'Friz Quadrata Regular',
    fontSize: 23,    
  },
  AddToCart: {
    backgroundColor: '#880606',
    position: 'absolute',
    // right: 15,
    left: 15,
    bottom: 55,
    borderRadius: 100,
    width: 70,
    height: 70,
    padding: 10,
  },
  cart: {
    width:'100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  backgroundAddItem: {
    backgroundColor: 'white',
    height: '100%',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: deviceWidth * 0.75
  },
  grayAddCart: {
    flex: 1,
    backgroundColor: '#000000AA', 
    flexDirection: 'row'
  },
  fullAddCart: {
    flex: 1,
    height: '100%'
  },
  containerCenter: {
    alignItems: 'center',
    paddingTop: '2%'
  },
  textItem: {
    fontSize: 80,
    fontFamily: 'Luxory',
    color: 'black'
  },
  valueItem: {
    fontSize: 70,
    fontFamily: 'Luxory',
    borderRadius: 50,
    color: 'white',
    backgroundColor: '#880606',
    paddingTop: 15,
    paddingHorizontal: 23, 
  },
  galleryCart: {
    backgroundColor: 'green',
    minWidth: '90%',
    minHeight: '40%',
    marginTop: '2%',
  },
  boxBtn: {
    marginTop: '2%',
    height: '9%',
  },
  ingredientsCart: {
    fontFamily: 'Friz Quadrata Regular',
    fontSize: 22,
    maxWidth: '90%',
  },
  spaceAround: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 55,
    height: 60,
  },
  qtdeItem: {
    fontFamily: 'Luxory',
    fontSize: 42,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#d53d0c',
    height: 52,
    marginTop: 5,
    marginHorizontal: 5,
    borderRadius: 10
  },
  textQtde: {
    fontFamily: 'Friz Quadrata Regular',
    fontSize: 26,
  },
  endCart: {
    backgroundColor: '#880606',
    borderRadius: 100,
    width: 130,
    height: 130,
    padding: 15,
    top: -30
  },

});
