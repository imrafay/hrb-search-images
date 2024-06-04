import ImageCard from "./ImageCard";

function ImageList({images}){
    const renderedImages = images.map((image,index)=>{
        return <ImageCard key={image.id} image={image}/>;
    });

    return <div className="grid grid-cols-3 m-4 p-4">
        {renderedImages}</div>;
}

export default ImageList;