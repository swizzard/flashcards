import type { DashboardQuery, DashboardQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  DashboardQuery,
  DashboardQueryVariables
> = gql`
  query DashboardQuery {
    dashboardSummary {
      stacks {
        id
        title
        cardCount
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const isEmpty = (data: any) => {
  return !data?.dashboardSummary?.stacks?.length
}

export const Success = ({
  dashboardSummary: { stacks },
}: CellSuccessProps<DashboardQuery>) => {
  return (
    <ul>
      {stacks.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
