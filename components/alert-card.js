const AlertCard = (props) => {
    return (

        <div>
            <div>
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
                <ul role="list" className="mt-3 flex justify-center">
                    <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
                            GA
                        </div>
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                            <div className="flex-1 px-4 py-2 text-sm truncate">
                                <a href="#" className="text-gray-900 font-medium hover:text-gray-600">{props.title}</a>
                                <p className="text-gray-500">{props.body}</p>
                            </div>
                            <div className="flex-shrink-0 pr-2">
                                <button type="button" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">Open options</span>
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default AlertCard;