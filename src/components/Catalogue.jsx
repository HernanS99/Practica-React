import Card from "./Card"

const Catalogue = () => {

    let productos = [
        {
            titulo : 'Computador',
            descripcion : '1 tb sdd, 20gb ram'
        },
        {
            titulo : 'Grafica',
            descripcion : 'rtx 3060'
        }
    ]

    return (
        <div className="container">
            <div className="row">
                <div>
                    <p className="fs-1 fw-bold text-center">Catalogo</p>
                </div>
            </div>
            <div className="row mb-5">
                {productos.map(producto=><Card datos={producto}/>)}
                
            </div>
        </div>
    )
}

export default Catalogue