'use client'

import EventSource from 'eventsource'
import React, { useEffect } from 'react'

const page = () => {

  useEffect(() => {
    const eventSource = new EventSource("https://test.api.fandelo.com/notification/sse", {
      headers: {
        'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJuNmhWYjRkWkNpZ29pbExNd1Q0Q3VXTnBuNHZYX21EajE3Ym1TUzFnSXlrIn0.eyJleHAiOjE3MTU4MzMyMDcsImlhdCI6MTcxMzI0MTIwNywianRpIjoiNGUzNTRkOGEtYjYwZC00NzRiLWI2NWItYzFlYjBlOGFkZjE3IiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguNC42MTo4MDgwL3JlYWxtcy9mYW5kZWxvX29uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI5YzQ2ZjBmMi0yMTM2LTRmYjEtOWE5NS1hZjdhYzM3YTk1NWQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmYW5kZWxvX29uZSIsInNlc3Npb25fc3RhdGUiOiIyMGJmMjRiNC0zOTZkLTRiOWYtYWE1MS0wN2EwZTM4OTI0NWMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJyb2w6OmxpYnJhcnkiLCJyb2w6OnBpcGVsaW5lIiwiYWdlbmN5Iiwicm9sOjp0YXNrIiwicm9sOjpzY291dCIsInJvbDo6dGFsZW50Iiwicm9sOjpmYW5kZWxvX29uZTo6YWdlbmN5X2FkbWluIiwicm9sOjpjb21tIiwicm9sOjpjYWxlbmRhciIsInJvbDo6Y29udHJhY3QiLCJkZWZhdWx0LXJvbGVzLWZhbmRlbG9fb25lIiwib2ZmbGluZV9hY2Nlc3MiLCJyb2w6OnBhcnRuZXIiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInJvbDo6c3RhZmYiLCJyb2w6OmZhbmRlbG9fb25lIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiMjBiZjI0YjQtMzk2ZC00YjlmLWFhNTEtMDdhMGUzODkyNDVjIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImZhbmRlbG9fb25lIiwiZW1haWwiOiJmYW5kZWxvX29uZUBibHVlYm90dGxlLmRpZ2l0YWwifQ.LoOawFB8HF8XUVVggRER6I3XZ_nmizDeMWvJjYAehZ9RxygiYUIPSYNnab5m4r5YQXFA6XP-VhPQL9-dFfFms5GoIuW7g1Aytz6_00VLJseA761-CajJ7f3FdlG8A0wa8-FhU_vCi7dXCexZLL-pUU9X0mZWAxO83UDtPo1DAJa7DOAhsfgIpQI1ur-E2Q_IVRP19PaZl2Rmr9e54hq9waHyRcVnf7jjm7mo18W_X259dEBL4Psekda3ayeMj8d7YGls797NgDOsVQVr0EldbiO34ZEyiofmtogVU8HbyAkHJZHTLM6uCcQWecbkoGfQXzEUiL8KcIyUXlcnoEOk3Q"
      },
     });

    console.log(eventSource) 

    eventSource.addEventListener("message", (e) => {
      console.log('message---------', e);
    });
  })
  return (
    <div>page</div>
  )
}

export default page