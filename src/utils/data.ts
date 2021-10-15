import { mdiBasket, mdiHeadCog, mdiLightbulbOutline } from '@mdi/js'
import { mdiFormatQuoteClose } from '@mdi/js'

type Status = 'active' | 'archived'

export interface IData {
  id: number
  name: string
  created: string
  category: string
  content: string
  dates: string
  status: Status
}

export const data: IData[] = [
  {
    id: 1,
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, Bread',
    dates: '',
    status: 'active',
  },
  {
    id: 2,
    name: 'The theory of evolution',
    created: 'April 5, 2021',
    category: 'Random Throught',
    content: 'Evolution of the world',
    dates: '',
    status: 'active',
  },
  {
    id: 3,
    name: 'New feature',
    created: 'March 30, 2021',
    category: 'Idea',
    content: 'Realize yourself in a new vacancy',
    dates: '3/5/2021, 10/6/2021',
    status: 'active',
  },
  {
    id: 4,
    name: 'William Gaddis',
    created: 'February 13, 2021',
    category: 'Quote',
    content: 'What customer problems does the product solve',
    dates: '',
    status: 'active',
  },
  {
    id: 5,
    name: 'Books',
    created: 'May 13, 2021',
    category: 'Task',
    content: 'The Lean Startup',
    dates: '',
    status: 'active',
  },
  {
    id: 6,
    name: 'Work',
    created: 'April 19, 2021',
    category: 'Quote',
    content: 'What customers expect and fear',
    dates: '',
    status: 'active',
  },
  {
    id: 7,
    name: 'Intelligence',
    created: 'May 29, 2021',
    category: 'Task',
    content:
      'What emotions are caused by the experience of owning our product, and so on',
    dates: '',
    status: 'active',
  },
]

export const optionsData = [
  {
    name: 'Task',
    avatar: mdiBasket,
  },
  {
    name: 'Random Throught',
    avatar: mdiHeadCog,
  },
  {
    name: 'Idea',
    avatar: mdiLightbulbOutline,
  },
  {
    name: 'Quote',
    avatar: mdiFormatQuoteClose,
  },
]
