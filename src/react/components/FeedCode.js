import React, { Component } from "react";
import "./FeedCode.css"
import { Feed, Form, TextArea, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const cards = [
    {
      avatar: '/images/avatar/large/helen.jpg',
      date: 'Joined in 2013',
      header: 'Helen',
      description: 'Primary Contact',
    },
    {
      avatar: '/images/avatar/large/matthew.png',
      date: 'Joined in 2013',
      header: 'Matthew',
      description: 'Primary Contact',
    },
    {
      avatar: '/images/avatar/large/molly.png',
      date: 'Joined in 2013',
      header: 'Molly',
      description: 'Primary Contact',
    },
  ]

class FeedPage extends Component (
<React.Fragment>
  <Sidebar.Pushable as={Segment}>
  <Sidebar
    as={Menu}
    animation='overlay'
    icon='labeled'
    inverted
    vertical
    visible
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='Profile' />
      Profile
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='Messages' />
      Messages
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='Log-out' />
      Log-out
    </Menu.Item>
  </Sidebar>

  <Sidebar.Pusher>
    <Segment basic>
      <Header as='h3'>Application Content</Header>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
  </Sidebar.Pusher>
</Sidebar.Pushable>

  <Feed>
    <Form>
        <TextArea placeholder='Tell us more' />
    </Form>
    <Feed.Event>
      <Feed.Label>
        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/images/avatar/small/helen.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
          
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/images/avatar/small/jenny.jpg' />
      <Feed.Content>
        <Feed.Summary
          date='2 Days Ago'
          user='Jenny Hess'
          content='add you as a friend'
        />
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/images/avatar/small/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Joe Henderson</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/images/avatar/small/justen.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
  </React.Fragment>
)

export default FeedPage;
