import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

interface Props {
  title: string;
  // onPress: () => void;
  backgroundColor?: string;
  color?: string;
}

export const ButtonSpinner: React.FunctionComponent<Props> = (props: Props) => {
  const [submit, setSubmit] = useState(false);
  const { title, backgroundColor, color, height, width } = props;
  return (
    <TouchableOpacity style={{ ...styles.ButtonWithSpinner, backgroundColor,height, width }} onPress={() => {
      if (true) {
        setSubmit(!submit);
      }
    }}>
      <Text style={{ ...styles.submitSpinnerText, color }}>{title} </Text>
      {submit ? (
        <ActivityIndicator style={{ marginLeft: 10 }} color={'yellow'} size="small" />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonWithSpinner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: Color.BUTTON,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  submitSpinnerText: {
    fontSize: 20,
    fontWeight: '400',
    // color: '#fff',
  },
});