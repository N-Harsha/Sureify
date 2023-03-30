import { useState, useEffect } from "react";
import { deflate } from "zlib";
const useLocalStorageState = (key: string, initalState: any) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key) ?? JSON.stringify(initalState))
  );
  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value]);
  return [value, setValue];
};

export default useLocalStorageState;
