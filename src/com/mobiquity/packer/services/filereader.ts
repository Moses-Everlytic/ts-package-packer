import fs from "fs";
import ApiError from "../error";

export default function readFileLines(fileDir: string): string[] {

    if (fs.existsSync(fileDir)) {
        try {
            return fs.readFileSync(fileDir, { encoding: 'utf-8' }).split(/\r?\n/);
        } catch (error) {
            throw new ApiError("Invalid file"); 
        }
    } else {
        throw new ApiError("No File Not Found");
    }
}