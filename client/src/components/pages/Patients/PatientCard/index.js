import React from 'react'
import { Link } from 'react-router-dom'

export default ({ name, _id }) => <article style={ { padding: '5px 10px', backgroundColor: '#999' } }>
    <Link to={ `/showPatients/${_id}` }>{ name }</Link>
</article>