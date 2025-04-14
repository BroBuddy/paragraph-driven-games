import { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import { Rules as RulesData } from '@/service/data'

type Rule = {
    id: string
    title: string
    content: string
}

type RuleOption = {
    value: string
    label: string
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

const Rules = () => {
    const { ruleId } = useParams()

    const navigate = useNavigate()
    const [selectedRule, setSelectedRule] = useState<RuleOption | null>(null)
    const [_, setActiveRule] = useState<Rule | null>(null)

    const rules = RulesData.map(({ content, ...item }) => item).map(
        ({ id, title }) => {
            return { value: id, label: `${id}: ${title}` }
        }
    )

    const handleChange = (selectedRule: any) => {
        setSelectedRule(selectedRule)
        const ruleId = selectedRule.value

        navigate(`/rules/${ruleId}`)
    }

    const resetRule = () => {
        setActiveRule(null)
        setSelectedRule(null)
    }

    useEffect(() => {
        if (!ruleId) {
            resetRule()
        }

        try {
            const activeRule = RulesData.find(
                (item: Rule) => item.id === ruleId
            )

            setActiveRule(activeRule as Rule)
            setSelectedRule({
                value: activeRule?.id as string,
                label: activeRule?.title as string,
            })
        } catch (error) {
            console.log(error)
        }
    }, [ruleId])

    return (
        <div>
            <Select
                styles={customStyles}
                value={selectedRule}
                isSearchable={true}
                onChange={handleChange}
                placeholder="Type to search..."
                options={rules}
            />

            <Outlet />
        </div>
    )
}

export default Rules
