import React from 'react';
import '../css/ContentContainer.css'
import ImageGallery from './ImageGallery';
import BackButtonIcon from '../resources/close-x.png';

const styles = {
    contentView: {
        display: 'block',
        position: 'absolute',
    }
}

function ContentContainer(props){

    console.log(window.innerWidth)

    const BackButton = () => {
        if(props.isContentView && window.innerWidth < 450)
        {
            return <input type="image" src={BackButtonIcon} alt="back arrow" className="BackButton" onClick={() => props.updateContentView(false)} />;
        }
    }

    return (
        <div className="ContentContainer" style={props.isContentView && window.innerWidth < 450 ? styles.contentView : {}}>
            {BackButton()}
            <h1 className="PageTitle">{props.keyword}</h1>
            <Text text={props.text}/>
            <ImageGallery imageUrls={props.imageUrls}/>
        </div>
    );
}

//<Text text={Stelo6000()}/>
function Text(props){
    return (
        <p>
            {props.text}
        </p>
    )
};

export default ContentContainer;

// const Stelo6000 = () => {
//     let retString = "";
//     for (let i = 0; i<100; i++){
//         retString += "Stelo ";
//     }
//     return retString;
// }