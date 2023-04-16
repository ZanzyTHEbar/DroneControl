import { exit } from '@tauri-apps/api/process'
import { invoke } from '@tauri-apps/api/tauri'
import { appWindow } from '@tauri-apps/api/window'
import { useEventListener } from 'solidjs-use'
import { ExitCodes } from '@static/types/enums'

export const handleTitlebar = (main = false) => {
    const titlebar = document.getElementsByClassName('titlebar')
    if (titlebar) {
        useEventListener(document.getElementById('titlebar-minimize'), 'click', () => {
            appWindow.minimize()
        })
        useEventListener(document.getElementById('titlebar-maximize'), 'click', () => {
            appWindow.toggleMaximize()
        })
        useEventListener(document.getElementById('titlebar-close'), 'click', () => {
            main ? handleAppExit() : appWindow.close()
        })
    }
}

export const handleAppBoot = () => {
    useEventListener(document, 'DOMContentLoaded', () => {
        // check if the window state is saved and restore it if it is

        /* invoke('handle_save_window_state').then(() => {
            console.log('[App Boot]: saved window state')
        }) */

        //setTimeout(() => invoke('close_splashscreen'), 15000)
    })
}

export const handleAppExit = async () => {
    // TODO: call these before the app exits to shutdown gracefully
    // stopMDNS()
    // stopWebsocketClients()
    // saveSettings()
    // stopPythonBackend()
    invoke('handle_save_window_state').then(() => {
        console.log('[App Close]: saved window state')
    })
    appWindow.close()
    await exit(ExitCodes.USER_EXIT)
}

export const handleSound = async (
    soundfile_mp: string,
    soundfile_ogg?: string,
    soundfile_ma?: string
) => {
    //if (!enableNotificationsSounds()) return
    if (!soundfile_ogg) soundfile_ogg = soundfile_mp
    if (!soundfile_ma) soundfile_ma = soundfile_mp
    if ('Audio' in window) {
        const a = new Audio()
        if (a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''))
            a.src = ('audio/' + soundfile_ogg) as string
        else if (a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''))
            a.src = ('audio/' + soundfile_mp) as string
        else if (a.canPlayType && a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''))
            a.src = ('audio/' + soundfile_ma) as string
        else a.src = ('audio/' + soundfile_mp) as string

        a.play()
        return
    }
}
