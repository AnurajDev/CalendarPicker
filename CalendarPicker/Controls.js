import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Controls({ styles, textStyles, label, onPressControl }) {
  return (
    <TouchableOpacity
      onPress={() => onPressControl()}
    >
      <Text style={[styles, textStyles]}>
        { label }
      </Text>
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element.isRequired]),
  onPressControl: PropTypes.func.isRequired,
};
