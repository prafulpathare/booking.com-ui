import './Tile.css';


const Tile = ({ data }) => {

    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'INR',
        });
    }

    return (
        <div className="Tile">

            <div className="image-wrapper" style={{
                'background-image' : 'url(' + data.images[0] + ')'
            }} >
            </div>


            <div className="details-wrapper">

                <div className="details-line-1-wrapper">
                    <div className="header-name">
                        {data.name}
                    </div>
                    <div className="rating-wrapper">
                        <img className="icon" src={'data:image/png;base64,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'} /> {data.rating}
                    </div>
                </div>
                <div className="address-wrapper">
                    {data.city} - {data.pin}
                </div>
                <div className="price-wrapper">
                    <s>{formatCurrency(data.price * 1.1)}</s> <span className="price">
                        {formatCurrency(data.price)}
                    </span> a night
                </div>
            </div>
        </div>
    );
}

export default Tile;