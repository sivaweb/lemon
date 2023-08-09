import CallToAction from '../components/CallToAction'
import CustomerSay from '../components/CustomerSay'
import Chicago from '../components/Chicago'
import Specials from '../components/Specials'
//import ConfirmedBooking from './ConfirmedBooking'

function Homepage(){
    return(
        <>
           {<CallToAction/>}
            {<Specials/>}
            {<CustomerSay/>}
            {<Chicago/>}
        
     </>
    )
}

export default Homepage