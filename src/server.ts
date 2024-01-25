import mongoose from "mongoose";
import { app } from "./app";
import dotenv from "dotenv";
import ApiError from "./error/ApiError";
dotenv.config();


const port = 5000;

async function main () {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        app.listen(port, () => {
            console.log(`cow-hut server is running listening on port ${port}🎆😍`);
        });
    } catch (error) {
        throw new ApiError(500, "something went wrong server error")
    }
}
main()