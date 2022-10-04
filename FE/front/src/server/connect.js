import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const { MONGO_URI } = process.env;

export default async function connectMongoDB() {
    const client = new MongoClient(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    });
    console.log("connect started!");
    try {
        const base = await client.connect();
        const collect = base.db("whatever-note").collection("notes");
        const result = await collect.find({}).toArray();
        console.log("connected!!");
        console.log(result);
        return { statusCode: 200, body: JSON.stringify({ result }) };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 404,
            body: JSON.stringify({ error: "cannot get data!" }),
        };
    } finally {
        await client.close();
    }
}

connectMongoDB().catch(console.error);
