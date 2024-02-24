 
import { ConnectDB } from './../../config/dbconnect';

ConnectDB();

const page = () => {
  return (
    <div>About page {process.env.MONGO_URI}</div>
  )
}

export default page