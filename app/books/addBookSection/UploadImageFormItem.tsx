import React, { useState } from "react";
import { Button, Upload, UploadFile } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";
import styles from "./UploadImageFormItem.module.css";

/**
 * All props are optional, as they are passed by parent Form.Item instead of developer
 */
type UploadImageFormItemProps = {
  value?: UploadFile;
  onChange?: (value: UploadFile) => void;
};

export const UploadImageFormItem = ({
  value,
  onChange,
}: UploadImageFormItemProps) => {
  const [hasFile, setHasFile] = useState(false);

  const handleUploadChange = (info: UploadChangeParam<UploadFile>) => {
    const file = info?.fileList?.[0];
    onChange?.(file);
    setHasFile(!!file);
  };

  return (
    <Upload
      maxCount={1}
      listType="picture"
      onChange={handleUploadChange}
      fileList={!!value ? [value] : []}
      className={styles.upload}
    >
      {!hasFile && <Button icon={<UploadOutlined />}>Select a picture</Button>}
    </Upload>
  );
};
