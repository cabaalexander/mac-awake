import { $ } from 'bun'

const getWakeCommand = async (): Promise<string> => {
  const checkCommands = ['etherwake', 'wake-on-lan']

  for (const command of checkCommands) {
    const commandMeta = await $`which ${command} &> /dev/null`

    if (commandMeta.exitCode === 0) {
      return command
    }
  }

  throw new Error(
    `No command wake found. (install: either 'etherwake' or 'wake-on-lan')`
  )
}

export default getWakeCommand
