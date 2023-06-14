/*
mouse,0
cow,1
tiger,2
rabbit,3
dragon,4
snake,5
horse,6
sheep,7
monkey,8
chick,9
dog,10
pig,11
*/


  // data.js

const infolist = [
    {
      type: "ISTJ",
      title: "ISTJ - 청렴결백한 논리주의자",
      description: "ISTJ는 매사에 철저하고 신중한 성향을 가진 사람들을 말합니다. 논리적이고 현실적이며, 일을 체계적으로 처리하는 경향이 있습니다. 또한, 신뢰성과 충실성을 중요시하여 주변 사람들에게 안정감을 줍니다.",
      image: "./img/image01.png" // ISTJ 이미지 경로 설정
    },
    {
      type: "ISFJ",
      title: "ISFJ - 용감한 수호자",
      description: "ISFJ는 현실적이고 신중한 성향을 가진 사람들을 말합니다. 다른 사람들을 돌보고 지원하는 것을 좋아하며, 주어진 역할을 충실히 수행하는 경향이 있습니다. 또한, 정의감과 신뢰를 중요시하여 주변 사람들을 지지하고 도와줍니다.",
      image: "./img/image02.png"
    },
    {
        type: "INFJ",
        title: "INFJ - 선의의 옹호자",
        description: "INFJ는 이상적인 세계 구현을 위해 노력하는 사람들을 말합니다. 창의적이고 통찰력이 뛰어나며, 타인의 감정을 이해하고 도움을 주는 것을 좋아합니다. 또한, 신념과 가치를 중요시하여 자신의 이상을 추구합니다.",
        image: "./img/image03.png"
      },
      {
        type: "INTJ",
        title: "INTJ - 전략적인 사색가",
        description: "INTJ는 논리적이고 분석적인 사고를 가진 사람들을 말합니다. 독창적이고 창의적인 해결책을 찾는 경향이 있으며, 목표를 달성하기 위해 계획을 세우고 실행합니다. 또한, 자신의 비전을 추구하며 독립적인 성향을 갖고 있습니다.",
        image: "./img/image04.png"
      },
      {
        type: "ISTP",
        title: "ISTP - 만능 재주꾼",
        description: "ISTP는 탐구심이 강하고 도구를 다루는 능력이 뛰어난 사람들을 말합니다. 문제 해결에 능하며 현실적인 해결책을 찾는 경향이 있습니다. 또한, 즉흥적이고 융통성이 있으며 자유로운 활동을 즐깁니다.",
        image: "./img/image05.png"
      },
      {
        type: "ISFP",
        title: "ISFP - 호기심 많은 예술가",
        description: "ISFP는 예술적인 영감을 가진 사람들을 말합니다. 감각적이고 따뜻한 성향을 가지며, 자연과 조화를 이루는 것을 중요시합니다. 또한, 자유로운 분위기에서 창의적인 표현을 즐기고 새로운 경험을 추구합니다.",
        image: "./img/image06.png"
      },
      {
        type: "INFP",
        title: "INFP - 열정적인 중재자",
        description: "INFP는 이상적인 세계를 추구하는 사람들을 말합니다. 진솔하고 따뜻한 성향을 가지며, 타인의 감정에 공감하고 도움을 주는 것을 좋아합니다. 또한, 창의적이고 혁신적인 아이디어를 가지고 있으며 자신의 가치를 중요시합니다.",
        image: "./img/image07.png"
      },
      {
        type: "INTP",
        title: "INTP - 논리적인 사색가",
        description: "INTP는 분석적이고 논리적인 사고를 가진 사람들을 말합니다. 독창적이고 비판적인 사고를 통해 문제를 해결하며, 지식을 탐구하는 것을 좋아합니다. 또한, 자신만의 독립적인 생각을 중요시하고 자유로운 아이디어를 추구합니다.",
        image: "./img/image08.png"
      },
      {
        type: "ESTP",
        title: "ESTP - 모험을 즐기는 사업가",
        description: "ESTP는 활동적이고 대담한 성향을 가진 사람들을 말합니다. 현실적이고 실용적인 문제 해결에 능하며, 자연스럽게 주위와 소통하고 조화를 이룹니다. 또한, 도전과 모험을 즐기며 새로운 경험을 추구합니다.",
        image: "./img/image09.png"
      },
      {
        type: "ESFP",
        title: "ESFP - 자유로운 영혼의 연예인",
        description: "ESFP는 사교적이고 활동적인 성향을 가진 사람들을 말합니다. 사람들과 함께하는 것을 좋아하며, 즉흥적으로 행동하고 즐거운 분위기를 조성하는 것을 중요시합니다. 또한, 자유로운 영혼을 가지고 다양한 경험을 즐깁니다.",
        image: "./img/image10.png"
      },
      {
        type: "ENFP",
        title: "ENFP - 재기발랄한 언변술사",
        description: "ENFP는 열정적이고 창의적인 성향을 가진 사람들을 말합니다. 타인과의 유대감을 중요시하며, 사람들을 격려하고 영감을 주는 것을 좋아합니다. 또한, 새로운 아이디어에 대한 열린 마음을 가지고 있으며 자유로운 영혼을 갖고 다양한 가능성을 탐색합니다.",
        image: "./img/image11.png"
      },
      {
        type: "ENTP",
        title: "ENTP - 논쟁을 즐기는 변론가",
        description: "ENTP는 독창적이고 논리적인 사고를 가진 사람들을 말합니다. 다양한 관점을 탐구하고 문제 해결에 창의적인 해결책을 제시하는 것을 좋아합니다. 또한, 도전과 변화를 즐기며 새로운 아이디어를 발전시키고 타인과 논쟁하는 것을 즐깁니다.",
        image: "./img/image12.png"
      },
      {
        type: "ESFJ",
        title: "ESFJ - 사교적인 외교관",
        description: "ESFJ는 사회적이고 책임감 있는 성향을 가진 사람들을 말합니다. 다른 사람들과 협력하고 도움을 주는 것을 좋아하며, 조화로운 분위기 조성을 중요시합니다. 또한, 타인의 감정에 민감하게 반응하며 사회적 규범을 따르는 경향이 있습니다.",
        image: "./img/image14.png"
      },
      {
        type: "ENTJ",
        title: "ENTJ - 대담한 통솔자",
        description: "ENTJ는 통솔력과 지도력이 강한 사람들을 말합니다. 목표 지향적이고 논리적인 사고를 가지며, 문제 해결과 조직의 성과를 추구합니다. 또한, 명확한 비전을 가지고 계획을 세우고 실행하는 능력을 갖고 있습니다.",
        image: "./img/image16.png"
      },
      {
        type: "ENFJ",
        title: "ENFJ - 정의로운 사회운동가",
        description: "ENFJ는 정의로운 성향을 가진 사람들을 말합니다. 다른 사람들을 도울 때 큰 보람을 느끼며, 사회적인 변화를 이끄는 역할을 수행하는 것을 좋아합니다. 또한, 다른 사람들의 감정에 민감하게 반응하고, 협동과 조화를 중요시합니다.",
        image: "./img/image15.png"
      },
      {
        type: "ENTJ",
        title: "ENTJ - 대담한 통솔자",
        description: "ENTJ는 통솔력과 지도력이 강한 사람들을 말합니다. 목표 지향적이고 논리적인 사고를 가지며, 문제 해결과 조직의 성과를 추구합니다. 또한, 명확한 비전을 가지고 계획을 세우고 실행하는 능력을 갖고 있습니다.",
        image: "./img/image16.png",       
      },
      {
        type: "ESTJ",
        title: "ESTJ - 엄격한 관리자",
        description: "ESTJ는 현실적이고 실용적인 성향을 가진 사람들을 말합니다. 체계적인 계획과 조직을 중요시하며, 목표 달성을 위해 노력합니다. 또한, 책임감과 신뢰성을 가지고 주변 사람들을 지원하고 지도합니다.",
        image: "./img/image13.png", 
      }

  ];
  

  