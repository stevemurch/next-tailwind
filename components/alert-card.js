const AlertCard = (props) => {
    return (
        <div>
            <div class="text-2xl text-red-600 uppercase">{props.title}</div>
            <div>
                {props.body}
            </div>
        </div>
    );
}

export default AlertCard;