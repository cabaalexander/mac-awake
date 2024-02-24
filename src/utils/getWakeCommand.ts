import { $ } from 'bun'

const getWakeCommand = async (): Promise<string> => {
  const checkCommands = ['wake-on-lan', 'etherwake' ]

  for (const command of checkCommands) {
    const commandMeta = await $`which ${command} &> /dev/null`

    if (commandMeta.exitCode === 0) {
      return command
    }
  }

  throw new Error(
    `No command wake found. (install: either 'wake-on-lan' or 'etherwake')`
  )
}

export default getWakeCommand
