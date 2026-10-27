import { publicUrl } from "../config";

const READ_SPEED = 230 // WPM (words per minute)

export async function getReadTimeFromFileUrl(slug) {
    return fetch(publicUrl(`posts/${slug}/index.md`))
    .then((response) => {
        const isHtml = response.headers
          .get("content-type")
          ?.includes("text/html");
        if (!response.ok || isHtml){
            throw new Error(`Missing for "${slug}"`);
        }  
        return response.text();
    })
    .then((text) => {
        const words = text.trim().split(/\s+/).length;
        const result = Math.max(Math.ceil(words / READ_SPEED), 1);
        console.log(slug + " result: " + result);
        return result;
    })
    .catch((error)=> {
        console.error('Could not fetch file for read time:', error);
        return '?';
    })

}