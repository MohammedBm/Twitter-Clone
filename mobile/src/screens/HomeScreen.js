import React, { Component } from 'react'
import styled from 'styled-components/native'
import FeedCard from "../components/FeedCard/FeedCard";

const Root = styled.View`

`

const T = styled.Text``


class HomeScreen extends React.Component {


  render() {
    return (
      <Root>
        <FeedCard />
      </Root>
    )
  }
}

export default HomeScreen;
