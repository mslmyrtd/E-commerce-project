import styled from 'styled-components'
import { PageHero } from '../components'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    return <main>
        <PageHero title='checkout' />
        <Wrapper className='page'></Wrapper>
    </main>
}
const Wrapper = styled.div``
export default CheckoutPage
