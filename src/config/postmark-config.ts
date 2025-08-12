import { ServerClient } from "postmark";

const postmarkClient = new ServerClient(process.env.POSTMARK_API_KEY as string);

export default postmarkClient;
