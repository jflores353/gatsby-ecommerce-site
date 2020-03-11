import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const stripe = window.Stripe("pk_test_l9j6PmKp06OAyBzSs2TLesVF00NxbCZESj")

  const placeOrder = sku => {
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
        <select>
          <option value="sku_Gt7tetiDGBd2B2">Small</option>
          <option value="sku_Gt7tPhEdeUU93w">Medium</option>
          <option value="sku_Gt6nrPKYYZddxQ">Large</option>
        </select>
        <button onClick={() => placeOrder("sku_Gt6nrPKYYZddxQ")}>Buy Me</button>
      </div>
    </Layout>
  )
}
export default IndexPage
