import React from 'react';
import styled from 'styled-components'
import { ProgressBar, Button } from 'react-bootstrap'
import { QuestionData } from '../asset/data/questionData'
import { createSearchParams, useNavigate } from 'react-router-dom'

const Question = () =>{
  const [questionNo, setQuestionNo] = React.useState(0)
  const [totalScore, setTotalScore] = React.useState([
    {id:'EI', score:0},
    {id:'SN', score:0},
    {id:'TF', score:0},
    {id:'JP', score:0}
  ])
  // console.log('totalScore',totalScore)
  const navigate = useNavigate()

  const handClickButton = (no,type)=>{
    const newScore = totalScore.map((s)=>
      s.id === type ? {id:s.id, score:s.score + no} : s
    )
    setTotalScore(newScore)
    //다음 문제로 문제수 증가
    if (QuestionData.length !== questionNo + 1){
      setQuestionNo(questionNo+1)
    }else{
      //mbti 도출
      const mbti = newScore.reduce(
        (acc,curr)=>
        acc + (curr.score >= 2 ? curr.id.substring(0,1):curr.id.substring(1,2)),
        ''
      )
      console.log('mbti',mbti)
      //결과 페이지로 이동
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti
        })}`
      })
    } 
    console.log('newScore',newScore)
  }

  // const handClickButton = (no,type)=>{
  //   if (type==='EI'){
  //   // 기존 스코어에서 더할 값을 계산한다(기존값 + 배점)
  //   const addScore = totalScore[0].score + no

  //   // 새로운 객체
  //   const newObject = { id:'EI', score: addScore}

  //   // splice를 통해 새로운 객체를 해당 객체 자리에 넣어준다
  //   totalScore.splice(0, 1, newObject)
    
  //   }else if (type==='SN'){ 
  //     const addScore = totalScore[1].score + no
  //     const newObject = { id:'SN', score: addScore}
  //     totalScore.splice(1, 1, newObject)
  //   }else if (type==='TF'){
  //     const addScore = totalScore[2].score + no
  //     const newObject = { id:'TF', score: addScore}
  //     totalScore.splice(2, 1, newObject)
  //   }else{
  //     const addScore = totalScore[3].score + no
  //     const newObject = { id:'JP', score: addScore}
  //     totalScore.splice(3, 1, newObject)
  //   }
  //   setQuestionNo(questionNo+1)
  // }

  return (
    <Wrapper>
      <ProgressBar variant="danger" now={(questionNo/QuestionData.length*100)} style={{marginTop:'20px'}}/>
      <Titile>{QuestionData[questionNo].title}</Titile>
      <ButtonGroup>
        <Button onClick={()=>handClickButton(1, QuestionData[questionNo].type)} style={{width:'40%', minHeight:'200px', fontSize:'20px'}}>{QuestionData[questionNo].answera}</Button>
        <Button onClick={()=>handClickButton(0, QuestionData[questionNo].type)} style={{width:'40%', minHeight:'200px', fontSize:'20px', marginLeft:'20px'}}>{QuestionData[questionNo].answerb}</Button>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Question;

const Wrapper = styled.div`
  height:100vh;
`

const Titile = styled.div`
  font-size: 40px;
  text-align: center;
  font-family: 'SimKyungha';
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'SimKyungha';
`