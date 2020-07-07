/** @format */

import React from "react"
import ReactCollapsingTable from "react-collapsing-table"

export default function Datatable({rows, columns}) {
    return (
        <>
            <ReactCollapsingTable rows={rows} columns={columns} showPagination={true} />
        </>
    )
}
