/* import '.' */

function Card(props) {
    return (
            <div class="col-md-3">
                <div class="card-sl">
                    <div class="card-image">
                        <img
                            src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='foto' />
                    </div>

                    {/* <a class="card-action" href="#!"><i class="fa fa-heart"></i></a> */}
                    <div class="card-heading">
                        {props.datos.titulo}
                    </div>
                    <div class="card-text">
                        {props.datos.descripcion}
                    </div>
                    <div class="card-text">
                        $67,400
                    </div>{/* 
                            <a href="#!" class="card-button"> Purchase</a> */}
                </div>
            </div>
    )
}

export default Card