export const PageNotFound = () => {
    return (
        <>
            <img className='error-image' src={require('../../images/404/err.png')} alt="Error Image" />
            <p className='error-message'>404</p>
            <p className='page-not-found'>Page Not Found!</p>
        </>
    );
};