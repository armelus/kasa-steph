import { useLoaderData } from "react-router-dom";
import CarouselPn from "./Carousel";
import CarouselItem from './CarouselItem'
// import './index.css'

import { Carousel } from "react-carousel-minimal";

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}

const CarouselPic = () => {
    const { rental } = useLoaderData();
    const { pictures } = rental
    const rows = [];
    pictures.map((picture, index) => {
        const p = Object.assign({ image: picture, caption: 'image ' + index });
        rows.push(p);
    })
    return (
        <div className="container">
            {/* <CarouselPn pictures={rows}>
                {rows.map((picture, index) => (
                    <CarouselItem key={'carousel__item__' + index} picture={picture.image}>
                    </CarouselItem>
                ))}
            </CarouselPn> */}
            <Carousel
                data={rows}
                time={2000}
                width="100%"
                height="500px"
                radius="10px"
                automatic={true}
                slideNumber={true}
                captionPosition="bottom"
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="144px"
                captionStyle={captionStyle}
                slideNumberStyle={slideNumberStyle}
                style={{
                    textAlign: "center",
                    maxWidth: "1440px",
                    maxHeight: "600px",
                    margin: "40px auto",
                }}
            />
        </div>
    );
}
export default CarouselPic