import { Result, Button } from "antd";

const Error = () => {
  return (
    <div className="flex items-center justify-center">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
};

export default Error;
