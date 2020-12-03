
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar, View,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import EventItem from './eventItem';

const eventsList = [
  {
    id: 1,
    title: 'Sunder super club beach',
    description:
      "It's an events uqusshdc snv hqe dqnzvgezqzne qzvbezqnv nqszvgeygqze zqvygyqezq vsqzyvyhezq vhbveyz hbYQCVH<QD Bbchqc qhvvzgvzeg bhqc qhvgvagava ",
    date: '13th Nov',
    hours: '12:00 - 19:00',
    address: 'London city',
  },
  {
    id: 1,
    title: 'Sunder super club',
    description: "It's an events",
    date: '13th Nov',
    hours: '12:00 - 19:00',
    address: 'London city',
  },
];

const App = () => {
  return (
    < View style={styles.body}>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <FlatList
          data={eventsList}
          renderItem={({item}) => <EventItem value={item}/>}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.black,
    color:Colors.white,
  },
});

export default App;
