import { AsyncComponent } from "../util";

const ResetPassword = AsyncComponent(() => import("../routes/userAuth/ResetPassword"));

const ResetPasswordPage = () => <ResetPassword />;

export default ResetPasswordPage;
