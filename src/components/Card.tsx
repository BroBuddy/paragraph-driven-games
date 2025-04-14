const Card = ({ rule, title, children }: any) => {
    return (
        <div className="flex flex-col bg-black/70 my-2 p-4 text-xs rounded-xl">
            {rule && <h2 className="text-md text-gray-500">{rule}</h2>}
            {title && <h2 className="text-xl text-red-700 pb-2">{title}</h2>}
            {children}
        </div>
    )
}

export default Card
