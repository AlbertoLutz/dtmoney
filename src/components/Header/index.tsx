import React from 'react';
import logoimg from '../../assets/logo.png'
import { Container, Content } from './style';

export function Header() {
    return(
        <Container>
           <Content>
              <img src={logoimg} alt="dt money" />
                 <button type="button">
                 Nova transação
                 </button>
           </Content>
        
        </Container>
    )
}