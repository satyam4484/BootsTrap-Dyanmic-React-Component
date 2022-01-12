import AccordianItem from "./AccordianItem";
const Accordian = (props) => {

    // to remove rounded corners add a class  --> accordion-flush to the id (accordionExample )
    return (
        <div className="accordion" id="accordionExample">
            {props.items.map((item,index) => <AccordianItem key={item.id} item={item} index={index} />) }
        </div>
    );
};

export default Accordian;
