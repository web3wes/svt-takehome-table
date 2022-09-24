import type { NextPage } from "next"
import getFleetData from "./api/getFleetData"
import React, { useState, useEffect } from "react"

const Home: NextPage = ({ data }) => {
  return <>data here</>
}

export async function getStaticProps() {
  const fleet = await getFleetData()
  console.log(fleet)

  return {
    props: {
      data: {
        fleetData: fleet,
      },
    },
  }
}
export default Home
