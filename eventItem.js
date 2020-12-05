import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { Icon } from 'react-native-elements';

class EventItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            activeItem: props
        }
        console.log(this.state.activeItem);
    }
  render() {
    const event = this.state.activeItem;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.viewLines}>
            <Text style={styles.dateEvent}>{event.date}</Text>
        </View>
        <View style={styles.viewLines}>
            <Text style={styles.titleEvent}>{event.title}</Text>
            <View style={styles.separator}/>
        </View>
        <View style={styles.viewLines}>
            <Text style={styles.titleEvent}>{event.hours}</Text>
            <View style={styles.separator}/>
        </View>
        <View style={styles.viewLines}>
            <Text style={styles.descriptionEvent}>{event.description}</Text>
        </View>
        <View style={styles.viewLines}>
            <Icon
                name='plus'
                type='evilicon'
                color="#AD6C23"
                />
                <Text style={styles.buttonDetail}>Event Details</Text>
        </View>
          <View style={styles.separator}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    separator:{
        height:"1px",
        width:"100%",
        backgroundColor:"#FFF",
        opacity:"0.5"
    },
    mainContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"center"
    },
    dateEvent:{
        fontSize:"18px",
        fontWeight:"bold"
    },
    titleEvent:{
        fontWeight: "medium",
        fontSize: "16px"
    },
    descriptionEvent:{
        display: "flex",
        flexWrap:"wrap",
        opacity: "0.7",
        fontWeight: "light",
        ellipse:true
    },
    viewLines:{
        display:"flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
    },
    buttonDetail:{
        marginLeft:"5px"
    }

});

export default EventItem;
