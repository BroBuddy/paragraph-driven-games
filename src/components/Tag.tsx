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

const Tag = (props: any) => {
    const { tag } = props
    const transformedContent = makeUrlsClickable(tag?.content)

    return (
        <div>
            {tag && (
                <Card rule={tag.id} title={tag.title}>
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
