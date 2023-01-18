function LayoutTest(props){

    return (
        <div style={{background : 'red',}}>
            test
            {props.test}
            {props.children}
        </div>    
    )
}

export default LayoutTest;