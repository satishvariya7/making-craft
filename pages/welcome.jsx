import { AsyncComponent } from "../util";

const Welcome = AsyncComponent(() =>
  import("../routes/userAuth/CreateAccount/Welcome")
);

const WelcomePage = () => <Welcome />;

export default WelcomePage;
