import React from "react";
import "./style.css"

export default function ImageList({ images }){
    return images.map(imageUrl =>
        <a href={imageUrl} data-toggle="lightbox" data-gallery="gallery"
           className="col-md-3">
            <img src={imageUrl} className="rounded crop"/>
        </a>);
}