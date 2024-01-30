import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";

type UseQueryParamsStateReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export const useQueryParamsState = <T>(
  param: string,
  initialState: T
): UseQueryParamsStateReturnType<T> => {
  const location = useLocation();

  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialState;
    const { search } = window.location;
    const searchParams = new URLSearchParams(search);

    const paramValue = searchParams.get(param);

    let parsedValue: T;

    if (paramValue !== null) {
      // Custom logic for parsing other types if needed
      parsedValue = JSON.parse(paramValue) as T;
    } else {
      parsedValue = initialState;
    }

    return parsedValue;
  });

  useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    if (value !== null && value !== "") {
      // Custom logic for stringifying other types if needed
      currentSearchParams.set(param, JSON.stringify(value));
    } else {
      currentSearchParams.delete(param);
    }

    const newUrl = [window.location.pathname, currentSearchParams.toString()]
      .filter(Boolean)
      .join("?");

    window.history.replaceState(window.history.state, "", newUrl);
  }, [param, value, location.pathname]);

  return [value, setValue];
};
