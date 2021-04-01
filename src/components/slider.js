import { Suspense, useState } from "react"
import { Carousel } from "react-bootstrap"

export default function Slider({images, key="key"}) {
    const [selected, setSelected] = useState(null);
    const firstImage = images[0];
    return (
        <div>
            {images.length === 1 ?
            <Suspense fallback={
                <div style={{
                    width:"100%",
                    height: "100%",
                    fontSize: "3rem",
                    textAlign: "center"
                }}>
                    Loading...
                </div>
            }>
                <firstImage.src width="100%" alt={firstImage.alt} onClick={() => {setSelected(firstImage)}}/>
            </Suspense>
            :
            <Carousel>
                {images.map((image, index) => {
                    return (
                        <Carousel.Item key={key + "-" + index}>
                            <Suspense fallback={
                                <div style={{
                                    width:"100%",
                                    height: "100%",
                                    fontSize: "3rem",
                                    textAlign: "center"
                                }}>
                                    Loading...
                                </div>
                            }>
                                <image.src width="100%" alt={image.alt} onClick={() => {setSelected(image)}}/>
                            </Suspense>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            }
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