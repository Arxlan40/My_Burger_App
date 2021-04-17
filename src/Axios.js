import axios from 'axios'

const instance =axios.create({
    baseURL:"https://burger-app-13608-default-rtdb.firebaseio.com/"
})

export default instance;