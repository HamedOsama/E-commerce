import styled from "styled-components";

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
.menu-item{
  position: relative;
  transition: 0.15s ease-in-out;
}
.menu-item::after{
  content: '';
  position: absolute;
  width: 90%;
  height: 0px;
  background-color: #1976d2;
  bottom: 0;
  left: 5%;
  transition: 0.15s ease-in-out;
  
}
.menu-item:hover::after{
  height: 2px;
}
.menu-item:focus::after{
  height: 2px;
}
.menu-item:hover{
  opacity: 0.9;
}
`

export default Right;