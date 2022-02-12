import nextConnect from "next-connect";
import { verifyJWT } from "../util/helpers";

async function protectedRoute(req, res, next) {
  const { Event, User } = req;
  const { authorization } = req.headers;
  const authInfo = authorization ? authorization.split(" ") : [];
  if (authInfo.length && authInfo.length > 0) {
    const jsonwt = authInfo[1];

    const verifiedJWT = await verifyJWT(jsonwt);

    let loggedInUser = null;
    let event = null;
    if (verifiedJWT) {
      loggedInUser = await User.findOne({ username: verifiedJWT.username });
      event = await Event.findOne({ _id: verifiedJWT._id });
    }

    if (
      (verifiedJWT &&
        loggedInUser &&
        verifiedJWT.username === loggedInUser.username) ||
      (verifiedJWT && loggedInUser && verifiedJWT.username === event.username)
    ) {
      if (
        loggedInUser.jwtToken !== undefined &&
        loggedInUser.jwtToken !== null &&
        loggedInUser.jwtToken === jsonwt &&
        !loggedInUser.isBlocked
      ) {
        req.authenticatedUser = verifiedJWT;
        return next();
      }
    }
    res.statusCode = 401;
  }

  res.json({ status: "error", data: {}, message: "Unauthorized" });
}

const middleware = nextConnect();

middleware.use(protectedRoute);

export default middleware;
