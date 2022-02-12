import { db } from "../admin-config";
import { getUserId } from "../helpingMethods";

const handler = async (req, res) => {
  const userToken = getUserId(req?.headers?.cookie);
  if (req.method === "GET") {
    try {
      const user = (await db.ref(`users/${userToken}`).get()).val();
      res.status(200).send(user);
    } catch (error) {
      console.log("🚀 ~ file: getUserInfo.js ~ line 11 ~ handler ~ error", error);
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
