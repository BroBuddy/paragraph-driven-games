import Select from 'react-select'
import { useState } from 'react'
import { Rules as RulesData } from '@/service/rules'
import { Events as EventsData } from '@/service/events'
import Tag from './Tag'
import Card from './Card'

type TagItem = {
    id: string
    title: string
    content: string
    time?: string
}

const customStyles = {
    input: (base: any) => ({
        ...base,
        color: '#d00',
    }),
    control: (base: any) => ({
        ...base,
        backgroundColor: '#1e1e1e',
    }),
    menu: (base: any) => ({
        ...base,
        backgroundColor: '#2a2a2a',
        color: '#fff',
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isFocused ? '#444' : '#2a2a2a',
        color: '#fff',
        cursor: 'pointer',
    }),
    singleValue: (base: any) => ({
        ...base,
        color: '#fff',
    }),
}

const Tags = () => {
    const [activeTag, setActiveTag] = useState<TagItem | null>(null)
    const dataSet = RulesData.concat(EventsData)

    const rulesOptions = RulesData.map(({ content, ...item }) => item).map(
        ({ id, title }) => {
            return { value: id, label: `${id}: ${title}` }
        }
    )

    const eventsOptions = EventsData.map(({ content, ...item }) => item).map(
        ({ id, title }) => {
            return { value: id, label: `${id}: ${title}` }
        }
    )

    const handleChange = (selectedTag: any) => {
        const activeTag = dataSet.find(
            (item: TagItem) => item.id === selectedTag.value
        )

        setActiveTag(activeTag as TagItem)
    }

    return (
        <section className="flex flex-col py-2 w-full">
            <Card>
                <Select
                    styles={customStyles}
                    isSearchable={true}
                    onChange={handleChange}
                    placeholder="Rules..."
                    options={rulesOptions}
                />
                <br />
                <Select
                    styles={customStyles}
                    isSearchable={true}
                    onChange={handleChange}
                    placeholder="Events..."
                    options={eventsOptions}
                />
            </Card>

            <div>{activeTag && <Tag tag={activeTag} />}</div>
        </section>
    )
}

export default Tags
