const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <div>
            {options.map(name=><button className="button" onClick={() => onLeaveFeedback(name)}>{name}</button>)}
        </div>
    )
}

export default FeedbackOptions