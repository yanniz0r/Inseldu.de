import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import { ImagesAPIResponse } from "../../types/api";

const ImagesAPIEndpoint = async (_: NextApiRequest, response: NextApiResponse) => {
    const imagesDirectory = fs.readdirSync("public/images");
    const responseData: ImagesAPIResponse = imagesDirectory.map(file => ({
        url: `/images/${encodeURI(file)}`,
        title: file.replace(/\..+/g, "")
    }));
    response.send(responseData);
}

export default ImagesAPIEndpoint;