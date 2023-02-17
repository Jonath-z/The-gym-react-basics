import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./Exercise6";
import Exercise1 from "./Exerice1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Exercise1 />,
  },
  {
    path: "/exercise2",
    element: <Exercise2 />,
  },
  {
    path: "/exercise3",
    element: <Exercise3 />,
  },
  {
    path: "/exercise4",
    element: <Exercise4 />,
  },
  {
    path: "/exercise5",
    element: <Exercise5 />,
  },
  {
    path: "/exercise6",
    element: <Exercise6 />,
  },
]);

function App() {
  return (
    <div>
      <nav className="fixed px-10 top-0 left-0 right-0 w-full py-5 flex gap-5">
        <a href="/">Exercise1</a>
        <a href="/exercise2">Exercise2</a>
        <a href="/exercise3">Exercise3</a>
        <a href="/exercise4">Exercise4</a>
        <a href="/exercise5">Exercise5</a>
        <a href="/exercise6">Exercise6</a>
      </nav>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
