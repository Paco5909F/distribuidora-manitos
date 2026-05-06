'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

const TIMEOUT_MS = 30 * 60 * 1000 // 30 minutes

export function AutoLogout() {
    const router = useRouter()
    const supabase = createClient()
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const resetTimer = () => {
            if (timerRef.current) clearTimeout(timerRef.current)
            timerRef.current = setTimeout(handleLogout, TIMEOUT_MS)
        }

        const handleLogout = async () => {
            const { data: { session } } = await supabase.auth.getSession()

            if (session) {
                await supabase.auth.signOut()
                alert('Por seguridad, su sesión ha expirado por inactividad.');
                window.location.href = '/login';
            }
        }

        const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'mousemove']

        const setup = () => {
            events.forEach(event => {
                window.addEventListener(event, resetTimer)
            })
            resetTimer()
        }

        setup()

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
            events.forEach(event => {
                window.removeEventListener(event, resetTimer)
            })
        }
    }, [router, supabase])

    return null
}
