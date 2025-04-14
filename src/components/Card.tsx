const Card = ({ id, time, title, children }: any) => {
    return (
        <div className="flex flex-col bg-black/70 my-2 p-4 text-xs rounded-xl">
            <div className="grid grid-cols-2">
                {id && <h2 className="text-md text-gray-500">{id}</h2>}
                {time && (
                    <h2 className="text-md text-gray-500 text-right">
                        ({time})
                    </h2>
                )}
            </div>

            {title && <h2 className="text-xl text-red-700 pb-2">{title}</h2>}

            {children}
        </div>
    )
}

export default Card
