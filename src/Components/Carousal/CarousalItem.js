const CarousalItem = ({item,index}) => {
    return (
        <div className={"carousel-item "+(index ==0?"active":"")}>
            <img src={item.img} className="d-block w-100 img-fluid"  alt="..." />
        </div>
    )
}

export default CarousalItem;