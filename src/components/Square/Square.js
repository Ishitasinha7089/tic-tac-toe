import './Square.css';

import {
  useEffect,
  useState,
} from 'react';

import Avatar from '../../ui/Avatar/Avatar';

const Square = ({data, value, onClick, stepNo}) => {
    const [isFilled, setIsFilled] = useState(false)

    useEffect(() => {
        if(value){
            setIsFilled(true)
        }
        if(stepNo===0){
            setIsFilled(false)
        }
    }, [value, stepNo])
    
    const renderAvatar = () =>{
        return (
            value!==null ?
            (
                value==="token1" ?
                <Avatar src={data.token1Image} style={data.style1} onClick={null}/>
                :
                <Avatar src={data.token2Image} style={data.style2} onClick={null}/>
            )

            : null
            
        )
           
    }

        return (
            <button disabled={isFilled} className="tTTSquare1518" onClick={onClick}>
                { data ? renderAvatar() : null}
            </button>
        );
}

export default Square;