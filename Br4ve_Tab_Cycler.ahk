#Requires AutoHotkey v2.0+

; Remap Ctrl+Tab to Ctrl+L only if Brave is the active window
^Tab::
{
    ; Check if Brave is the active window
    if WinActive("ahk_exe brave.exe")
    {
        Send("^l")  ; Send Ctrl+L
    }
    else
    {
        Send("^Tab")  ; Send Ctrl+Tab for other applications
    }
}
