import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import { ImagesAPIResponse } from "../../types/api";
import { resolve, join } from 'path';

const imagesPath = join(process.cwd(), "public", "images")

const ImagesAPIEndpoint = async (_: NextApiRequest, response: NextApiResponse) => {
    const imagesDirectory = fs.readdirSync(imagesPath);
    const responseData: ImagesAPIResponse = imagesDirectory.map(file => ({
        url: `/images/${encodeURI(file)}`,
        title: file.replace(/\..+/g, "")
    }));
    response.send(responseData);
}

export default ImagesAPIEndpoint;