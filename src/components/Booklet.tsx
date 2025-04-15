import Select from 'react-select'
import { useEffect, useState } from 'react'
import { Rules as RulesData } from '@/service/rules'
import { Events as EventsData } from '@/service/events'
import Card from './Card'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { TagItem, TagOption } from '@/lib/types'
import { customStyles } from '@/lib/data'

const groupedOptions = [
    {
        label: 'Rules',
        options: RulesData.map(({ content, ...item }) => item).map(
            ({ id, title }) => {
                return { value: id, label: `${id}: ${title}` }
            }
        ),
    },
    {
        label: 'Events',
        options: EventsData.map(({ content, ...item }) => item).map(
            ({ id, title }) => {
                return { value: id, label: `${id}: ${title}` }
            }
        ),
    },
]

const Booklet = () => {
    const { tagId } = useParams()
    const navigate = useNavigate()
    const [_, setActiveTag] = useState<TagItem | null>(null)
    const [selectedTag, setSelectedTag] = useState<TagOption | null>(null)
    const dataSet = RulesData.concat(EventsData)

    const setTagsBySelection = (tagId: string) => {
        const activeTag = dataSet.find((item: TagItem) => item.id === tagId)

        if (activeTag) {
            setActiveTag(activeTag as TagItem)
            setSelectedTag({ value: activeTag.id, label: activeTag.title })
        }
    }

    const handleChange = (selectedTag: any) => {
        setTagsBySelection(selectedTag.value as string)
        navigate(`/${selectedTag.value}`)
    }

    useEffect(() => {
        setTagsBySelection(tagId as string)
    }, [tagId])

    return (
        <section className="flex flex-col py-2 w-full">
            <Card>
                <Select
                    value={selectedTag}
                    styles={customStyles}
                    isSearchable={true}
                    onChange={handleChange}
                    options={groupedOptions}
                />
            </Card>

            <Outlet />
        </section>
    )
}

export default Booklet
