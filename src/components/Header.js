import './Header.css';


const Header = ({ setLoading, setMapUrl }) => {

    const handleMapUrl = (e) => {

        setLoading(true);

        let newLoc = e.target.value;

        if ('' + newLoc === '') {
            newLoc = 'Mumbai';
        }

        setMapUrl(encodeURI('https://www.google.com/maps/embed/v1/place?q=' + newLoc + '&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'));

        setTimeout(() => {
            setLoading(false)
        }, 2000);

    }

    return (
        <div className="Header">
            <img id="logo" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'} />

            <input id="q-input" placeholder="Search..." onKeyUp={(e) => handleMapUrl(e)} />

            <div>
                <a>Account</a>
            </div>
        </div>
    );
}

export default Header;