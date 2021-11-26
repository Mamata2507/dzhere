import React from 'react'
import { useSelector } from 'react-redux'
import { Footer } from '../../../components/client/list/ListLayout'

export default function ListFooterContainer() {
    const {attendList} = useSelector(({list})=>({
        attendList : list.attendList,
    }))
    return (
        <Footer
            attendList = {attendList}
        />
    )
}
