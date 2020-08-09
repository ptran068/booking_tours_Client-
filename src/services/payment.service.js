import axios from 'axios'
import BaseService from './base.service'

import { API_URL } from '../.env'

export async function charge({token, description, amount}) {
  const tour = await axios.post(`${API_URL}/payment/charge?tour_id=62383e36-7db4-465d-9d3f-f82f52f7db3d`, {token, description, amount})

  return tour
}


class PaymentService extends BaseService {
    get entity() {
      return 'payment'
    }
  
    charge(data) {
      const charge = this.request({auth: true}).post(`/${this.entity}/charge?tour_id=62383e36-7db4-465d-9d3f-f82f52f7db3d`, data)
      return charge
    }

    getTransactions() {
      return this.request({auth: true}).get(`/${this.entity}`)
    }
  }
  
  export default new PaymentService()