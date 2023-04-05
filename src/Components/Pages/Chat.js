import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Sidebar from '../Messenger/SideBar'
import MessageForm from '../Messenger/MessageForm'
function Chat() {
  return (
    <Container>
            <Row>
                <Col md={4}>
                    <Sidebar />
                </Col>
                <Col md={8}>
                    <MessageForm />
                </Col>
            </Row>
        </Container>
  )
}

export default Chat