import { StyleSheet } from "react-native";
// import Colors with alias
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
  block: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginHorizontal: 14,
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.lightGray,
    marginLeft: 50,
  },
});
