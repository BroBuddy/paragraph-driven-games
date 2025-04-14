import { useParams } from 'react-router-dom'
import { Rules as RulesData } from '@/service/rules'
import { Events as EventsData } from '@/service/events'
import Card from './Card'
import { useEffect, useState } from 'react'
import { makeUrlsClickable } from '@/lib/helper'

type TagItem = {
    id: string
    title: string
    content: string
    time?: string
}

const Tag = () => {
    const { tagId } = useParams()
    const [activeTag, setActiveTag] = useState<TagItem | null>(null)
    const dataSet = RulesData.concat(EventsData)
    const transformedContent = makeUrlsClickable(activeTag?.content)

    useEffect(() => {
        const findTag = dataSet.find((item: TagItem) => item.id === tagId)
        setActiveTag(findTag as TagItem)
    }, [tagId])

    return (
        <div>
            {activeTag && (
                <Card
                    id={activeTag.id}
                    time={activeTag.time || null}
                    title={activeTag.title}
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: transformedContent,
                        }}
                    />
                </Card>
            )}
        </div>
    )
}

export default Tag
