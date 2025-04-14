export const makeUrlsClickable = (content: any) => {
    if (!content) return

    const rulesRegex = /[ER]\d{3}[A-Z]?/g
    const transformedText = content.replace(rulesRegex, '<a href="$&">$&</a>')

    return transformedText
}
