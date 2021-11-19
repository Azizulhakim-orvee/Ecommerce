import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import { routes } from "./routes/Routes";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JxaHgDbuBlBISJPMu0AwlDmQg8B1gPdPuAMkplAsDWn2UjgjDJdG5X44CHc2LGpw4fREaxZtcMKfNFSp6TqZVc400w9qiky6A"
);

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "{{sk_test_51JxaHgDbuBlBISJP8zGjyZH2TL1eC6wlGeDvlWEXiLxK0GhaQXgMwPbGoZNo1i6yYjsGzs2IbjU0k4kb599uh9TF00TSz7kChE}}",
  };
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Elements stripe={stripePromise} options={options}>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                ></Route>
              );
            })}
          </Routes>
        </Elements>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
