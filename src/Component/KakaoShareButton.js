import React from "react";
import Button from 'react-bootstrap/Button'
const {Kakao} = window;

const KakaoShareButton = () =>{
  const url = 'https://catmbit1129.netlify.app'
  const reaultUrl = window.location.href;
  console.log('aaa',reaultUrl,url)
  React.useEffect(()=>{
    Kakao.cleanup()
    Kakao.init('636ed990f77200b10a6548632f88b637')
    console.log(Kakao.isInitialized)
  },[])
  const shareKakao = () =>{
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '예비집사 판별기 결과',
        description: '예비집사가 고양이를 키운다면 가장 잘 맞는 고양이는?',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          androidExecutionParams: 'test',
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: url,
          },
        },
      ]
    });
  }
  return(<Button onClick={shareKakao}>카카오톡 공유하기</Button>)
}
export default KakaoShareButton