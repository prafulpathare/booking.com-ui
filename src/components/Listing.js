import { useEffect, useState } from 'react';
import './Listing.css';
import Loader from './Loader';
import Tile from './Tile';


const Listing = ({ loading, properties }) => {

    const [data, setData] = useState([]);

    const filters = [
        { id: 1, label: 'Price: High to Low' },
        { id: 2, label: 'Price: Low to High' },
        { id: 3, label: 'Popularity' }
    ]

    useEffect(() => {
        setData(properties);
    }, [data])

    const handleFilterChange = (e) => {

        let filterId = parseInt(e.target.value);

        alert(typeof filterId)

        switch (filterId) {
            case 1:
                setData(data.sort((p1, p2) => p1.price - p2.price));
                break;
            case 2:
                setData(data.sort((p1, p2) => p2.price - p1.price));
                break;
            case 3:
                setData(data.sort((p1, p2) => p1.rating - p2.rating));
                break;
            default:
                break;
        }
    }

    return (
        <div className="Listing">
            <div className="listing-header" >
                <div>
                    {data.length} properties found.
                </div>
                <div>
                    <select onChange={handleFilterChange} >
                        {filters.map(filter => <option value={filter.id} key={filter.label} >{filter.label}</option>)}
                    </select>
                </div>
            </div>
            <div className="properties-view">

                {loading ? <Loader /> :
                    <div className="listing-view">{data.map(p => <Tile data={p} />)} </div>
                }
            </div>
        </div>
    );
}

export default Listing;