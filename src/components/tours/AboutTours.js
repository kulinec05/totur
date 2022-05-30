import {Image, Tabs} from "antd";
import { useState } from "react";




const AboutTours = (props) => {
    const value = props.value
    const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);



    const { TabPane } = Tabs;


 
    return (
        <Tabs size='large'  defaultActiveKey="0" className='tour-day-tabs' style={{backgroundColor:'black',color:'white'}}>
            <TabPane tab="Общее"  key="0">
                {value.tourDesc}
            </TabPane>
            {Object.values(value.programDesc).map(val=><TabPane  tab={value.name==='Свой тур'?`${val.id}`:('День '+val.id)} key={val.id}>
                <div className='day-tab-desc' >
                <p >
                    {val.desc}
                </p>
                 <div style={{marginLeft:20}}>
                    <Image className='tab-image'
                        src={val.img}/>
                    
                </div> 
                </div>
            </TabPane>)}
        </Tabs>
    );
};
export default AboutTours