import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/Layout"
import Content from "../components/Content"

export default () => (
  <Layout>
    <Content>
      <Styled.h1>About</Styled.h1>
    </Content>
  </Layout>
)
