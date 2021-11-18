import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import { routes } from "./routes/Routes";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
      <Routes>
        {
          routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            ></Route>
          );
        })
        }
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
