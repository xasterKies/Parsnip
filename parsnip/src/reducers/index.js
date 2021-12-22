import { uniqueId } from "../actions"

const mockTasks = [
    {
      id: uniqueId(),
      title: 'Learn Redux',
      description: 'The store, actions, and reducers, oh my',
      status: 'in Progress'
    },
    {
      id: uniqueId(),
      title: 'Peace on Earth',
      description: 'No big deal',
      status: 'in Progress'
    }
]

export default function tasks(state = { tasks: mockTasks}, action) {
    return state
}