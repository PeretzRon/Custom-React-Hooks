import { useCallback, useEffect, useRef } from "react"

const useTimeout = (callback, delay) => {
    const callbackRef = useRef(callback)
    const timeoutRef = useRef()

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, [])

    useEffect(() => {
        return clear
    }, [delay, clear])

    return { clear, set }
}

export default useTimeout;
