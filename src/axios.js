import axios from 'axios'

const instance=axios.create({
    baseurl:'http://localhost:3000'
});

export default instance;