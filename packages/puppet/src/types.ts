import type { WechatferryAgent } from '@wechatferry/agent'
import type {
  Contact,
  Message,
  Room,
  RoomMember,
} from 'wechaty-puppet/payloads'
import type { CacheManager } from './cache-manager'

export interface PuppetRoom extends Room {
  announce: string
  members: RoomMember[]
}

export interface PuppetContact extends Contact {
  tags: string[]
}

export type PuppetMessage = Message & {
  isRefer: boolean
}

export interface PuppetWcferryUserOptions {
  agent?: WechatferryAgent
  /**
   * 自定义缓存管理器
   */
  cacheManager?: CacheManager
}

export interface PuppetWcferryOptions extends Required<PuppetWcferryUserOptions> { }
