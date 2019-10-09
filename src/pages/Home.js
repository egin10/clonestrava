import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerBar}>
                    <View style={styles.menuLeft}>
                        <Icon
                            name='md-menu'
                            color='#fff'
                            size={25}/>
                        <Text style={styles.textMenu}>Feed</Text>
                    </View>
                    <View style={styles.menuRight}>
                        <Icon
                            name='md-people'
                            color='#fff'
                            size={25}
                            style={{marginRight:30}}/>
                        <Icon
                            name='md-notifications'
                            color='#fff'
                            size={25}/>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.textHeader}>
                        Build your community
                    </Text>
                    <Text style={styles.textContent}>
                        This is Where your friend's activities will appear.
                        Follow your most active friends using Strava to track their adventures and share some encouragement.
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.btnPlus}>
                        <Icon
                            name='md-add'
                            color='#fff'
                            size={25}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    container : {
        flex: 1,
    },
    headerBar: {
        backgroundColor:'#FB5200', 
        height: 56, 
        width:'100%',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
    },
    menuLeft : {
        flexDirection: 'row',
    },
    menuRight : {
        flexDirection: 'row',
    },
    textMenu: {
        color:'#fff', 
        fontSize:16, 
        fontWeight:'bold',
        marginLeft:30
    },
    content : {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 22,
    },
    textHeader: {
        fontSize: 16,
    },
    textContent: {
        fontSize: 14, 
        color: '#76777C', 
        textAlign: 'center',
    },
    btnPlus: {
        backgroundColor:'#FB5200', 
        height:56, 
        width:56,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom : {
        height: 74, 
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 18,
        paddingRight: 13,
    }
}

export default Home;