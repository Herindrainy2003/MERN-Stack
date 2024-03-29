import * as Yup from 'yup'

const Schema = Yup.object().shape({
    email : Yup.string().email('Email invalide').required('champ vide') ,
    password : Yup.string().min(6).max(32).required('Champ vide')
})

export {Schema}