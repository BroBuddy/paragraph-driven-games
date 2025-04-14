import Card from './Card'
import { Rules as RulesData } from '@/service/rules'
import { makeUrlsClickable } from '@/lib/helper'

type TagItem = {
    id: string
    title: string
    content: string
    time?: string
}

const findIds = [
    'R203',
    'R203A',
    'R203B',
    'R203C',
    'R203D',
    'R203E',
    'R233',
    'R238',
]

function Sheet() {
    const tags = RulesData.filter((item: TagItem) => {
        if (findIds.includes(item.id)) {
            return item
        }
    })

    return (
        <section className="flex flex-col py-2 w-full">
            {tags &&
                tags.map((tag: TagItem, index: number) => {
                    return (
                        <Card key={index} id={tag.id} title={tag.title}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: makeUrlsClickable(tag.content),
                                }}
                            />
                        </Card>
                    )
                })}
        </section>
    )
}

export default Sheet
