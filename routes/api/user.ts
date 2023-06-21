import { Handlers } from "$fresh/server.ts";
import usersModel from "../../model/user.model.ts";
// import { sendMail } from "../../server/smtp_config.ts";

export const handler: Handlers = {
  async GET(_, _ctx) {
    const response = await usersModel.find().toArray();

    return new Response(JSON.stringify(response));
  },
  async POST(req) {
    const { fullname, comment, email } = await req.json();

    try {
      // await sendMail(email, fullname);
      await usersModel.insertOne({
        fullName: <string> fullname,
        comment: <string> comment,
        email: <string> email,
      });
    } catch (error) {
      return new Response("Internal Server Error : " + error.message, {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: "OK" }), {
      status: 201,
    });
  },
};
