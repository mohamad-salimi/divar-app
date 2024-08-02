import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "configs/reactQuery";
import { BrowserRouter } from "react-router-dom";
import Router from "router/Router";
import Layout from "./layout/Layout";

function App() {
  const queryClient = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
