const AccordianItem = (props) => {
    // want to open accordian always remove the data-bs-parent="#accordionExample" from each accordian 
    return (
        <div className="accordion-item">
            {/* header */}
            <h2 className="accordion-header" id={"heading" + props.item.id}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + props.item.id} aria-expanded={props.index === 0 ? "true" :"false"} aria-controls={"#collapse" + props.item.id}>
                    {props.item.title}
                </button>
            </h2>

            {/* body */}
            <div id={"collapse" + props.item.id} className={"accordion-collapse collapse" + (props.index === 0 ? "show" : "")} aria-labelledby={"heading" + props.item.id} data-bs-parent="#accordionExample" >
                <div className="accordion-body">
                    {props.item.description}
                </div>
            </div>
        </div>
    )
}
export default AccordianItem;