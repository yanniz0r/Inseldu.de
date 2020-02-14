import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';

const ImagesAPIEndpoint = async (_: NextApiRequest, response: NextApiResponse) => {
    const imagesDirectory = fs.readdirSync("public/images");
    response.send(
        imagesDirectory.map(file => ({
            url: `/images/${encodeURI(file)}`,
            title: file.replace(/\..+/g, "")
        }))
    );
}

export default ImagesAPIEndpoint;