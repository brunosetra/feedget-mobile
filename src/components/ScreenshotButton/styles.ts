import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    position: "relative",
  },
  removeIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
