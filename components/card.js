const Card = (props) => {
    return (
        <div class="rounded-lg mt-12 mb-12 pt-2 pb-2 pl-4 pr-4 shadow-lg bg-gray-100">
            <span class="text-green-800">{props.children}</span>
        </div>
    );
}

export default Card