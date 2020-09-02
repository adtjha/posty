import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 4,
    marginTop: 16,
    marginVertical: 8,
    marginHorizontal: 0,
    overflow: "hidden",
  },
  image: {
    height: 240,
    marginHorizontal: -4,
    marginVertical: -4,
  },
  title: {
    fontSize: 18,
    padding: 10,
    marginTop: 5,
    borderStyle: "dotted",
    borderBottomWidth: 1,
    borderColor: "#efefef",
  },
  para: {
    fontSize: 14,
    padding: 10,
    marginBottom: 5,
  },
});

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(
      "http://newsapi.org/v2/top-headlines?country=in&apiKey=11b5a4ec5796460a8a5e8713b87c3692"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ hits: data.articles, isLoading: false }));
  }

  render() {
    const { hits, isLoading } = this.state;

    if (isLoading) {
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#2f2f2f"
            style={{
              flex: 1,
              alignSelf: "center",
            }}
          />
        </SafeAreaView>
      );
    }
    const renderItem = ({ item }) => <Item content={item} />;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={hits}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const Item = ({ content }) => (
  <View style={styles.item} key={content.publishedAt}>
    <Image
      style={styles.image}
      source={{ uri: content.urlToImage }}
      resizeMode="stretch"
    />
    <Text style={styles.title}>{content.title}</Text>
    <Text style={styles.para}>{content.description}</Text>
  </View>
);

export default Posts;
