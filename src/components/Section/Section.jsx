const Section = ({title, children}) => {
    return (
        <>
            <h4>{title}</h4>
            {children}
        </>
    )
}

export default Section