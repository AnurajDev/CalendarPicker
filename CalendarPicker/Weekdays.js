import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Utils } from "./Utils";

export default function Weekdays(props) {
  const { styles, startFromMonday, weekdays, textStyle, noBorder } = props;
  let wd = weekdays;
  if (!wd) {
    wd = startFromMonday ? Utils.WEEKDAYS_MON : Utils.WEEKDAYS; // English Week days Array
  }

  return (
    <View
      style={StyleSheet.flatten([
        styles.dayLabelsWrapper,
        noBorder && { borderTopWidth: 0, borderBottomWidth: 0 }
      ])}
    >
      {wd.map((day, key) => {
        return (
          <Text key={key} style={[styles.dayLabels, textStyle]}>
            {day}
          </Text>
        );
      })}
    </View>
  );
}

Weekdays.propTypes = { noBorder: PropTypes.bool };
