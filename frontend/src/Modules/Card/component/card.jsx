import Addpub from '../../AddPub/component/Addpub'
import './card.css'
import { basesUrl } from "../Api/urls/url";
import axios from 'axios'
import { useQuery } from 'react-query';
function Card() {


  const getPub = async()=>{
    const response = await axios.get(basesUrl)
    return response.data
  }
  const { data } = useQuery('data',getPub)

  return (
    <>
      <Addpub />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', justifyContent: 'right' }}>
        
          {
            data && data.map((pub, index) => (
              <div className="card" key={index}>
                <img src={pub.image} alt="Placeholder" className="card-image" />
                <h3 className="card-title">{pub.title}</h3>
              </div>
            ))
          }
        </div>
      </>

  )
}

export default Card
