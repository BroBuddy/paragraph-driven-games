import { Rules as RulesData } from '@/service/data'
import { useParams } from 'react-router-dom'
import Card from './Card'

const makeUrlsClickable = (content: any) => {
    if (!content) return

    const rulesRegex = /[ER]\d{3}[A-Z]?/g
    const transformedText = content.replace(
        rulesRegex,
        '<a href="/rules/$&">$&</a>'
    )

    return transformedText
}

const Rule = () => {
    const { ruleId } = useParams()
    const rule = RulesData.find((item: any) => item.id === ruleId)
    const transformedContent = makeUrlsClickable(rule?.content)

    return (
        <div>
            {rule && (
                <Card rule={rule.id} title={rule.title}>
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

export default Rule
