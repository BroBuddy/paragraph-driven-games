import { Link } from 'react-router-dom'
import Card from './Card'
import { makeUrlsClickable } from '@/lib/helper'

type TagSheet = {
    id: string
    title: string
}

const sheetTags: TagSheet[] = [
    {
        id: 'R203',
        title: 'Daily Actions',
    },
    {
        id: 'R203A',
        title: 'Travel',
    },
    {
        id: 'R203B',
        title: 'Contact',
    },
    {
        id: 'R203C',
        title: 'Rest, Recuperation & Repair',
    },
    {
        id: 'R203D',
        title: 'Breakdown',
    },
    {
        id: 'R203E',
        title: 'Loan Payments',
    },
    {
        id: 'R233',
        title: 'Entry & Contact Table',
    },
    {
        id: 'R238',
        title: 'Entry Detection Table',
    },
]

function Sheet() {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Sheet">
                {sheetTags &&
                    sheetTags.map((tag: TagSheet, index: number) => {
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

export default Sheet
