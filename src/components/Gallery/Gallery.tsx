import { PhotosApi } from "../../api/photos";
import { Photo } from "../Photo"

export const Gallery = () => {
    console.log('rendering')
    const photos = PhotosApi.getPhotos();
    return <>
        <Photo />
    </>;
}