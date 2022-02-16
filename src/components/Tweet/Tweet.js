import React from 'react'
import moment from 'moment';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import './Tweet.scss';
import { Card, CardContent } from '@mui/material';

export default function Tweet(props) {
    const {tweet:{name,tweet,time},index, deleteTweet} = props;

  return (
    <Card className='tweet'>
        <CardContent>
<div className='tweet__header'>

      <h5>{name}</h5>
      <DeleteTwoTone onClick={()=>deleteTweet(index)}/>
</div>
<p>{tweet}</p>
<div className='tweet__date-add-tweet'>
    {moment(time).format('DD/MM/YYYY HH:mm')}
</div>
        </CardContent>
    </Card>
  )
}
