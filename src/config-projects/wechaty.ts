/**
 * Project: OSSChat
 * GitHub: https://github.com/kaiyuanshe/osschat
 * Maintainer: Huan LI (李卓桓) https://github.com/huan
 *
 */
/* eslint-disable sort-keys */
import { RepoConfig } from './config'

const roomConfig = {
  '17275396976@chatroom': [ // Wechaty Developers' Headquarters
    'juzibot/donut-tester',
    'wechaty/*puppet*',
    'wechaty/*wechaty*',
    'wechaty/friday',
    'wechaty/summer-of-wechaty',
    'wechaty/wechaty.js.org',
    'wechaty/wishlist',
  ],
  '18324919941@chatroom': [ // Summer of Wechaty Students
    'wechaty/summer-of-wechaty',
  ],
  '18825797159@chatroom': [ // Bot Friday Open Forum 2021
    'wechaty/bot5.ml',
    'wechaty/friday',
  ],
  '19053006724@chatroom': [ // Matrix Appservice Wechaty
    'wechaty/matrix-appservice-wechaty',
  ],
  /**
   * Huan(202108): will be renamed to "Wechaty Developers' Home 9"
   */
  // '19367909379@chatroom': [
  //   // Python/Go/Java Wechaty
  //   'wechaty/(python|go|java|scala|php|dotnet|rust)-wechaty*',
  //   'wechaty/grpc',
  //   'wechaty/openapi',
  // ],
  '21013901541@chatroom': [ // Wechaty Puppet XP
    'wechaty/wechaty-puppet-xp',
  ],
  '21044280639@chatroom': [ // Summer of Wechaty Mentor Candidates
    'wechaty/summer-of-wechaty',
  ],
  '22598372108@chatroom': [ // 博文视点《Chatbot从0到1》读者群
    'lijiarui/chatbot-zero-to-one',
  ],
  '25578655216@chatroom': [ // Wechaty Puppet Service Provider
    'juzibot/donut-tester',
    'juzibot/wxwork-tester',
    'padlocal/wechaty-puppet-padlocal',
    'wechaty/puppet-services',
  ],
  '6719192413@chatroom': [ // Wechaty Contributors
    'wechaty/PMC',
  ],

  /**
   * Polyglot Wechaty User Groups
   */
  '18005545363@chatroom': [ // .NET Wechaty User Group
    'wechaty/go-wechaty*',
  ],
  '19236545415@chatroom': [ // PHP Wechaty User Group
    'wechaty/php-wechaty*',
  ],
  '19459143119@chatroom': [ // OpenAPI Wechaty User Group
    'wechaty/openapi',
  ],
  '20062821521@chatroom': [ // Java Wechaty User Group
    'wechaty/java-wechaty*',
  ],
  '20771403027@chatroom': [ // Python Wechaty User Group
    'wechaty/python-wechaty*',
  ],
  '21063503320@chatroom': [ // Rust Wechaty User Group
    'wechaty/rust-wechaty*',
  ],
  '21153390249@chatroom': [ // Go Wechaty User Group
    'wechaty/go-wechaty*',
  ],
  '21366491788@chatroom': [ // Scala Wechaty User Group
    'wechaty/scala-wechaty*',
  ],

}

export interface RepoConfigEx {
  [repoMatch: string]: string[],
}

const config: RepoConfigEx = {}

Object
  .entries(roomConfig)
  .forEach(([roomId, repoList]) => repoList.forEach(repo => {
    config[repo] = [
      ...(config[repo] || []),
      roomId,
    ]
  }))

export default config as RepoConfig
