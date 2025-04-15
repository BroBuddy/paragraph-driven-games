import Card from './Card'

function Sector() {
    return (
        <section className="flex flex-col py-2 w-full">
            {Array.from({ length: 6 }, (_, index) => {
                return (
                    <Card title={`Pattern ${index + 1}`}>
                        <img
                            src={`/sectors/pattern_${index + 1}.png`}
                            alt={`Pattern ${index + 1}`}
                        />
                    </Card>
                )
            })}
        </section>
    )
}

export default Sector
