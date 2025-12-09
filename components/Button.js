import Link from 'next/link';
import '../styles/components/button.css';

export default function Button({
    children,
    href,
    variant = 'primary',
    onClick,
    type = 'button',
    className = ''
}) {
    const baseClass = `btn btn-${variant} ${className}`;

    if (href) {
        return (
            <Link href={href} className={baseClass}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={baseClass}>
            {children}
        </button>
    );
}
