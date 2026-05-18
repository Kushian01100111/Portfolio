import type {VercelRequest , VercelResponse} from "@vercel/node";
import {Resend} from "resend";


const resend = new Resend(process.env.RESEND_API_KEY) 

function escapeHtml(value: string): string{
    return value
    .replace("/&/g", "&amp;")
    .replace("/</g", "&lt;")
    .replace("/>/g", "&gt;")
    .replace('/"/g', "&quot;")
    .replace("/'/g", "&#039;");
}


export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({
            sucess: false,
            error: "Method not allowed"
        });
    }

    try{
        const {name, email, message} = req.body ?? {};

        if (!name || !email || !message) {
            return res.status(400).json({
                success : false,
                error: "Missing required fields"
            });
        }

        if (typeof name  != "string" || typeof email !== "string" ||  typeof message !== "string"){
            return res.status(400).json({
                success: false,
                error: "Invalid field types"
            });
        }


        if ( name.trim().length > 50) {
            return res.status(400).json({
                success: false,
                error: "Name is too long",
            });
        }

        if (message.trim().length < 20){
            return res.status(400).json({
                success: false,
                error: "Message to short"
            });
        }

       const {error} =  await resend.emails.send({
            from: process.env.RESEND_FROM as string,
            to: [process.env.RESEND_TO as string],
            replyTo: email.trim(),
            subject: `New portfolio message from ${name.trim()}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                <h2>New contact form submission</h2>
                <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
                <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message.trim()).replace(/\n/g, "<br />")}</p>
                </div>
            `
            });

        if (error) {
            return res.status(500).json({
                success: false,
                error: error.message || "Failed to send email"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error("Email function error:", error);

        return res.status(500).json({
            success: false,
            error : "internal server error"
        })
    }
}