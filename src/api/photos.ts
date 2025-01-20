import axios, { AxiosResponse } from 'axios';

const apiClient = axios.create({
    params: {
        key: import.meta.env.VITE_API_KEY
    },
    baseURL: 'https://www.googleapis.com/drive/v3/files'
});

const mapToData = ({ data }: AxiosResponse) => data;

export const PhotosApi = {

    getParentFolder: () => PhotosApi.getFolderById(import.meta.env.VITE_FOLDER_KEY),
    getFolderById: (folderId: string) => {
        return apiClient.get('', {
            params: {
                q: `'${folderId}' in parents`
            }
        }).then(mapToData)
    }
}