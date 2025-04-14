import Card from './Card'
import Equipment from './Equipment'
import HowToPlay from './HowToPlay'
import Instructions from './Instructions'

const Rules = () => {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Instructions">
                <Instructions />
            </Card>

            <Card title="How To Play">
                <HowToPlay />
            </Card>

            <Card title="Equipment">
                <Equipment />
            </Card>
        </section>
    )
}

export default Rules
