import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ConfigProvider, App } from "antd";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <App>
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: "#rgb(102 67 27)",
            colorPrimary: "black",
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ConfigProvider>
    </App>
  );
};

export default Providers;
