import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

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
                        <TouchableOpacity onPress={() => Actions.suggest()}>
                            <Icon
                                name='md-people'
                                color='#fff'
                                size={25}
                                style={{marginRight:30}}/>
                        </TouchableOpacity>
                        <Icon
                            name='md-notifications'
                            color='#fff'
                            size={25}/>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.friendIcon}>
                        <Icon
                            name='md-person-add'
                            color='#FB5200'
                            size={35}/>
                    </View>
                    <Text style={styles.textHeader}>
                        Build your community
                    </Text>
                    <Text style={styles.textContent}>
                        This is Where your friend's activities will appear.
                        Follow your most active friends using Strava to track their adventures and share some encouragement.
                    </Text>
                    <TouchableOpacity
                        style={styles.btnContent}>
                        <Text style={styles.txtBtnContent}>Find Friends on Strava</Text>
                    </TouchableOpacity>
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

export default Home;