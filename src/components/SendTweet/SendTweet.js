import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import moment from 'moment';
import { TWEETS_STORAGE } from '../../utils/contants';

import ModalContainer from '../ModalContainer/ModalContainer';
import FormSendTweet from '../FormSendTweet/FormSendTweet';

import './SendTweet.scss';


export default function SendTweet(props) {
  const {setToastProps, allTweets} = props;
  const [isOpenModal, setIsOpenModal]=useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }
  const closeModal = () => {
    setIsOpenModal(false);
  }

  const sendTweet = (event, formValue) =>{
    event.preventDefault();
  const {name, tweet} =formValue;
    let allTweetArray = [];
    if(allTweets){
      allTweetArray = allTweets;
    }



    if(!name || !tweet)
    {
      setToastProps({
        
        open:true,
        text:'WARNING: Todos los campos son obligatorios',
        severity:'error'
      });

    }
    else
    {
      formValue.time = moment();
      allTweetArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetArray));
      setToastProps({
        
        open:true,
        text:'SUCCES: Tweet enviado correctamente.',
        severity:'success'
      });
      closeModal();
    }
    allTweetArray = [];
    

  }

  return (
    <div className='send-tweet'>
      
      <Fab 
      className="send-tweet__open-modal"
      color='primary'
      aria-label='add'
      onClick={openModal}
      >
          <AddIcon />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal} >
      <FormSendTweet  sendTweet={sendTweet}/>
      </ModalContainer>
    </div>
  )
}
