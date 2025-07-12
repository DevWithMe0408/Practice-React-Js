import './style.css'
const MyComponent = () => {
    return (
        <>
            <div
                style={{ color: 'red' }} >
                <h2>My Component</h2>
            </div>
            <div className="child"> Child</div>
        </>

    );
}
export default MyComponent;