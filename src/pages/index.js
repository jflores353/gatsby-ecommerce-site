import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const stripe = window.Stripe("pk_test_l9j6PmKp06OAyBzSs2TLesVF00NxbCZESj")
  const [sku, setSku] = useState("sku_Gt7tetiDGBd2B2")

  const placeOrder = () => {
    stripe.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <img src="https://picsum.photos/340/400" alt="Web Dev Shirt" />
        <h3>Web Dev T-Shirt</h3>
        <select value={sku} onChange={e => setSku(e.target.value)}>
          <option value="sku_Gt7tetiDGBd2B2">Small</option>
          <option value="sku_Gt7tPhEdeUU93w">Medium</option>
          <option value="sku_Gt6nrPKYYZddxQ">Large</option>
        </select>
        <button onClick={placeOrder}>Buy Me</button>
      </div>
    </Layout>
  )
}
export default IndexPage
