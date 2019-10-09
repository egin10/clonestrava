import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderFinder = () => {
    return (
        <View style={styles.headerBar}>
            <View style={styles.menuLeft}>
                <TouchableOpacity onPress={() => Actions.pop()}>
                    <Ionicons
                        name='md-arrow-back'
                        color='#fff'
                        size={25}/>
                </TouchableOpacity>
                <Text style={styles.textMenu}>Find and Invite</Text>
            </View>
            <View style={styles.menuRight}>
                <AntDesign
                    name='search1'
                    color='#fff'
                    size={25}/>
            </View>
        </View>
    );
};

const styles = {
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
}

export default HeaderFinder;