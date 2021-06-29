export function handleClickOpen1D(x, open, setOpen) {
    const list = { ...open }
    list[x] = !list[x]
    setOpen(list)
}

export function handleClickOpen2D(x, y, open, setOpen) {
    const list = { ...open }
    list[x][y] = !list[x][y]
    setOpen(list)
}

export function handleClickBoolean(boolean, setBoolean) {
    setBoolean(!boolean)
}
