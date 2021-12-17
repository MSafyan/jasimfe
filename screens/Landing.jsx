import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import biker from "../assets/images/biker.png";
import { icons, COLORS, SIZES, FONTS } from "../constants";

const Landing = ({ navigation }) => {
  const scrollX = new Animated.Value(0);
  const [restaurant, setRestaurant] = React.useState(null);
  // const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);
  const [covers, setCovers] = React.useState([biker]);

  React.useEffect(() => {
    // let { item, currentLocation } = route.params;

    // setRestaurant(item);
    // setCurrentLocation(currentLocation);
    console.log(biker);
  });

  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}>
        {covers.map((item, index) => (
          <View
            key={`menu-${index}`}
            style={{
              alignItems: "center",

              justifyContent: "center",
            }}>
            <View style={{ height: SIZES.height * 0.35 }}>
              {/* Food Image */}
              <Image
                source={item}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: "100%",
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                  ...FONTS.regularBold,
                }}>
                Top{" "}
                <Text
                  style={{
                    textAlign: "center",
                    color: COLORS.primary,
                    ...FONTS.regularBold,
                  }}>
                  #1
                </Text>{" "}
                Fastest
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  marginBottom: 20,
                  color: "black",
                  ...FONTS.regularBold,
                }}>
                Delivery Food For You
              </Text>
            </View>
            <View style={styles.textContainer2}>
              <Text
                style={{
                  textAlign: "center",
                  ...FONTS.body4,
                  color: "#d0d0d0",
                }}>
                Our job is filling your tummy with delicious with food and fast
                delivery
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{ height: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: SIZES.padding,
          }}>
          {restaurant?.menu.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp",
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderOrder() {
    return (
      <View>
        {renderDots()}
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}>
          {/* Order Button */}
          <View
            style={{
              padding: SIZES.padding * 2,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.7,
                padding: SIZES.padding,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                borderRadius: SIZES.radius,
              }}
              onPress={() => navigation.navigate("RegisterScreen")}>
              <Text style={{ color: COLORS.white, ...FONTS.regular }}>
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.7,
                padding: SIZES.padding,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                borderRadius: SIZES.radius,
              }}
              onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={{ color: COLORS.white, ...FONTS.regular }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {renderFoodInfo()}
        {renderOrder()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fcfbf9",
  },
  subContainer: {
    flex: 1,
    paddingTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textContainer: {
    textAlign: "center",
    width: "70%",
  },
  textContainer2: {
    textAlign: "center",
    width: "70%",
  },
});

export default Landing;
