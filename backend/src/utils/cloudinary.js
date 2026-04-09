import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECERT
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader
            .upload(localFilePath, {
                resource_type: "raw",
            })

            fs.unlinkSync(localFilePath);
            return response;
    }
    catch(error){
        fs.unlinkSync(localFilePath) // remove the local saved temporary
        console.log("Getting file upload error from : utils/cloudiinary.js");
        return null;
    }
}

export {uploadOnCloudinary};