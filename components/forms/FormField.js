import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        style={styles.input}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

// style={{color:'red'}}

const styles = StyleSheet.create({
  input:{
    width:"100%",
    padding:4
  },
});

export default AppFormField;
