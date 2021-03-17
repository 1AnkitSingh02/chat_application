const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
    <div>
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                className="message-avatar"
                style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {
            message?.attachements?.length >0 
            
                ? (
                    <img 
                        src={message.attachements[0].file}
                        alt="messsage-attachement"
                        className = "message-image"
                        style={{marginLeft: isFirstMessageByUser ? '4px': '48px'}}
                        />
                            
                    ) : (
                          <div className="message" style={{float:'left', marginLeft: isFirstMessageByUser ? '4px': '48px' , backgroundColor:'#3B2A50' }}>
                            {message.text}
                         </div>
                    )
        }
            
        </div>

    </div>
    );
}

export default TheirMessage;