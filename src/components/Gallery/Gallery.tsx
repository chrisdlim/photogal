import { PhotosApi } from "../../api/photos";
import { Photo } from "../Photo"

export const Gallery = () => {
    const photos = PhotosApi.getParentFolder().then((res) => {
        console.log(res)
        return res;
    });
    return <>
        <Photo />
    </>;
}