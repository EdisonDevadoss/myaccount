import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    textAlign: "center",
    fontSize: wp("7%")
  },
  buttonsStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: hp("8%")
  },
  button1: {
    // marginHorizontal: wp("3%")
  }
});

export default styles;
