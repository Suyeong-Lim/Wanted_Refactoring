import React, { useCallback, useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");

  const onChangeMessage = useCallback((e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  }, []);
  return [value, onChangeMessage];
}
