import { Link, useParams } from 'react-router-dom'
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
    const [linkTags, setLinkTags] = useState<string[]>([])
    const dataSet = RulesData.concat(EventsData)
    const transformedContent = makeUrlsClickable(activeTag?.content)

    useEffect(() => {
        const rulesRegex = /[ER]\d{3}[A-Z]?/g
        const findTags = activeTag?.content.match(rulesRegex)
        const uniqTags = [...new Set(findTags)]
        setLinkTags(uniqTags)
    }, [activeTag?.content])

    useEffect(() => {
        const findTag = dataSet.find((item: TagItem) => item.id === tagId)
        setActiveTag(findTag as TagItem)
    }, [tagId])

    return (
        <>
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

            {linkTags?.length >= 1 && (
                <Card title="Links">
                    <p>
                        {linkTags?.map((tag: string, index: number) => {
                            return (
                                <span key={index}>
                                    <Link to={`/${tag}`}>{tag}</Link>
                                    {index + 1 < linkTags.length ? ', ' : null}
                                    {(index + 1) % 6 == 0 ? <br /> : null}
                                </span>
                            )
                        })}
                    </p>
                </Card>
            )}
        </>
    )
}

export default Tag
