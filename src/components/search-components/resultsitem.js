import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImgMediaCardItem from './cardItem.js'

export default class ResultsItem extends React.Component{





    render(){
        let categoryItems;
        let itemItems
        let category;
          console.log('HELLO PROPS')

        console.log(this.props)//array of objects

        if (this.props.itemFilter!=null){

            let itemImage;


            itemItems = this.props.itemFilter.map((item,index)=>{


                for (let i=0;i<this.props.allData.length;i++){

                    if (item.value === this.props.allData[i].value){
                        itemImage = this.props.allData[i].img
                    }
                }
                return (<div key={index} style = {{marginRight:10, marginTop:10}}>

                <ImgMediaCardItem item = {item} image = {itemImage} onClick = {this.props.list}/>

                    </div>
                )
            })

        }





        return( <div>
             <Grid container justify="center">
                    {itemItems}
            </Grid>
        </div>
        )
    }

}