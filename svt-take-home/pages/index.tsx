import type { NextPage } from "next"
import getFleetData from "./api/getFleetData"
import styles from "../styles/Home.module.css"
import React, { useState, useEffect } from "react"

const Home: NextPage = ({ data }) => {
  const [fleetStatus, setFleetStatus] = React.useState<string[]>([])

  useEffect(() => {
    setFleetStatus(data.fleetData)
  }, [])

  return (
    <>
      <div className="container">
        <div className={styles.container}>
          {fleetStatus.map((fleetStatus) => (
            <div> {fleetStatus.robotId} </div>
          ))}
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
