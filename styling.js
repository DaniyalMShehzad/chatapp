import { abort } from "process";
import { Dimensions, PixelRatio } from "react-native";

let _background = '#075E55';
let _light = '#fff';
let _TextColor = "black";
let _dateColor = "#777";
let _TextBackgroundColor = "#E1FFC8";
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
const styling = {
  Todos: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP("100%"),
  },
  KeyboardAvoiding: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP("100%"),
    flex: 1,
    // alignItems:"flex-start",
    // justifyContent:"flex-start",
  },
  SafeAreaView: {
    height: heightPercentageToDP("90%"),
    width: widthPercentageToDP('100%'),
  },
  SafeAreaViewImage: {
    height: heightPercentageToDP("100%"),
    width: widthPercentageToDP('100%'),
  },
  KeyboardAvoidingImage: {
    width: widthPercentageToDP('100%'),
    height: "100%",
    // flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: _light,
    // textAlign: 'center',
  },
  container10: {
    // fontSize: 16,
    // fontWeight: "500",
    // color: _light,
    // textAlign: 'center',
    position: "absolute",
    elevation: 12,
    right: 17,
    top: 14,
  },
  container11: {
    position: "absolute",
    elevation: 12,
    right: 50,
    top: 12,
  },
  header: {
    backgroundColor: _light,
    color: 'white',
    height: heightPercentageToDP("100%"),
    width: widthPercentageToDP('100%'),
    alignItems: "center",
    justifyContent: "center",
  },
  header2: {
    backgroundColor: _background,
    color: 'white',
    // height: 60,
    width: '100%',
    height: "10%",
  },
  header2msg: {
    backgroundColor: _background,
    color: 'white',
    // height: 60,
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    height: "10%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  headerContainer: {
    width: widthPercentageToDP('100%'),
    flexDirection: 'column',
    flex: 2,
    height: heightPercentageToDP("100%"),
  },
  container: {
    height: heightPercentageToDP("100%"),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container3: {
    height: heightPercentageToDP('14.5%'),
    justifyContent: 'space-around',
    backgroundColor: _background,
    flexDirection: "column",
    padding: 12,
  },
  container6: {
    height: heightPercentageToDP('85.5%'),
    justifyContent: 'space-around',
    backgroundColor: _light,
  },
  container5: {
    width: widthPercentageToDP("50%"),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  container7: {
    width: widthPercentageToDP("100%"),
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: "50%",
  },
  container2: {
    width: widthPercentageToDP("100%"),
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: "50%",
  },
  container8: {
    width: widthPercentageToDP("45%"),
    paddingleft: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container9: {
    width: widthPercentageToDP("7%"),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  active: {
    // borderWidth:2,
    borderBottomWidth: 3,
    borderColor: "#ffF",
  },
  w100: {
    width: '100%',
  },
  _h1: {
    fontSize: 32,
  },
  _h2: {
    fontSize: 26,
  },
  _h2text: {
    fontSize: 25,
    color: "#fff",
  },
  dark: {
    color: _background,
  },
  bgdark: {
    backgroundColor: _background,
  },
  bglight: {
    backgroundColor: _light,
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  light: {
    color: 'white',
  },
  main: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    backgroundColor: 'rgba(0,0,0,.2)',
    color: 'white',
    padding: 15,
    margin: 10,
  },
  input: {
    height: 50,
    width: 300,
    padding: 15,
    fontSize: 16,
    borderRadius: 15,
    backgroundColor: 'rgb(255,255,255)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  input2: {
    height: 50,
    width: "100%",
    // height:"100%",
    padding: 15,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: '#f0efeb',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  inputparent: {
    width: "80%",
    height: "100%",
    // position:"relative",
  },
  flexRow2: {
    width: "12%",
    height: "100%",
    textAlign: "center",
    alignItems: "center",
  },
  flexRow2img: {
    width: "15%",
    height: "100%",
    textAlign: "center",
    alignItems: "center",
  },
  btn2: {
    marginLeft: 10,
    backgroundColor: _background,
    color: 'white',
    height: heightPercentageToDP("7%"),
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    // padding: 15,
    // fontSize: 16,
    borderRadius: 60,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,
    elevation: 9,
  },
  inputBox: {
    paddingVertical: 10,
  },
  logo: {
    width: 190,
    height: 85,
  },
  headerLogo: {
    width: 150,
    height: 65,
  },
  logoBox: {
    paddingVertical: 40,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    width: "100%",
    height: 80,
    padding: 13,
  },
  imgparent: {
    width: "15%",
    // borderRadius:40,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  imgparent2: {
    width: "80%",
    borderRadius: 50,
    height: "80%",
    borderWidth: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderColor: "transparent",
  },
  container4: {
    width: widthPercentageToDP("50%"),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },
  img2: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    // borderWidth:1,
  },
  img: {
    width: "80%",
    // width:200,
    height: "100%",
    borderRadius: 100,
  },
  btn: {
    backgroundColor: _background,
    color: 'white',
    alignItems: "center",
    height: 50,
    width: 300,
    padding: 15,
    fontSize: 16,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  txtWhite: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  text_white: {
    color: _dateColor,
    fontSize: 15,
  },
  text_white2: {
    color: '#fff',
    fontSize: 11,
  },
  txtprime: {
    color: _TextColor,
    fontWeight: "700",
    fontSize: 16.5,
    // paddingBottom:4,
    width: "76%",
  },
  txtprime2: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17.5,
    // paddingBottom:4,
    width: "76%",
  },
  flexCenter: {
    width: widthPercentageToDP("100%"),
    height: "85%",
    padding: 10,
    // flexDirection: "column-reverse",
  },
  flexRow: {
    flexDirection: 'row',
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("15%"),
    // marginBottom: 100,
    // marginTop:10,
    // paddingTop:10,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  name2: {
    backgroundColor: _TextBackgroundColor,
    maxWidth: "80%",
    padding: 10,
    borderRadius: 20,
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  name3: {
    backgroundColor: "#fff",
    maxWidth: "80%",
    padding: 10,
    borderRadius: 20,
    marginBottom: 8,
    alignSelf: "flex-start"
  },
  name4:{
    // maxWidth:"100%"
  },
  txtprimeparent3: {
    width: "100%",
    flexDirection: "column-reverse",
    // flexDirection: "row",
    // alignItems:"flex-start"
    // paddingLeft: 10,
    // marginRight:30,
  },
  date: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  dateText: {
    // color: _TextColor,
    fontSize: 11,
    color: _dateColor,
    width: "20%",
    textAlign: "right",
  },
  TextText: {
    color: _TextColor,
    fontSize: 16,
  },
  dateText2: {
    fontSize: 11,
    color: _dateColor,
    textAlign: "right",
  },
  txtprimeparent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  txtprimeparent2: {
    width: "85%",
  },
  signUpTxt: {
    fontSize: 16,
    color: "black",
  },
  signUpBtn: {
    width: '100%',
  },
  shadow6: {
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  ImageView: {
    height: "88%",
    width: widthPercentageToDP("100%")
  },
  ImageView3: {
    height: "100%",
    width: "100%",
  },
  ImageView4: {
    minWidth: 250,
    minHeight: 300,
    borderRadius: 6,
    // elevation:9
    // padding:10,
    // alignItems:"center"
  },
  Imagetext: {
    alignItems: "flex-end",
    // textAlign:"end",
    color: _TextColor,
    fontSize: 16,
  },
};
export default styling;