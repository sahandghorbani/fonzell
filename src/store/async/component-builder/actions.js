import axios from 'axios'
import api from '../../../boot/api' ;

export async function fetch_sections({ commit }) {
    let res = await api.get('v1/pages/home')
    commit('FETCH_SECTIONS', res.data.sections)
}
