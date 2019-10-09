import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import HeaderFinder from '../../components/HeaderFinder';

class Suggest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderFinder/>
                <View style={styles.content}>
                    <View style={styles.friendIcon}>
                        <Ionicons
                            name='md-person'
                            color='#FB5200'
                            size={38}/>
                    </View>
                    <Text style={styles.textContent}>
                        Strava doesn't have any suggested people for you to follow yet.
                    </Text>
                </View>
                <View style={styles.bottomContent}>
                    <TouchableOpacity
                        style={styles.btnBottom}>
                        <Text style={styles.txtBtnContent}>Invite Friends</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Suggest;