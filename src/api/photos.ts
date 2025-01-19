import axios from 'axios';

const apiClient = axios.create({
    params: {
        key: import.meta.env.VITE_API_KEY
    }
});

export const PhotosApi = {

    getParentFolder: () => {
        return PhotosApi.getFolderById('1SPM0RIgHSuvE0YxDCNKBNuOQBZLWQ8ZA');
    },

    getFolderById: async (folderId: string) => {
        const response = await apiClient.get('https://www.googleapis.com/drive/v3/files', {
            params: {
                q: `'${folderId}' in parents`
            }
        });
        return response.data;
    }

    // https://www.googleapis.com/drive/v3/files?q=%271SPM0RIgHSuvE0YxDCNKBNuOQBZLWQ8ZA%27+in+parents&key=AIzaSyD3DD_QwaMMOVe7ilyXvW8etFvsN7SQ-m4
    // https://www.googleapis.com/drive/v3/files?key=AIzaSyD3DD_QwaMMOVe7ilyXvW8etFvsN7SQ-m4&q=%271SPM0RIgHSuvE0YxDCNKBNuOQBZLWQ8ZA%27%2Bin%2Bparents
}