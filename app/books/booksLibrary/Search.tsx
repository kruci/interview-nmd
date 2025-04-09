import { SearchOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { ChangeEventHandler } from "react";
import { useDispatch } from "react-redux";
import { StoreDispatch } from "../store/appStore";
import { updateSearchValue } from "../store/bookSearchSlice";

export const Search = () => {
  const dispatch = useDispatch<StoreDispatch>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;
    dispatch(updateSearchValue(newValue));
  };

  const handleClear = () => {
    dispatch(updateSearchValue(""));
  };

  return (
    <Input
      placeholder="Search for books"
      allowClear
      onClear={handleClear}
      onChange={handleChange}
      suffix={
        <Tooltip title="Extra information">
          <SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />
        </Tooltip>
      }
    />
  );
};
