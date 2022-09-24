import type { NextPage } from "next"
import getFleetData from "./api/getFleetData"
import styles from "../styles/Home.module.css"
import "bootstrap/dist/css/bootstrap.css"
import BootstrapTable from "react-bootstrap-table-next"
import React, { useState, useEffect } from "react"

const columns = [
  {
    dataField: "robotId",
    text: "Id",
    sort: true,
    sortFunc: (a, b, order) => {
      if (order === "asc") return a - b
      else return b - a
    },
  },
  {
    dataField: "batteryLevel",
    text: "Battery",
    sort: true,
  },
  { dataField: "x", text: "x", sort: true },
  { dataField: "y", text: "y", sort: true },
]

const Home: NextPage = ({ data }) => {
  const [fleetStatus, setFleetStatus] = React.useState<string[]>([])

  useEffect(() => {
    setFleetStatus(data.fleetData)
  }, [])

  return (
    <>
      <div className="container">
        <div className={styles.container}>
          <BootstrapTable
            keyField="id"
            data={fleetStatus}
            columns={columns}
          ></BootstrapTable>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const fleet = await getFleetData()

  return {
    props: {
      data: {
        fleetData: fleet,
      },
    },
  }
}

export default Home
