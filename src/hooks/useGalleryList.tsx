import { PhotosApi } from '../api/photos';
import { useQuery } from 'react-query';

export const useGalleryList = () => {
    return useQuery({
        queryFn: () => PhotosApi.getParentFolder()
    });
}