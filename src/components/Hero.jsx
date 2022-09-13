import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-5 p-5">
                    <h1 className='text-center fs-1 fw-bold'>Bienvenido</h1>
                    <h4 className='mt-5'>Las mejores comidas a la puerta de tu casa</h4>
                </div>
                <div className="col-7 p-5">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="w-100"
                                    height=""
                                    src="https://muyeducativo.com/wp-content/uploads/2018/01/cpu-images-min_opt.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" w-100"
                                    src="https://www.meusdicionarios.com.br/wp-content/uploads/2016/04/sh_hardware_652948648.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="w-100"
                                    src="https://tm.ibxk.com.br/2021/12/22/22114306286189.jpg?ims=1200x675"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero