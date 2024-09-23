import React, { useCallback, useRef, useState } from 'react';
import { shuffle } from 'lodash'

export default function QuickStart() {
    const indexInputRef = useRef(null)
    const idInputRef = useRef(null)

    const [indexUserList, setIndexUserList] = useState([
        {id: 1,name: '김성은1'},
        {id: 2,name: '김성은2'},
        {id: 3,name: '김성은3'},
        {id: 4,name: '김성은4'}
    ])

    const [idUserList, setIdUserList] = useState([
        {id: 1,name: '김성은1'},
        {id: 2,name: '김성은2'},
        {id: 3,name: '김성은3'},
        {id: 4,name: '김성은4'}
    ])

    const test = [1,2,3,4]
    console.log(shuffle(test));
    
    const indexAdd = () =>{
        setIndexUserList([
            {
                id: indexUserList.length + 1,
                name: indexInputRef.current.value
            },
            ...indexUserList
        ])
    }

    const idAdd = () =>{
        setIdUserList([
            {
                id: idUserList.length + 1,
                name: idInputRef.current.value
            },
            ...idUserList
        ])
    }

    const handleShuffleList = useCallback(() => {
        setIdUserList(shuffle(idUserList))
      }, [idUserList])

    return (
        <div>
            <h2>key 값 테스트</h2>
            <strong>index</strong>
            {indexUserList.map((user, idx)=>
                <input key={idx} type="text" placeholder={user.name} style={{display: 'block'}}/>
            )}
            <input type="text" ref={indexInputRef} />
            <button onClick={indexAdd}>등록</button>

            
            <strong style={{display: 'block'}}>index</strong>
            {idUserList.map((user)=>
                <input key={user.id} type="text" placeholder={user.name} style={{display: 'block'}}/>
            )}
            <input type="text" ref={idInputRef} />
            <button onClick={idAdd}>등록</button>
            <button onClick={handleShuffleList}>test</button>
        </div>
    );
}

