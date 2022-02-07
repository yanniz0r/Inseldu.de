import { NextApiHandler } from "next";
import nodemailer from "nodemailer"

const mailerPromise = nodemailer.createTestAccount()

const contactApiHandler: NextApiHandler = async (request, response) => {
  nodemailer.createTransport({
    
  })
}

export default contactApiHandler
