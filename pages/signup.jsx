import { AsyncComponent } from "../util";

const SignUp = AsyncComponent(() => import("../routes/userAuth/SignUp"));

const SignUpPage = () => <SignUp />;

export default SignUpPage;
