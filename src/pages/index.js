import React from "react"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Document
      file="/test.pdf"
      renderMode="canvas"
    >
      {<Page pageNumber={1} />}
		</Document>
  </Layout>
)

export default IndexPage
