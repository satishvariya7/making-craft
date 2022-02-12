import { AsyncComponent } from "../util";

const SignIn = AsyncComponent(() => import("../routes/userAuth/SignIn"));

const SignInPage = () => <SignIn />;

export default SignInPage;
