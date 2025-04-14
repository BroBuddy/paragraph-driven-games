import { useParams } from 'react-router-dom'
import { Rules as RulesData } from '@/service/rules'
import { Events as EventsData } from '@/service/events'
import Card from './Card'

type TagItem = {
    id: string
    title: string
    content: string
    time?: string
}

const makeUrlsClickable = (content: any) => {
    if (!content) return

    const rulesRegex = /[ER]\d{3}[A-Z]?/g
    const transformedText = content.replace(rulesRegex, '<a href="$&">$&</a>')

    return transformedText
}

const Tag = () => {
    const { tagId } = useParams()
    const dataSet = RulesData.concat(EventsData)
    const activeTag = dataSet.find((item: TagItem) => item.id === tagId)
    const transformedContent = makeUrlsClickable(activeTag?.content)

    return (
        <div>
            {activeTag && (
                <Card rule={activeTag.id} title={activeTag.title}>
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
