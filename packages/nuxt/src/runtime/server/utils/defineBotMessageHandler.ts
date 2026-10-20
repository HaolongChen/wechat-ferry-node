import type { BotHandlerOptions } from './defineBotHandler'
import type { BotHooks } from './useBot'
import { defineBotHandler } from './defineBotHandler'

type PickMessageKeys<T> = {
  [K in keyof T]: K extends `message${string}` ? K : never;
}[keyof T]

type MessageKeys = PickMessageKeys<BotHooks>

export function defineBotMessageHandler(options: BotHandlerOptions<MessageKeys>) {
  return defineBotHandler(options)
}
