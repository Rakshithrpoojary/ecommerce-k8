const fs = require("fs");
const REACT_APP_CLOUD_NAME_CLOUDINARY =fs.readFileSync("/mnt/secrets/REACT_APP_CLOUD_NAME_CLOUDINARYS","utf8").trim();
console.log(REACT_APP_CLOUD_NAME_CLOUDINARY);
const url = `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`

const uploadImage  = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","mern_product")
    

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    return dataResponse.json()

}

export default uploadImage 