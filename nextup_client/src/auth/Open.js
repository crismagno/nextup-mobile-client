import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import ScreenDefault from './../components/ScreenDefault'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const Open = () => {
  return (
    <>
      <ScreenDefault>
          <TouchableOpacity style={styles.btnDefault('#8A56AC')}>
              <Text style={styles.textBtn}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDefault('#241332')}>
              <Text style={styles.textBtn}>SIGN UfP</Text>
          </TouchableOpacity>
      </ScreenDefault>
    </>
  );
};

const styles = StyleSheet.create({
    btnDefault(color) {
        return {
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            marginVertical: 12,
            paddingVertical: 14,
            width: WIDTH / 1.8,
            borderRadius: 25,
            backgroundColor: color || '#FFF' 
        }
    },

    // text--------------
    textBtn: {
        color: '#FFF'
    }
});

export default Open;
