import React from 'react'
import image from '../a-rodgers.png';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #424242;
  max-width: 300px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
`;

const Card = styled.div`
  padding: 10px 10px 20px 10px;
`;

const Title = styled.h3`
  margin-top: 0px;
  margin-bottom: 8px;
`;

const Copy = styled.p`
  font-size: 14px;
  color: #b9b9b9;
  margin-top: 0px;
`;

const StyledComp = props => (
    <div>
        <Wrapper>
            <img src={image} alt="Aaron Rodgers" style={{width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
            <Card>
              <Title>The Dude</Title>
              <Copy>If it weren't for Tom Brady, he'd be the GOAT. So for now he's the BOAT (Best of All Time).</Copy>
              <Button title="Learn More"/>
            </Card>
        </Wrapper>
        <p style={{fontSize: 14}}>Styled Components</p>
    </div>
)

export default StyledComp
