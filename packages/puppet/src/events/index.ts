import { addEventParser, EventType } from './events'
import { friendShipParser } from './friendship-event'
import { messageParser } from './message-event'
import { postParser } from './post-event'
import { roomInviteParser } from './room-invite-event'
import { roomJoinParser } from './room-join-event'
import { roomLeaveParser } from './room-leave-event'
import { roomTopicParser } from './room-topic-event'

addEventParser(EventType.Post, postParser)
addEventParser(EventType.Friendship, friendShipParser)
addEventParser(EventType.RoomInvite, roomInviteParser)
addEventParser(EventType.RoomJoin, roomJoinParser)
addEventParser(EventType.RoomLeave, roomLeaveParser)
addEventParser(EventType.RoomTopic, roomTopicParser)
addEventParser(EventType.Message, messageParser)

export * from './events'
