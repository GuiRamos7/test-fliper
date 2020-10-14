import { gql } from '@apollo/client';
import { wealthSummaryFragment } from 'fragments/wealth'
export const ALL_WEALTH_SUMARY = gql`
  query($limit: Int) {
    wealthSummary(limit: $limit) {
      ...wealthSummaryFields
    }
  }
  ${wealthSummaryFragment}
`



