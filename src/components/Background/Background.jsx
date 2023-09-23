import React from 'react'
import styled from 'styled-components'

const BackgroundImage = () => {
  return (
   <BackgroundContainer>
    <img src='https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/10557/netflixa.jpg?w=1280&ar=default&fit=crop&crop=faces,edges&auto=format'
    alt='no internet connection'
    />
   </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
       height: 100vh;
       width: 100vw;
       img{
        height: 100vh;
        width: 100vw;
       }
`

export default BackgroundImage