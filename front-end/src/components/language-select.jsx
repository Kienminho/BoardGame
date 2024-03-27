import { Select } from "antd";

const LanguageSelect = () => {
  return (
    <div>
      <Select
        style={{ width: 50, textAlign: "center" }}
        suffixIcon={null}
        defaultValue="vi"
        options={[
          { value: "vi", label: "Vi" },
          { value: "en", label: "En" },
        ]}
      />
    </div>
  );
};

export default LanguageSelect;
