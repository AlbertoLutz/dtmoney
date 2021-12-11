import React, { useState } from 'react';
import logoimg from '../../assets/logo.png'
import { Container, Content } from './style';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {

    return(
        <Container>
           <Content>
              <img src={logoimg} alt="dt money" />
                 <button type="button" onClick={onOpenNewTransactionModal}>
                 Nova transação
                 </button>
           </Content>                
        </Container>
    )
}