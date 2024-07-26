import { usePageContext } from 'vike-react/usePageContext';

export const ErrorPage = () => {
    const pageContext = usePageContext();

    let msg, title;

    if (!msg) {
        msg = pageContext.is404 ? 'Page not found.' : 'Internal error.';
        title = pageContext.is404 ? 'Error 404' : 'Error 500';
    }

    return (
        <>
            <h1>{title}</h1>
            <p>{msg}</p>
        </>
    );
};

export default ErrorPage;
