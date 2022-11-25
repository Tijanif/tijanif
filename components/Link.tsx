
type hrefProps = {
    children?: string
    href: string
}

const Link = ({children, href}:hrefProps) => {
    const isInternal = href.startsWith('/');
    return (
        <>
            {isInternal ? <a href={href} >{children} </a> : <a href={href} target="_blank" rel="noopener noreferrer">
    <span>
        {children}
    </span>
                <span className="m-2 text-xs font-light">&#x2197;</span>
            </a> }
        </>
    )

}

export default Link