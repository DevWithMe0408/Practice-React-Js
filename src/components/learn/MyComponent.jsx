import './style.css'
const MyComponent = () => {
    const stringdata = 'Chien dep trai'; // string type
    const numberdata = 22; // number type
    const booleandata = true; // boolean type
    const objectdata = { name: 'Chien', age: 22 }; // object type
    const arraydata = ['Chien', 'dep', 'trai']; // array type
    return (
        <>
            <div> {stringdata} {numberdata} age</div>
            <p>{booleandata}</p>
            <p>{JSON.stringify(objectdata)}</p>
            <p>{arraydata}</p>
            <div
                style={{ color: 'red' }} >
                <h2>My Component</h2>
            </div>
            <div className="child"> Child</div>
        </>

    );
}
export default MyComponent;