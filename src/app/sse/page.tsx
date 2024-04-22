'use client'

import EventSource from 'eventsource'
import React, { useEffect } from 'react'

const page = () => {

  // useEffect(() => {
  //   const eventSource = new EventSource("http://localhost:5151/sse", {
  //    });

  //   console.log(eventSource) 

  //   eventSource.addEventListener("message", (e) => {
  //     console.log('message---------', e);
  //   });
  // })
  return (
    <div>page</div>
  )
}

export default page