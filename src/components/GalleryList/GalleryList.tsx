import { useGalleryList } from "../../hooks/useGalleryList";

export const GalleryList = () => {
    const { isLoading, data } = useGalleryList();

    // TODO: Convert to a common loader
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return <>
        {data?.map((gallery) => {
            console.log({ gallery })
            return <h1>{gallery.name}</h1>
        })}
    </>;
}