import { Loading, LoadingNull } from '@/components/common/Loading'
import { TableItemProps, TableProps } from '@/components/common/Table/interface'
import { Rec } from '@/typings'
import * as React from 'react'
import { FC, PropsWithChildren, useMemo } from 'react'

export const TableItemInner = ({ id, item, columns }: TableItemProps, ref: React.ForwardedRef<HTMLTableRowElement>) => {
  return (
    <tr id={id} ref={ref}>
      {columns.map((col, index) => (
        <td key={index} className="td">
          <div className="td-item">
            {columns[index].render ? columns[index].render(item[col.dataIndex], item) : item[col.dataIndex]}
          </div>
        </td>
      ))}
    </tr>
  )
}

export const TableItem = React.forwardRef(TableItemInner)

const Colgroup: FC<{ columns: Rec[] }> = ({ columns }) => (
  <colgroup>
    {columns.map((col, index) => (
      <col key={index} width={col.width ?? ''} />
    ))}
  </colgroup>
)

const TableHead: FC<{ columns: Rec[] }> = ({ columns }) => (
  <div className="xyz-table-thead">
    <table>
      <Colgroup columns={columns} />
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>
              <div className="th-item">{col.title}</div>
            </th>
          ))}
        </tr>
      </thead>
    </table>
  </div>
)

const Table: FC<PropsWithChildren<TableProps>> = ({
  loading,
  loadingNode,
  emptyNode,
  data,
  columns,
  rowKey,
  children
}) => {
  const tbody = useMemo(() => {
    return data.map((item, index) => (
      <TableItem key={rowKey ? item[rowKey] : `tbody-item-${index}`} item={item} columns={columns} />
    ))
  }, [data])

  const innerContent = useMemo(() => {
    if (loading)
      return (
        <tbody>
          <tr>
            <td colSpan={columns.length}>
              <Loading />
            </td>
          </tr>
        </tbody>
      )
    if (data.length > 0) return <tbody>{children(data, columns) || tbody}</tbody>
    return (
      <tbody>
        <tr>
          <td colSpan={columns.length}>
            <LoadingNull />
          </td>
        </tr>
      </tbody>
    )
  }, [data, tbody, loading, columns, children, emptyNode, loadingNode])

  return (
    <div className="xyz-table">
      <TableHead columns={columns} />
      <div className="xyz-table-body">
        <table>
          <Colgroup columns={columns} />
          {innerContent}
        </table>
      </div>
    </div>
  )
}

export default Table
