// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "../admin-config";
import { serverTime } from "../helpingMethods";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, provider, profilePicture, token, uid, teacherId, classId } =
        req?.body?.params;
      var data = {};
      if (firstName !== undefined) {
        await db.ref(`ce_users/${uid}`).set({
          accountType: "student",
          address: "",
          classId,
          createdAt: serverTime,
          currentAccountBalance: 0,
          currentJobPosition: "N/A",
          deletedAt: "",
          displayName: `${firstName} ${lastName}`,
          email,
          firstName,
          key: uid,
          isActive: true,
          isDeleted: "",
          lastName,
          profilePicture: profilePicture ? profilePicture : "https://github.com/identicons/jasonlong.png",
          provider,
          teacherId,
          updatedAt: serverTime,
        });
      } else {
        data = (await db.ref(`ce_users`).get()).val();
        var isEmailExist = Object.keys(data).some(function (k) {
          if (data[k].email === email) {
            return data;
          }
        });
        if (isEmailExist) {
          res.status(200);
        } else {
          await db.ref(`ce_users/${uid}`).set({
            email,
            firstName,
            lastName,
            address: "",
            displayName: `${firstName} ${lastName}`,
            educationLevel: "elementary",
            profilePicture: profilePicture ? profilePicture : "https://github.com/identicons/jasonlong.png",
            provider,
            classId: "",
            accountType: "teacher",
            key: uid,
            isActive: true,
            createdAt: serverTime,
            updatedAt: serverTime,
            token,
          });
        }
      }
      res.status(200).json({ Message: "Register successful" });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
