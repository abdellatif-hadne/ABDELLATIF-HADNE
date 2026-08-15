interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const NavLink = ({ href, children, onClick, className = "" }: NavLinkProps) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`font-sans text-sm text-foreground/70 hover:text-foreground transition-colors relative group ${className}`}
        >
            {children}
            <span className="absolute -bottom-2 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
        </a>
    );
};

export default NavLink;
