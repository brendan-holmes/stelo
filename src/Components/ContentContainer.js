import React from 'react';
import '../css/ContentContainer.css'
import ImageGallery from './ImageGallery';
import backArrow from '../resources/back-arrow.png';

const styles = {
    contentView: {
        display: 'block',
        position: 'absolute',
        minHeight: '100vh',
        width: '100vw'
    }
}

function ContentContainer(props){

    const BackArrow = () => {
        // console.log(props.isContentView)
        // console.log('window innerWidth < 450')
        // console.log(window.innerWidth < 450)
        // console.log('test')

        if(props.isContentView && window.innerWidth < 450)
        {
            return <input type="image" src={backArrow} alt="back arrow" className="BackArrow" onClick={() => props.updateContentView(false)} />;
        }
    }

    return (
        <div className="ContentContainer" style={props.isContentView && window.innerWidth < 450 ? styles.contentView : {}}>
            {BackArrow()}
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