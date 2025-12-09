export default function Section({
    children,
    className = '',
    background = 'white',
    id = ''
}) {
    const bgClass = background === 'light' ? 'bg-light' :
        background === 'primary-light' ? 'bg-primary-light' : '';

    return (
        <section id={id} className={`section ${bgClass} ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
