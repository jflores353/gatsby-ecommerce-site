import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success Page" />
    <h1>Order has been placed!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SuccessPage
