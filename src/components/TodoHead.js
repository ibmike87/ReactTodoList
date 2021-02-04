import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div `
  
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  
  border-bottom: 1px solid #e9ecef;
  
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function getToday() {
    let date = new Date(),
        yy = date.getFullYear(),
        mm = date.getMonth() +1,
        dd = date.getDate();

    mm = mm >= 10 ? mm : '0' + mm;
    dd = dd >= 10 ? dd : '0' + dd;

    return [yy, mm, dd].join("-");
}

function getDayOfWeek() {
    let week = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    return week[ new Date().getDay()-1 ];
}

function TodoHead() {
    return (
        <TodoHeadBlock>
            {/*<h1>2021년 02월 24일</h1>*/}
            <h1>{getToday()}</h1>
            <div className="day">{getDayOfWeek()}</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;