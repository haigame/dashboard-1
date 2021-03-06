import React from 'react'
import { Link } from 'react-router'
import { Summary } from 'features/transactions/components'
import { RelativeTime } from 'features/shared/components'
import styles from './ListItem.scss'

class ListItem extends React.Component {
  render() {
    const item = this.props.item
    const lang = this.props.lang
    const confirmation = item.highest - item.blockHeight + 1
    item.confirmations = confirmation

    return(
      <div className={styles.main}>
        <div className={styles.titleBar}>
          <div className={styles.title}>
            <label>{lang === 'zh' ? '交易ID:' : 'Transaction ID:'}</label>
            &nbsp;<code>{item.id}</code>&nbsp;
            <span className={styles.timestamp}>
              <RelativeTime timestamp={item.timestamp} />
            </span>

            <span className={styles.timestamp}>
              {confirmation} {lang === 'zh' ? '确认数' :`confirmation${confirmation > 1 ? 's' : ''}`}
            </span>

          </div>
          <Link className={styles.viewLink} to={`/transactions/${item.id}`}>
            {lang === 'zh' ? '查看详情' : 'View details'}
          </Link>
        </div>

        <Summary transaction={item} lang={lang} btmAmountUnit={this.props.btmAmountUnit}/>
      </div>
    )
  }
}

export default ListItem
