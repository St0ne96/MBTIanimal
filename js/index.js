// const infolist = [
//     { type: "ISTJ", title: "ISTJ 유형", description: "ISTJ에 대한 설명", image: "img/istj.jpg", comment: "ISTJ 멘트" },
//     { type: "ISFJ", title: "ISFJ 유형", description: "ISFJ에 대한 설명", image: "img/isfj.jpg", comment: "ISFJ 멘트" },
//     { type: "INFJ", title: "INFJ 유형", description: "INFJ에 대한 설명", image: "img/infj.jpg", comment: "INFJ 멘트" },
//     { type: "INTJ", title: "INTJ 유형", description: "INTJ에 대한 설명", image: "img/intj.jpg", comment: "INTJ 멘트" },
//     // 나머지 MBTI 유형에 대한 데이터도 동일한 형식으로 추가해주세요
//   ];
  
//   function showMBTIDescription(mbti) {
//     // 이전 코드와 동일
  
//     // Show the MBTI description
//     const mbtiDescriptionElement = document.querySelector(".mbtiDescription");
//     mbtiDescriptionElement.style.display = "block";
  
//     // Set the result image
//     resultImgElement.querySelector("img").src = mbtiInfo.image;
//     resultImgElement.style.display = "block";
  
//     // Show the 12간지 유형 멘트
//     const commentElement = document.createElement("p");
//     const comment = infolist.find(info => info.type === mbti.toUpperCase()).comment;
//     commentElement.textContent = comment;
    
//     // Append the comment to the tableElement
//     tableElement.appendChild(commentElement);
//   }
  