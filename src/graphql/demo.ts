import { gql, useLazyQuery } from '@apollo/client'

interface UserProfileSummary {
  lionDexUser: Record<string, any>
}

/**
 * averageFeeRate = 0.0008 ＊ (payFeeLpAmpayFeeLpAmountount ／ buyFeeAmount)
 * Assets Portfolio Value = 当前地址LP余额+所有仓位保金*LPPrice
 */
const userProfileSummaryGql = gql`
  query MyQuery($id: String!) {
    lionDexUser(id: $id) {
      payInsurance # Insurance Payout (LP)
      tradeCnt # Number of Transactions
      pnl # Cumulative PnL
      buyFeePayLP # Transaction Fee Expenditure
      buyFeeAmount # averageFeeRate
      payFeeLpAmount # averageFeeRate
      cumulativeTradeVolume # Cumulative Trading Volume
      cumulativeTradeFees # Cumulative Trasaction Fees
    }
  }
`

export const useUserProfileSummary = () => {
  const [userProfileSummaryQuery, { loading }] = useLazyQuery<UserProfileSummary>(userProfileSummaryGql)
  // console.info(loading)
  return { userProfileSummaryQuery, loading }
}
