import { sheetPlanets, sheetAreas } from '@/lib/data'
import { TagSheet } from '@/lib/types'
import { Link } from 'react-router-dom'
import Card from './Card'

function Sector() {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Planets">
                {sheetPlanets &&
                    sheetPlanets.map((tag: TagSheet, index: number) => {
                        return (
                            <div className="flex mb-2" key={index}>
                                <span className="w-20">
                                    <Link to={`/${tag.id}`}>{tag.id}</Link>
                                </span>
                                <span>{tag.title}</span>
                            </div>
                        )
                    })}
            </Card>

            <Card title="Area Types">
                {sheetAreas &&
                    sheetAreas.map((tag: TagSheet, index: number) => {
                        return (
                            <div className="flex mb-2" key={index}>
                                <span className="w-20">
                                    <Link to={`/${tag.id}`}>{tag.id}</Link>
                                </span>
                                <span>{tag.title}</span>
                            </div>
                        )
                    })}
            </Card>
        </section>
    )
}

export default Sector
