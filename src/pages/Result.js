import React from 'react';
import styled from 'styled-components'
//import catImage from '../asset/cat_image.jpg'
import Button from 'react-bootstrap/Button'
import { ResultData } from '../asset/data/resultdata'
import { useNavigate } from 'react-router-dom'

const Result = () =>{
  const navigate = useNavigate()
  return (
    <Wrapper className='App'>
      <Header>
        예비집사 판별기
      </Header>
      <Title>결과보기</Title>
      <LogoImage>
        <img src={ResultData[0].image} className='rounded-circle' width={350} height={350} />
      </LogoImage>
      <Desc>예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name} 입니다</Desc>
      <Button onClick={()=>navigate('/')}>테스트 다시하기</Button>
    </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  height:100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  font-size: 45px;
`

const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`

const LogoImage = styled.div`
  margin-top: 20px;
`

const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
`