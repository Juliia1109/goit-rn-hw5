import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function DefaultScreenPosts({ route, navigation }) {
  const [posts, setPosts] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          source={require("../../assets/images/Rectangle.jpg")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{ uri: item.photo }}
              style={{ ...styles.image, width: width - 32 }}
            />
            <Text style={styles.name}></Text>
            <View style={styles.btn}>
              <TouchableOpacity
                style={styles.comment}
                onPress={() => navigation.navigate("Comments")}
              >
                <EvilIcons
                  name="comment"
                  size={24}
                  color="#bdbdbd"
                  style={{ marginRight: 6 }}
                />
                <Text style={styles.comments}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.location}
                onPress={() => navigation.navigate("Map")}
              >
                <EvilIcons
                  name="location"
                  size={24}
                  color="#bdbdbd"
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.place}></Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
    marginTop: 32,
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
  },
  userName: {
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
    fontFamily: "Roboto-Bold",
  },
  userEmail: {
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
    fontFamily: "Roboto-Regular",
  },
  item: {
    marginBottom: 32,
  },
  image: {
    borderRadius: 8,
    height: 240,
  },
  name: {
    marginTop: 8,
    alignSelf: "flex-start",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    fontFamily: "Roboto-Medium",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comment: {
    marginRight: 10,
    maxWidth: "20%",
    flexDirection: "row",
  },
  comments: {
    color: "#bdbdbd",
    fontSize: 16,
    lineHeight: 19,
  },
  location: {
    maxWidth: "80%",
    flexDirection: "row",
  },
  place: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
  },
});
