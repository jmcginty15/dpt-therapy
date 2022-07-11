import './ServicesUL.css';

const ServicesUL = ({ items, wide }) => {
    const doubleColumn = wide && items.length >= 6;
    return doubleColumn ? <ServicesDoubleColumn items={items} /> : <ServicesSingleColumn items={items} />
}

const ServicesDoubleColumn = ({ items }) => {
    return (
        <div className="ServicesUL-double">
            <ul className="Services-ul">
                {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <ul className="Services-ul">
                {items.slice(Math.ceil(items.length / 2)).map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div >
    )
}

const ServicesSingleColumn = ({ items }) => {
    return (
        <div className="ServicesUL-single" styles={{ gridTemplateColumns: '25% 25% 25% 25%' }}>
            <ul className="Services-ul">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div >
    )
}

export default ServicesUL;
