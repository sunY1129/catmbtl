import React from 'react';
import '../App.css'
import styled from 'styled-components'
import catImage from '../asset/cat_image.jpg'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Home = () =>{
  const navigate = useNavigate()
  const handleClickButton = () =>{
    //useHistory
    navigate('/question')
  }
  return (
    <Wrapper className='App'>
      <Header>
        예비집사 판별기
      </Header>
      <Title>나에게 맞는 주인님은?</Title>
      <LogoImage>
        <img src={catImage} className='rounded-circle' width={350} height={350} alt='cat img'/>
      </LogoImage>
      <Desc>MBTI를 기반으로 하는 나와 잘맞는 고양이 찾기</Desc>
      <Button onClick={handleClickButton}>테스트 시작하기</Button>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
  background-color:pink;
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
