import React, { useState } from 'react'
import './ChatBot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { IconButton } from '@mui/material';

const API_KEY = "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"

const ChatBot = () => {

    const [showBot, setShowBot] = useState(false)

    const [typing, setTyping] = useState(false)

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            type: "text",
            message: "Hello, I'm a mental health chatbot. How can I help you today?",
            date: new Date(),
            direction: "incoming"
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing",
        }

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);

        setTyping(true);
        await processMessageToChatGPT(newMessages);
    }

    async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            }
            else {
                role = "user"
            }
            return {
                role: role,
                content: messageObject.message
            }
        }
        )

        const systemMessage = {
            role:"system",
            content:"Explain all concepts like I am 10 years old"
        }

        const apiRequestBody={
            "model":"gpt-3.5-turbo",
            "messages":[
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        
            
        }).then((data)=>{
            return data.json()
        }).then((data)=>{
            console.log(data)
            setMessages([...chatMessages, {
                message: data.choices[0].message.content,
                sender:"ChatGPT",
            }])
            setTyping(false)
    
        })

    }


    return (
        <div>
            {
                //Overlay Chatbot Button over every page
            }
           <IconButton sx={{position:"relative"

            ,bottom:"0px",right:"0px",left:"90%",margin:"1rem"
            ,backgroundColor:"#ff6d6d",color:"white",
            //hover
            "&:hover":{backgroundColor:"#ff6d6d",color:"white"}
            ,borderRadius:"50%",border:"2px solid white"
            ,zIndex:"1000",
            height:"5rem",
            width:"5rem",
            //overlays the chatbot button over every page
            position:"fixed"
        }} onClick={()=>{setShowBot(!showBot)}}><TagFacesIcon
            sx={{fontSize:"3rem"}}

        /></IconButton>

            {showBot && <div className="chatbotContainer">
            <div style={{
                //display div on top of chatbot button 
                position: "absolute", height: "600px", width: "800px",

                //overlays the chat on top of the chatbot button
                zIndex: "999",

                //overlays the chatbot on top of the chatbot button
                position: "fixed",
                top: "6rem",
                left: "35%",
                right: "0px",
                borderRadius: "20px",

                }}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                            scrollBehavior='smooth'
                            typingIndicator={typing ? <TypingIndicator content="Typing..." /> : null}
                        >
                            {messages.map((message, index) => (
                                <Message

                                    key={index}
                                    model={message}
                                />
                            ))}
                        </MessageList>
                        <MessageInput placeholder="Type message here..." onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>}
        </div>
    )
}

export default ChatBot
