import { AsyncComponent } from "../../util";

const Main = AsyncComponent(() => import("../../routes/Main"));

const MainPage = () => {
  return <Main />;
};

export default MainPage;
