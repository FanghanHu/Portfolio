import { Suspense, useState } from "react"
import { Carousel } from "react-bootstrap"

export default function Slider({images, key="key"}) {
    const [selected, setSelected] = useState(null);
    return (
        <div>
            <Carousel>
                {images.map((image, index) => {
                    return (
                        <Carousel.Item key={key + "-" + index}>
                            <Suspense fallback={<img src="http://placehold.it/64x64" alt="placehodler"/>}>
                                <image.src width="100%" alt={image.alt} onClick={() => {setSelected(image)}}/>
                            </Suspense>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <div 
                style={{
                    position:"fixed",
                    width:"100VW",
                    height:"100VH",
                    display:selected?"flex":"none",
                    flexDirection:"column",
                    justifyContent:"center",
                    top: 0,
                    left:0,
                    zIndex: 99
                }}
                onClick={() => {setSelected(null)}}
            >
                <div className="my-md-1 mx-md-5"
                    style={{
                        overflow:"overlay",
                        border: "4px solid white",
                        borderRadius: "5px"
                    }}
                >
                    {selected?<selected.src width="100%" alt={selected.alt} />:""}
                </div>
            </div>
        </div>
    )    
}