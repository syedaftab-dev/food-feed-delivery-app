import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutFoodPartner } from '../../utils/auth'

const FoodPartnerLogout = () => {
  const navigate = useNavigate()
  const [ error, setError ] = useState('')

  useEffect(() => {
    let isMounted = true

    const run = async () => {
      try {
        await logoutFoodPartner()
      } catch (e) {
        if (!isMounted) return
        setError('Logout failed. Please try again.')
        return
      }

      navigate('/food-partner/login', { replace: true })
    }

    run()

    return () => { isMounted = false }
  }, [ navigate ])

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="logout-title">
        <header>
          <h1 id="logout-title" className="auth-title">Logging out…</h1>
          {error && <p className="auth-subtitle">{error}</p>}
        </header>
      </div>
    </div>
  )
}

export default FoodPartnerLogout
