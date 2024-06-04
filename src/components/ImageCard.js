function ImageCard({image}){
    return (<div className="m-4">
        <img  className="rounded" src={image.urls.small} alt="searched item"/>
    </div>);
}

export default ImageCard;