import axios, { AxiosResponse } from 'axios';
import { Gallery } from '../types/Gallery';

const apiClient = axios.create({
    params: {
        key: import.meta.env.VITE_API_KEY
    },
    baseURL: 'https://www.googleapis.com/drive/v3/files'
});

const mapToData = ({ data }: AxiosResponse) => data.files;

export const PhotosApi = {

    getParentFolder: (): Promise<Gallery[]> => PhotosApi.getFolderById(import.meta.env.VITE_FOLDER_KEY),
    getFolderById: (folderId: string): Promise<any> => apiClient.get('', {
        params: {
            q: `'${folderId}' in parents`
        }
    }).then(mapToData),
}