import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5", // Light gray background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333", // Dark gray text
    fontFamily: "Arial", // Stylish font
  },
  button: {
    backgroundColor: "green", // Coral color for buttons
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Arial",
  },
});

const stylesCamera = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34", // Dark background
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainer: {
    flex: 1,
    width: "100%",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FF6F61", // Coral color for buttons
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Arial",
  },
});

const stylesSignInAndSignUp = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5", // Light gray background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
    fontFamily: "Arial",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#FF6F61", // Coral border color for input
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#6B5B95", // Purple color for the button
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Arial",
  },
  error: {
    color: "#ff0000",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    opacity: 0.7,
  },
  link: {
    color: "#FF6F61", // Coral color for links
    fontWeight: "bold",
    fontFamily: "Arial",
  },
});

const stylesImageScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5", // Light gray background
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#FF6F61", // Coral color for buttons
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Arial",
  },
});

const faceDetection = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#6B5B95", // Purple color for buttons
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Arial",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF6F61", // Coral color for information text
    textAlign: "center",
    fontFamily: "Arial",
  },
  result: {
    color: "#6B5B95", // Purple color for result text
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.8,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Arial",
  },
});

export {
  stylesHome,
  stylesCamera,
  stylesSignInAndSignUp,
  stylesImageScreen,
  faceDetection,
};
