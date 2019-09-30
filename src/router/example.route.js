import { asyncComponent } from "../components/Utilities";

export const exampleRoute = [
  {
    path: "/example",
    component: asyncComponent(() =>
      import("../components/Pages/ExamplePage/index")
    ),
    exact: true
  }
];
