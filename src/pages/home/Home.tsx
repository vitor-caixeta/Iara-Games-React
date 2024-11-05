import {useContext} from 'react'
import {PrimaryButton} from '../../components/buttons/PrimaryButton'
import {CustomLayout} from '../../components/custom-layout/CustomLayout'
import Navigation from '../../components/layout/navbar/Navbar'
import {AuthContext} from '../../store/AuthContext'

export const Home = () => {

  const { isAuthenticated, setIsAuthenticatedHandler } = useContext(AuthContext)

  return (
        <CustomLayout>
          {/* NAVIGATION */}
          <Navigation/>
          
          <>
          {
            isAuthenticated ? <PrimaryButton title='Logout' onClick={setIsAuthenticatedHandler}/> : null
          }
          </>
          {/* CONTENT */}

          {/* FOOTER */}

        </CustomLayout>        
  )
}
