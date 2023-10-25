import React from 'react'
import Footer from './Footer'
const Chat = () => {
  return (
    <>
    {/* css for chat page */}
       <link rel="stylesheet" href="asset/css/chat.css"/>
    {/* css for chat page */}

    <main className="content">
  <div className="container p-0">
    <h1 className="h3 mb-3 mess">Messages</h1>
    <div className="card">
      <div className="row g-0">
        {/* Media query has to given at 1000 px from this section */}
        {/* Media query has to given at 1000 px from this section */}
        <div className="col-12 col-lg-5 col-xl-3 border-right listperson">
          <div className="px-4 d-none d-md-block">
            <div className="d-flex align-items-center">
            </div>
          </div>
          <a href="#" className="list-group-item list-group-item-action border-0 my-3">
            <div className="d-flex align-items-start">
              <img className="insideimg" src="https://bootdey.com/img/Content/avatar/avatar5.png" height={40} width={40} alt="Vanessa Tucker" />
              <div className="flex-grow-1 ml-3">
                Parmar Bhavy
                <div className="small"><span className="fas fa-circle chat-online" /> Online</div>
              </div>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action border-0 my-3">
            <div className="d-flex align-items-start">
              <img className="insideimg" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="William Harris" width={40} height={40} />
              <div className="flex-grow-1 ml-3">
                Mehul Utediya
                <div className="small"><span className="fas fa-circle chat-online" /> Online</div>
              </div>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action border-0 my-3">
            <div className="d-flex align-items-start">
              <img className="insideimg" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Sharon Lessman" width={40} height={40} />
              <div className="flex-grow-1 ml-3">
                Vaibhav Dobariya
                <div className="small"><span className="fas fa-circle chat-online" /> Online</div>
              </div>
            </div>
          </a>
          <a href="#" className="list-group-item list-group-item-action border-0 my-3">
            <div className="d-flex align-items-start">
              <img className="insideimg" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Christina Mason" width={40} height={40} />
              <div className="flex-grow-1 ml-3">
                Ashneer grover
                <div className="small"><span className="fas fa-circle chat-offline" /> Offline</div>
              </div>
            </div>
          </a>
          <hr className="d-block d-lg-none mt-1 mb-0" />
        </div>
        <div className="col-12 col-lg-7 col-xl-9">
          <div className="py-2 px-4 border-bottom d-none d-lg-block">
            <div className="d-flex align-items-center py-1">
              <div className="position-relative">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width={40} height={40} />
              </div>
              <div className="flex-grow-1 pl-3">
                <strong>Sharon Lessman</strong>
                <div className="text-muted small"><em>Typing...</em></div>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <div className="chat-messages p-4">
              <div className="chat-message-right pb-4">
                <div>
                  <img className="inchatimg" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Chris Wood" width={40} height={40} />
                  <div className="text-muted small text-nowrap mt-2">2:33 am</div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                  <div className="font-weight-bold mb-1">You</div>
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                </div>
              </div>
              <div className="chat-message-left pb-4">
                <div>
                  <img className="inchatimg" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="error" width={40} height={40} />
                  <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                  <div className="font-weight-bold mb-1">Sharon Lessman</div>
                  Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                </div>
              </div>
              <div className="chat-message-right mb-4">
                <div>
                  <img className="inchatimg" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Chris Wood" width={40} height={40} />
                  <div className="text-muted small text-nowrap mt-2">2:35 am</div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                  <div className="font-weight-bold mb-1">You</div>
                  Cum ea graeci tractatos.
                </div>
              </div>
              <div className="chat-message-left pb-4">
                <div>
                  <img className="inchatimg" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Sharon Lessman" width={40} height={40} />
                  <div className="text-muted small text-nowrap mt-2">2:36 am</div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                  <div className="font-weight-bold mb-1">Sharon Lessman</div>
                  Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
                  Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 py-3 px-4 border-top writemess">
            <div className="input-group typemess">
              <input type="text" className="form-control" placeholder="Type your message" />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<Footer/>
    </>
  )
}

export default Chat
