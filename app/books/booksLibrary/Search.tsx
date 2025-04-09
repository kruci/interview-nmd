import { SearchOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { StoreDispatch } from "../store/appStore";
import { updateSearchValue } from "../store/bookSearchSlice";
import { debounce } from "lodash";
import { useCallback, useMemo } from "react";

export const Search = () => {
  const dispatch = useDispatch<StoreDispatch>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      dispatch(updateSearchValue(newValue));
    }, 400),
    [dispatch]
  );

  const handleClear = useCallback(() => {
    dispatch(updateSearchValue(""));
  }, [dispatch]);

  const renderedInputSuffix = useMemo(
    () => (
      <Tooltip title="Extra information">
        <SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />
      </Tooltip>
    ),
    []
  );

  return (
    <Input
      placeholder="Search for books"
      allowClear
      onClear={handleClear}
      onChange={debouncedHandleChange}
      suffix={renderedInputSuffix}
    />
  );
};
