import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import { ImagesAPIResponse } from "../../types/api";
import { resolve, join } from 'path';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const imagesPath = join(serverRuntimeConfig["PROJECT_ROOT"], "public", "images")

const ImagesAPIEndpoint = async (_: NextApiRequest, response: NextApiResponse) => {
    console.log(resolve("public/images"))
    const imagesDirectory = fs.readdirSync(imagesPath);
    const responseData: ImagesAPIResponse = imagesDirectory.map(file => ({
        url: `/images/${encodeURI(file)}`,
        title: file.replace(/\..+/g, "")
    }));
    response.send(responseData);
}

export default ImagesAPIEndpoint;