import { PhotosApi } from '../api/photos';
import { useQuery } from 'react-query';

export const useGallery = () => {
    return useQuery({
        queryFn: () => PhotosApi.getParentFolder()
    });
}