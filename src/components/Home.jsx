import React from 'react'
import { styled } from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>

      <Section
        title="Model S"
        description="Order Online for Touchless Delivery" 
        backgroundImg="model-s.jpg"   
        leftBtnText="Custom Order"
        rightBtnText="Exixting Inventory"  
      />

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery" 
        backgroundImg="model-y.jpg"   
        leftBtnText="Custom Order"
        rightBtnText="Exixting Inventory"  
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery" 
        backgroundImg="model-x.jpg"   
        leftBtnText="Custom Order"
        rightBtnText="Exixting Inventory"  
      />

      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery" 
        backgroundImg="model-3.jpg"   
        leftBtnText="Custom Order"
        rightBtnText="Exixting Inventory"  
      />

      <Section
        title="Lowest Cost Solar Panel in America"
        description="Money-back Guarantee" 
        backgroundImg="solar-panel.jpg"   
        leftBtnText="Order Now"
        rightBtnText="Learn More"  
      />

      <Section
        title="Accessories"
        description="" 
        backgroundImg="accessories.jpg"   
        leftBtnText="Shop now"  
      />
    </Container>
  )
}

export default Home

/*** STYLING */


const Container = styled.div`
  height: 100vh;

`