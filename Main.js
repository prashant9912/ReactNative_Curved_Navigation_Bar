import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CurvedNavBar from './NavBar/navbar';

const {height} = Dimensions.get('window');

const Main = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <View style={styles.container}>
      {page === 1 && (
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => setPage(1)}>
            <Text style={styles.title}>React Native Curved Nav Bar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://github.com/prashant9912/ReactNative_Curved_Navigation_Bar',
              )
            }
            style={styles.githubLink}>
            <Icon name="github" size={30} />
            <Text>Open on Github</Text>
          </TouchableOpacity>
        </View>
      )}

      {page >= 2 && (
        <View style={styles.content}>
          <Text style={styles.pageTitle}>Page {page}</Text>
        </View>
      )}

      <CurvedNavBar
        icons={['air-horn', 'alarm', 'android-auto', 'auto-fix', 'bell-ring']}
        navColor={'#482ff7'}
        cb={handlePageChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignSelf: 'center',
    marginTop: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  githubLink: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: height / 2,
    alignSelf: 'center',
  },
});

export default Main;
