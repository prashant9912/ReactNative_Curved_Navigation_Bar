import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Dimensions,
  Platform,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

const SLIDER_POSITIONS = [
  (2 * 1 - 1) * ((1 * (width / 5)) / 2) + 85,
  (2 * 5 - 1) * ((1 * (width / 5)) / 2) + 86,
];

export default class CurvedNavBar extends Component {
  state = {
    iconColor: 'black',
    primColor: '#4687FD',
    selectedIconColor: 'white',
    mainOffSetIos: 20,
    mainOffSetAndroid: 0,
    yoffset: -30,
    iconSize: 25,
    selected: this.props.selected || 1,
    fadeValue: new Animated.Value(1),
    sliderPosition: new Animated.Value(this.props.selected || 1),
  };

  componentDidMount() {
    const {icons, iconColor, navColor, selectedIconColor} = this.props;
    this.setState({
      icon1: icons[0],
      icon2: icons[1],
      icon3: icons[2],
      icon4: icons[3],
      icon5: icons[4],
      iconColor: iconColor || 'black',
      primColor: navColor || '#4687FD',
      selectedIconColor: selectedIconColor || 'white',
    });

    this.startAnimation(this.state.selected);
  }

  startAnimation = selected => {
    const {fadeValue, sliderPosition} = this.state;
    const id = `id${selected}`;
    const hh = `h${selected}`;
    const idd = `i${selected}`;
    const h = `hh${selected}`;

    const a = this.state[id];
    const b = this.state[hh];
    const c = this.state[idd];
    const d = this.state[h];

    Animated.timing(a, {toValue: 0, duration: 100}).start();
    Animated.timing(b, {toValue: 100, duration: 100}).start();
    Animated.timing(c, {toValue: 1, duration: 200}).start();
    Animated.timing(d, {toValue: 5, duration: 300}).start();

    this.showAll(selected);
    Animated.timing(sliderPosition, {toValue: selected, duration: 200}).start();
  };

  showAll = selected => {
    for (let i = 1; i <= 5; i++) {
      if (i !== selected) {
        const id = `id${i}`;
        const idd = `i${i}`;
        const h = `hh${i}`;
        const hh = `h${i}`;
        const d = this.state[h];
        const a = this.state[id];
        const b = this.state[hh];
        const c = this.state[idd];
        Animated.timing(a, {toValue: 1, duration: 200}).start();
        Animated.timing(b, {toValue: 0, duration: 200}).start();
        Animated.timing(c, {toValue: 0, duration: 200}).start();
        Animated.timing(d, {toValue: 10, duration: 200}).start();
      }
    }
  };

  render() {
    const {
      iconSize,
      yoffset,
      selectedIconColor,
      iconColor,
      primColor,
      sliderPosition,
    } = this.state;

    const navrr = sliderPosition.interpolate({
      inputRange: [1, 5],
      outputRange: SLIDER_POSITIONS,
      extrapolate: 'clamp',
    });

    const off =
      Platform.OS === 'ios'
        ? height
        : height + 20 - (this.props.mainOffSetAndroid || 0);

    return (
      <View style={{position: 'absolute', top: off}}>
        <View
          style={{
            backgroundColor: primColor,
            position: 'absolute',
            width,
            height: 83,
            bottom: 30 + yoffset,
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 10,
          }}
        />
        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            bottom: -20 + yoffset,
            width,
            height: 100,
          }}
        />

        <Animated.View style={{position: 'absolute', bottom: 0, left: navrr}}>
          <View
            style={{
              backgroundColor: primColor,
              position: 'absolute',
              bottom: 65.5 + yoffset,
              width: 45,
              right: 61.8,
              height: 45,
              borderRadius: 40,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 0 + yoffset,
              right: 100,
              width,
              height: 100,
              borderRadius: 40,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 0 + yoffset,
              right: Platform.OS === 'ios' ? -345 : -343,
              width,
              height: 100,
              borderRadius: 40,
            }}
          />
        </Animated.View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width,
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 20,
          }}>
          {Array.from({length: 5}, (_, i) => (
            <TouchableOpacity
              key={i}
              onPressOut={() => this.startAnimation(i + 1)}>
              <Animated.View
                style={{
                  opacity: this.state[`i${i + 1}`],
                  top: this.state[`hh${i + 1}`],
                }}>
                <Icon
                  name={this.state[`icon${i + 1}`]}
                  size={iconSize}
                  color={selectedIconColor}
                />
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: -20,
            width,
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 20,
          }}>
          {Array.from({length: 5}, (_, i) => (
            <TouchableOpacity
              key={i}
              onPressOut={() => this.startAnimation(i + 1)}
              style={styles.wicon}>
              <Animated.View
                style={{
                  opacity: this.state[`id${i + 1}`],
                  top: this.state[`h${i + 1}`],
                }}>
                <Icon
                  name={this.state[`icon${i + 1}`]}
                  size={30}
                  color={iconColor}
                />
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wicon: {
    alignItems: 'center',
    width: width / 6,
    paddingTop: 10,
    top: -10,
  },
});
