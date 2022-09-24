import type { NextPage } from "next"
import getFleetData from "./api/getFleetData"
import styles from "../styles/Home.module.css"
import "bootstrap/dist/css/bootstrap.css"
import BootstrapTable from "react-bootstrap-table-next"
import React, { useState, useEffect } from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"

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
  const [filterId, setFilterId] = useState(0)
  const [comparison, setComparison] =
    useState<ChangeEvent<HTMLSelectElement>>("")
  const [fleetStatus, setFleetStatus] = React.useState<string[]>([])

  function update(event: ChangeEvent) {
    event.preventDefault()

    let filteredResults =
      comparison == "Less than"
        ? data.fleetData.filter((fleetData) => fleetData.robotId < filterId)
        : comparison == "Greater than"
        ? data.fleetData.filter((fleetData) => fleetData.robotId > filterId)
        : data.fleetData.filter((fleetData) => fleetData.robotId == filterId)

    setFleetStatus(filteredResults)
  }

  useEffect(() => {
    setFleetStatus(data.fleetData)
  }, [])

  return (
    <>
      <div className="container">
        <Form>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="textInput">
                  <Form.Label>Filter ID</Form.Label>
                  <Form.Control
                    type="number"
                    value={filterId}
                    onChange={(e) => setFilterId(parseInt(e.target.value))}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Select
                  aria-label="Default select example"
                  value={comparison}
                  onChange={(e) => setComparison(e.target.value)}
                >
                  <option>Select Filter criteria</option>
                  <option value="Less than">Less than</option>
                  <option value="Greater than">Greater Than</option>
                  <option value="Equals">Equals</option>
                </Form.Select>
              </Col>
              <Col>
                <Button variant="primary" type="submit" onClick={update}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>

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
