import { BotIcon, Database, LucideIcon, Smartphone, Figma } from 'lucide-react'
import { FaReact } from 'react-icons/fa'
import { MdElectricalServices } from 'react-icons/md'

export type Navigate = {
  icon: LucideIcon
  label: string
  title: string
}

export const navigation: Navigate[] = [
  {
    icon: FaReact,
    label: 'Frontend',
    title: '前端'
  },
  {
    icon: MdElectricalServices,
    label: 'Backend',
    title: '后端'
  },
  {
    icon: Smartphone,
    label: 'Mobile',
    title: '移动开发'
  },
  {
    icon: BotIcon,
    label: 'AI',
    title: 'Ai'
  },
  {
    icon: Database,
    label: 'Database',
    title: '数据库'
  },
  {
    icon: Figma,
    label: 'Design',
    title: '设计'
  }
]
