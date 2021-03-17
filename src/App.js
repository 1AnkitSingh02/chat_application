import { IdcardFilled } from '@ant-design/icons';
import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm'


import './App.css';

import ChatFeed from './components/ChatFeed';



const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID = "2956c058-cb9e-4a2e-9f0f-56dfa6991342"
            userName = {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}


        />
    );
}

export default App;